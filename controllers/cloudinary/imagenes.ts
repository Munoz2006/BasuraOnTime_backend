import express from 'express';
import { upload } from './uploadMiddleware';
import cloudinary from './cloudinaryConfig';
import { Readable } from 'stream';

const router = express.Router();

function bufferToStream(buffer: Buffer) {
  const stream = new Readable();
  stream.push(buffer);
  stream.push(null);
  return stream;
}

router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No se recibió ninguna imagen.' });
    }

    const stream = cloudinary.uploader.upload_stream(
      { folder: 'uploads' },
      (error, result) => {
        if (error) {
          console.error('Cloudinary error:', error);
          return res.status(500).json({ error: 'Error al subir imagen' });
        }
        return res.json({ url: result?.secure_url });
      }
    );

    bufferToStream(req.file.buffer).pipe(stream);

  } catch (err) {
    console.error('Error en el servidor:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

export default router;
