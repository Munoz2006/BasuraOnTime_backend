import { Request, Response } from "express";
import RutasService from "../../services/Rutas/RutasServices"

let configRutasAdmin = async (req: Request, res: Response) => {
    try {
        const rutas = await RutasService.configRutasAdmin();
        return res.status(200).json({
        data: rutas,
        });
    } catch (error) {
        console.log(error);
    }
}

export default configRutasAdmin;