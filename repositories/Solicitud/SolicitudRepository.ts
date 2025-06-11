import db from '../../config/config-db';
import Solicitud from '../../Dto/Solicitudes/Solicitud';

class SolicitudRepository {
    static async add(solicitud: Solicitud) {
        const query = 'INSERT INTO solicitudes (zona, fecha_recoleccion, cantidad, tipo_residuo, tamano) VALUES( ?, ?, ?, ?, ?)';
        const values = [solicitud.zona, solicitud.fecha_solicitud, solicitud.cantidad, solicitud.tipo_residuo, solicitud.tamano];
        return db.execute(query, values);
    }

    static async mostrarsoli(){
        const query = 'SELECT zona, fecha_recoleccion, cantidad, tipo_residuo, tamano, estado FROM solicitudes';
        const result = await db.execute(query);
        return result[0];
    }
}

export default SolicitudRepository;