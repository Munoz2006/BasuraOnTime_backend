import { Request, Response } from "express";
import UserService from "../../services/Usuario/UserServices";

let profile = async (req: Request, res: Response) => {
  try {
    const idUser = req.body.id;    
    const mostraUsers = await UserService.MostrarInfo(idUser);
    return res.status(200).json(
      { data: mostraUsers }
    );
  } catch (error: any) {
    return res.status(500).json({ errorInfo: "An unknown error has occurred" }
    );
  }
}


export default profile;