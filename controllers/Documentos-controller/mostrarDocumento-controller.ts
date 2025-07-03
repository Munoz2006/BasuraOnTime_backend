import { Request, Response } from 'express';
import DocumentoRepository from '../../repositories/Documentos/DocumentosRepository'

export const mostrarDocumentoPorParams = async (req: Request, res: Response) => {

  try {
    delete req.body.id
    const { id_rol } = req.body;

    if (!id_rol || isNaN(id_rol)) {
      return res.status(400).json({ mensaje: 'ID de rol inválido' });
    }

    const documento = await DocumentoRepository.obtenerPorId(Number(id_rol));

    if (!documento) {
      return res.status(404).json({ mensaje: 'Documento no encontrado' });
    }

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="' + documento.nombre_archivo + '"',
      'Content-Length': documento.archivo_pdf.length
    });

    res.send(documento.archivo_pdf);
  } catch (error) {
    console.error('Error al mostrar documento:', error);
    res.status(500).json({ mensaje: 'Error al mostrar el documento' });
  }
};

export default mostrarDocumentoPorParams