import { Request, Response } from "express";
import CamionService from "../../services/Camion/CamionServices";

let configCamionAdmin = async (req: Request, res: Response) => {
  //mostra Camiones
  try {
    const camion = await CamionService.configCamionAdmin();
    return res.status(200).json({
      data: camion,
    });
  } catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage });
    }
  }
 
};

export default configCamionAdmin;
