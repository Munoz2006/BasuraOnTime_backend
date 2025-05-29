import { Request, Response } from "express";
import Camion from "../../Dto/camion/Camion";
import CamionService from "../../services/Camion/CamionServices";
import dotenv from "dotenv";
dotenv.config();

let modificarCamionAdminController = async (req: Request, res: Response) => {
  try {
    const {
         placa, 
         modelo,
         capacidad,
         estado_camion,
         marca,
         tipo_c,
    } = req.body;

    delete req.body.id;
    const modifyTruck = await CamionService.modifyTruck(new Camion(placa, modelo, capacidad, estado_camion, marca, tipo_c));
    return res.status(200).json({
      status: 'Se modifico el camion',
    });
  } catch (error: any) {

    if (error && error.code == "ER_DUP_ENTRY") {
        return res.status(500).json({ errorInfo: error.sqlMessage });
    }
  }

};

export default modificarCamionAdminController;
