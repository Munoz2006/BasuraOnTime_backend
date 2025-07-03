import { Request, Response } from "express";
import UserService from "../../services/Usuario/UserServices";

const EditarUsuario = async (req: Request, res: Response) => {
  try {
    const {email, nombres, apellidos, telefono, password } = req.body;
    const id = req.body.id;
    delete req.body.rol;
    const result = await UserService.EditarUsuario(email, nombres, apellidos, telefono, password, id);
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
