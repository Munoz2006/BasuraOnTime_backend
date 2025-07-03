import express from 'express';
import { upload } from '../../controllers/cloudinary/uploadMiddleware';
import cloudinary from '../../controllers/cloudinary/cloudinaryConfig';
import { Readable } from 'stream';


const router = express.Router();

router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No se recibió ninguna imagen.' });
    }

    const stream = cloudinary.uploader.upload_stream(
      {
        folder: 'uploads',
        resource_type: 'image',
      },
      (error, result) => {
        if (error) {
          console.error('Cloudinary error:', error);
          return res.status(500).json({ error: 'Error al subir imagen', details: error });
        }
        return res.status(200).json({ url: result?.secure_url });
      }
    );

    
    Readable.from(req.file.buffer).pipe(stream);


  } catch (err) {
    console.error('Error en el servidor:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});



export default router;
