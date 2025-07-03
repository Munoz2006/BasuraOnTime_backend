import { Request, Response } from 'express';
import ConductorRepository from '../../repositories/Conductores/ConductoresRepository';
import Conductor from '../../Dto/Conductores/Conductores';

export const agregarConductor = async (req: Request, res: Response) => {
  try {
    const { nombres, apellidos, telefono, tipo_licencia, fecha_vencimiento_licencia } = req.body;

    if (!nombres || !apellidos || !telefono || !tipo_licencia || !fecha_vencimiento_licencia) {
      return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
    }

    // ✅ Crear instancia del DTO
    const conductor = new Conductor(
      nombres,
      apellidos,
      telefono,
      tipo_licencia,
      fecha_vencimiento_licencia
    );

    await ConductorRepository.add(conductor);

    res.status(201).json({ mensaje: 'Conductor agregado correctamente' });
  } catch (error) {
    console.error('Error al agregar conductor:', error);
    res.status(500).json({ mensaje: 'Error al insertar el conductor' });
  }
};

export default agregarConductor