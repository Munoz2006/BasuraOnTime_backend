import { Request, Response } from "express";
import ConductorServices from "../../services/Conductor/ConductorServices";

let mostrarConductor = async (req: Request, res: Response) =>{
    try{
        delete req.body.rol
        const {id} = req.body
        const mostrarConductor = await ConductorServices.mostrarConductor(id)
        
        return res.status(200).json({
            data: mostrarConductor
        })
    } catch(error: any){
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        }
    }
}

export default mostrarConductor