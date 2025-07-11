import {Request, Response} from 'express'
import ConductorServices from '../../services/Conductor/ConductorServices'

let cambiarEstado = async (req: Request, res: Response) =>{
    try{
        delete req.body.rol
        const {estado, id} = req.body
        const cambiarEstado = ConductorServices.cambiarEstado(id, estado)
        return res.status(200).json({ status: 'Estado modificado'})
    } catch(error: any){
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        }
    }
}

export default cambiarEstado;
