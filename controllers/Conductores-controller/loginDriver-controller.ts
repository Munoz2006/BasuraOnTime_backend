import { Request, Response } from 'express';
import ConductorServices from '../../services/Conductor/ConductorServices';
import generateToken from '../../Helpers/generateToken';
import dotenv from "dotenv";
dotenv.config();

export const loginConductor = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ mensaje: 'Correo y contraseña son requeridos' });
    }
    const login = await ConductorServices.login(email, password)
    if (login.logged) {
        return res.status(200).json({
            status: login.status,
            token: generateToken({id: login.id, id_rol: login.id_rol}, process.env.KEY_TOKEN, 40),
            id_conductor: login.id
        });
    }
  } catch (error) {
    console.error('Error al iniciar sesión del conductor:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};
