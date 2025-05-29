import { Request, Response } from "express";

let startAdmin = async (req: Request, res: Response) => {
    try{
        const idAdmin = req.body.id;
        return res.status(200).json(
            { status: 'Get startAdmin Ok', id: idAdmin }
        );
    }catch (error: any) {
        return res.status(500).json({ errorInfo: "Error al traer la info del admin" }
        );
    }
}
export default startAdmin;