import db from '../../config/config-db';

class CamionRepository{

    static async addCamion(camion: any) {
        try{
            const sql = 'INSERT INTO camion (placa, marca, modelo, capacidad, estado_camion, tipo_c, fk_id_administrador) VALUES (?, ?, ?, ?, ?, ?, ?)';
            const values = [camion.placa, camion.marca, camion.modelo, camion.capacidad, camion.estado_camion, camion.tipo_c, camion.id];
            const result = await db.execute(sql, values);
        } catch(error){
            console.error("No se puedo agregar", error)
            throw error
        }
    }

    static async modifyTruck(camion: any) {
        const sql = 'UPDATE camion SET modelo = ?, capacidad = ?, estado_camion = ?, marca = ?, tipo_c = ? WHERE placa = ?';
        const values = [camion.modelo, camion.capacidad, camion.estado_camion, camion.marca, camion.tipo_c, camion.placa];
        
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
