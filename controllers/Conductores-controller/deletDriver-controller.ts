import { Request, Response } from 'express';
import ConductorRepository from '../../repositories/Conductores/ConductoresRepository';

export const eliminarConductor = async (req: Request, res: Response) => {
  try {
    const { id_conductor } = req.body;

    if (!id_conductor || isNaN(id_conductor)) {
      return res.status(400).json({ mensaje: 'ID del conductor inválido' });
    }

    const [result]: any = await ConductorRepository.delete(id_conductor);

    if (result.affectedRows === 0) {
      return res.status(404).json({ mensaje: 'Conductor no encontrado' });
    }

    res.status(200).json({ mensaje: 'Conductor eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar conductor:', error);
    res.status(500).json({ mensaje: 'Error al eliminar el conductor' });
  }
};


export default eliminarConductor