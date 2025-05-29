import { Request, Response } from "express";
import CamionService from "../../services/Camion/CamionServices";

let deleteCamionController = async (req: Request, res: Response) => {
    try {
        const { placa } = req.body;
        delete req.body.id; 
        const deleteCamion = await CamionService.deleteCamion(placa);
        return res.status(200).json({
            status : "Eliminado correctamente",
        });
    } catch (error: any) {
        return res.status(500).json({
            status: "Error",
            message: error.message,
        });
    }
}

export default deleteCamionController;