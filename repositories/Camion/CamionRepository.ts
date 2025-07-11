import db from '../../config/config-db';

class CamionRepository{

    static async addCamion(camion: any) {
        try{
            const sql = 'CALL AddCamion(?, ?, ?, ?, ?, ?)';
            const values = [
                camion.placa,
                camion.marca,
                camion.modelo,
                camion.capacidad,
                camion.tipo_c,
                camion.id
            ];
            const result = await db.execute(sql, values);
            const rows = result[0] as any[][];
            const id_camion = rows[0][0].id_camion;
            return id_camion;
        } catch(error){
            console.error("No se puedo agregar", error)
            throw error
        }
    }

    static async modifyTruck(camion: any) {
        const sql = 'CALL UpdateCamion(?, ?, ?, ?, ?)';
        const values = [camion.placa, camion.marca, camion.modelo, camion.capacidad, camion.tipo_c];
        
        return db.execute(sql, values);
    }

    static async deleteCamion(placa: string) {
        const sql = 'DELETE FROM camion WHERE placa = ?';
        const values = [placa];
        
        return db.execute(sql, values);
    }
    
    static async estadoCamion() {
       const sql = 'SELECT * FROM camion';
       const result: any = await db.execute(sql);
       const data = result[0];       
       return data;
    }
}

export default CamionRepository;
