import db from '../../config/config-db';

class RutasRepository {
    static async configRutasAdmin() {
        const sql = 'SELECT * FROM rutas';
        const result: any = await db.execute(sql);
        const data = result[0][0];
        
        return data;
    }
}

export default RutasRepository;