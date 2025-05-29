import { Request, Response } from "express";
import UserService from "../../services/Usuario/UserServices";

const EditarUsuario = async (req: Request, res: Response) => {
  try {
    const {email, nombres, apellidos, password } = req.body;

    if ( !email || !nombres || !apellidos || !password ) {
      return res.status(400).json({ message: "Faltan campos requeridos" });
    }
    delete req.body.id;
    const resultado = await UserService.EditarUsuario(nombres, apellidos, password, email,);
    return res.status(200).json({
        status: "usuario editado correctamente",
    })
} catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage });
    }
    return res.status(500).json({ errorInfo: error });
  }
}

export default EditarUsuario;
