import { Request, Response } from "express";
import Solicitud_Servis from '../../services/Solicitudes/Solicitudes_Services';
import Solicitud from "../../Dto/Solicitudes/Solicitud";

let registerSolicitud = async(req : Request, res: Response) =>{
    try{
        const{
            zona,
            fecha_solicitud,
            cantidad,
            tipo_residuo,
            tamano,
        } = req.body;
        delete req.body.id;    
        const registerSolicitud = await Solicitud_Servis.registerSolicitud( new Solicitud(cantidad, tipo_residuo, tamano, zona, fecha_solicitud));
        return res.status(201).json(
            { status: 'Solicitud registrada correctamente',}
        );
    } catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage })
        }
    }
}

export default registerSolicitud;