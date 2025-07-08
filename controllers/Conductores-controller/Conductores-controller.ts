import { Request, Response } from 'express';
import ConductorServices from '../../services/Conductor/ConductorServices';
import Conductor from '../../Dto/Conductores/Conductor';
import enviarCorreo from '../../Helpers/utils/nodemailer';

export const agregarConductor = async (req: Request, res: Response) => {
  try {
    delete req.body.id;
    delete req.body.rol;
    const { id_rol , email, nombres, apellidos, telefono, password ,tipo_licencia, fecha_vencimiento_licencia, fk_id_camion } = req.body;

    if (!id_rol || !email || !nombres || !apellidos || !telefono || !password || !tipo_licencia || !fecha_vencimiento_licencia || !fk_id_camion) {
      return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
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
      fk_id_camion,
    );

    await ConductorServices.registerConductor(conductor);
    await enviarCorreo(email, password);

    res.status(201).json({ mensaje: 'Conductor agregado y correo enviado' });
  } catch (error) {
  console.error('Error al registrar conductor:', error);
  res.status(500).json({ mensaje: 'Error al registrar el conductor', error: error instanceof Error ? error.message : error });
}

  
};


export default agregarConductor