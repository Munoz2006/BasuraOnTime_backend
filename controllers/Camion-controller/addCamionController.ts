import { Request, Response } from "express";
import Camion from "../../Dto/camion/Camion";
import CamionService from "../../services/Camion/CamionServices";

let addCamionController = async (req: Request, res: Response) => {
    try{
        const {
            placa,
            modelo,
            capacidad,
            estado_camion,
            marca,
            tipo_c,
        } = req.body;
        delete req.body.id;
        const addCamion = await CamionService.addCamion(new Camion(placa, modelo, capacidad, estado_camion, marca, tipo_c));
        return res.status(201).json(
            { status: 'Camion agregado correctamente'}
        );

    } catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        }
    }
}

export default addCamionController;