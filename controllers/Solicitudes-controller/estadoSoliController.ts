import {Request, Response } from "express";
import SolicitudServis from "../../services/Solicitudes/Solicitudes_Services";

let estadoSoliController = async (req: Request, res: Response) => {
    try {
        delete req.body.id;
        delete req.body.rol;
        const {id_solicitud, estado} = req.body;
        const estadoSoli = SolicitudServis.estadoSoli(id_solicitud, estado);

        return res.json({
            data: estadoSoli
        });
    } catch (error: any){
         if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage })
        }
    }
}

export default estadoSoliController;