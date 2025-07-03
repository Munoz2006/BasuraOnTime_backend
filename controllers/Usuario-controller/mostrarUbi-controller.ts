import { Response, Request } from "express";
import {GeocodingRepository} from "../../repositories/Directions/DirectionsRepository";

import dotenv from "dotenv";
dotenv.config();

const geocodingRepo = new GeocodingRepository(process.env.GOOGLE_MAPS_API_KEY!);


let getDirecction = async (req: Request, res: Response) => {
    const { latitud, longitud } = req.body;
    try{
        if (typeof latitud !== 'number' || typeof longitud !== 'number') {
            return res.status(400).json({ status: false, message: 'Latitud y longitud deben ser números' });
        }

        const direccion = await geocodingRepo.reverseGeocode(latitud, longitud);
        if (!direccion) {
            return res.status(404).json({ status: false, message: 'Dirección no encontrada' });
        }

        return res.status(200).json({ status: true, data: direccion });
    } catch (error: any) {
        console.error('Error al obtener la dirección:', error);
        return res.status(500).json({ status: false, message: 'Error al obtener la dirección' });
    }
}

export default getDirecction;