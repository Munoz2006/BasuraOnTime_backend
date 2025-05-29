import { Request, Response } from "express";
import EstadoCamionService from "../../services/Camion/CamionServices";

let estadoCamion = async (req: Request, res: Response) => {
  try {
    const estadoCamion = await EstadoCamionService.estadoCamion();
    return res.status(200).json({
     data: estadoCamion,
    });
  } catch (error) {
    console.log(error);
  }
}

export default estadoCamion;