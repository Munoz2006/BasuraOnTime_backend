import { Request, Response } from "express";
import dotenv from "dotenv";
import UserService from "../../services/Usuario/UserServices";

dotenv.config();

let recoverPassword = async (req: Request, res: Response) => {
    try {
        const { email, Newpassword, validatePassword} = req.body;
        const newPassword = await UserService.recoverPassword(Newpassword, validatePassword, email);
        return res.status(200).json({ message: "Contraseña cambiada" });
    } catch (error: any) {
        return res.status(500).json({ message: "Error al cambiar la contraseña" });
    }
}

export default recoverPassword;
