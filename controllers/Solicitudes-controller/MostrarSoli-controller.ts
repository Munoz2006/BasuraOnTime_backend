import { Request, Response } from "express";
import SolicitudServis from "../../services/Solicitudes/Solicitudes_Services";

let mostrarsoli = async (req: Request, res: Response) =>{
    try {
        const mostrarsoli = await SolicitudServis.mostrarsoli();
        return res.json({
            data: mostrarsoli
        })
    } catch (error: any) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export default mostrarsoli;
