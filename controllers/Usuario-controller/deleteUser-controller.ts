import { Request, Response } from "express";
import UserService from "../../services/Usuario/UserServices";

const EliminarUsuario = async (req: Request, res: Response) => {
  try {
    const idUser = req.body.id;
    
    if (!idUser) {
      return res.status(400).json({ message: "ID de usuario requerido" });
    }

    const resultado = await UserService.EliminarUsuario(idUser);

    if (resultado) {
      return res.status(200).json({ message: "Usuario eliminado correctamente" });
    } else {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

export default EliminarUsuario;
