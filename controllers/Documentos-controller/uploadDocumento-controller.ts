import { Request, Response } from 'express';
import DocumentoRepository from '../../repositories/Documentos/DocumentosRepository';
import Documento from '../../Dto/Documentos/Documentos'

export const subirDocumento = async (req: Request, res: Response) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ mensaje: 'No se ha enviado ningún archivo' });

    const documento = new Documento(file.originalname, file.buffer);
    await DocumentoRepository.guardar(documento);

    res.status(201).json({ mensaje: 'PDF guardado exitosamente' });
  } catch (error) {
    console.error('Error al guardar PDF:', error);
    res.status(500).json({ mensaje: 'Error al guardar el archivo' });
  }
};


export default subirDocumento