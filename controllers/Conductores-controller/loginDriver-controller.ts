import { Request, Response } from 'express';
import db from '../../config/config-db';
import bcrypt from 'bcryptjs';

export const loginConductor = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ mensaje: 'Correo y contraseña son requeridos' });
    }

    const [rows]: any = await db.execute(
      'SELECT * FROM usuario WHERE email = ?',
      [email]
    );

    if (rows.length === 0) {
      return res.status(404).json({ mensaje: 'Conductor no encontrado' });
    }

    const conductor = rows[0];

    const isMatch = await bcrypt.compare(password, conductor.password);

    if (!isMatch) {
      return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
    }

    res.status(200).json({
      mensaje: 'Inicio de sesión exitoso',
      conductor: {
        id_conductor: conductor.id_conductor,
        nombres: conductor.nombres,
        apellidos: conductor.apellidos,
        email: conductor.email
      }
    });
  } catch (error) {
    console.error('Error al iniciar sesión del conductor:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};
