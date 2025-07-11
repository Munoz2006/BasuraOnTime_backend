import { Request, Response } from 'express';
import { sendRecoveryEmail } from '../../Helpers/sendEmail';
import UserService from '../../services/Usuario/UserServices';
import generateToken from '../../Helpers/generateToken';
import dotenv from 'dotenv';

dotenv.config();

 let passwordController = async (req: Request, res: Response) => {
  try{
    const { email } = req.body;
    const usuarioExiste = await UserService.valiateEmail(email); 
    if (!usuarioExiste) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    const token = generateToken({id: usuarioExiste.id, rol: usuarioExiste.id_rol}, process.env.KEY_TOKEN, 15);
    const link = `https://basura-on-time-ihtk.vercel.app/recuperar`;
    await sendRecoveryEmail(email, link);
    return res.status(200).json({
      mensaje: 'Correo de recuperación enviado',
      token: token,
     });
  } catch (error: any) {
    return res.status(500).json({ mensaje: 'Error al enviar el correo de recuperación' });
  }

};

export default passwordController;
