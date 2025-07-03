import { Request, Response } from "express";
import User from '../../Dto/Usuario/UserDto';
import UserService from '../../services/Usuario/UserServices';


let register = async (req: Request, res: Response) => {
  try {
    const {
      id_rol,
      email,
      password,
      nombres,
      apellidos,
      telefono,
      latitud,
      longitud
    } = req.body;
    console.log(req.body);
    const registerUser = await UserService.register(new User(id_rol, email, nombres, apellidos, password, telefono, latitud, longitud))
    return res.status(201).json(
      { status: 'register ok'}
    );
  } catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage }
      );
    }
  }
}


export default register;