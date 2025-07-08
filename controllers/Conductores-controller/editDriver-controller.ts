import ConductorRepository from '../../repositories/Conductores/ConductoresRepository';
import Conductor  from '../../Dto/Conductores/Conductor';
import { Request, Response } from 'express';

export const editarConductor = async (req: Request, res: Response) => {
  try {
    const { id_conductor, id_rol, email, nombres, apellidos, telefono, password, tipo_licencia, fecha_vencimiento_licencia, fk_id_camion } = req.body;

    if (!id_conductor || isNaN(id_conductor)) {
      return res.status(400).json({ mensaje: 'ID del conductor inválido' });
    }

    const conductor = new Conductor(
      id_rol,
      email,
      nombres,
      apellidos,
      telefono,
      password,
      tipo_licencia,
      fecha_vencimiento_licencia,
      fk_id_camion
    );
    await ConductorRepository.update(id_conductor, conductor);

    res.status(200).json({ mensaje: 'Conductor actualizado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al editar el conductor' });
  }
};

export default editarConductor;