import { Request, Response } from "express";
import UserService from "../../services/Usuario/UserServices";

let MostrarInfo = async (req: Request, res: Response) => {
  try {
    const idUser = req.body.id;
    const mostrarInfo = await UserService.MostrarInfo(idUser);
    return res.status(200).json({
     data: mostrarInfo,
    });
  } catch (error) {
    console.log(error);
  }
}

export default MostrarInfo;