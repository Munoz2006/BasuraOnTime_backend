import { Request, Response } from "express";
import Auth from '../../Dto/Usuario/AuthDto';
import UserService from '../../services/Usuario/UserServices';
import generateToken from '../../Helpers/generateToken';
import dotenv from "dotenv";
dotenv.config();


let auth = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const login = await UserService.login(new Auth(email, password));
    if (login.logged) {
      return res.status(200).json({
        status: login.status,
        token: generateToken({id: login.id, rol: login.id_rol}, process.env.KEY_TOKEN, 20)
      });
    }
    return res.status(401).json({
      status: login.status
    });
  } catch (error) {
    console.log(error);
  }
}


export default auth;