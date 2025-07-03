import db from '../../config/config-db';
import Solicitud from '../../Dto/Solicitudes/Solicitud';

class SolicitudRepository {
    static async add(solicitud: Solicitud) {
        try {
            const query = 'CALL AddSolicitud(?, ?, ?, ?, ?, ?)';
            const values = [solicitud.zona, solicitud.cantidad, 
                solicitud.tipo_residuo, solicitud.fecha_solicitud, 
                solicitud.tamano, solicitud.id];
                console.log(values);
               const result = await db.execute(query, values);
            return result;
        } catch (error) {
            console.error('Error al agregar solicitud:', error);
            throw error;
        }
    }

    static async mostrarsoli(){
        try {
            const query = 'CALL GetmostrarSoli()';
            const [result]: any = await db.execute(query);
            console.log(result);
            const solicitudes = result[0];
            return solicitudes;
        } catch (error) {
            console.error('Error al mostrar solicitudes:', error);
            throw error;
        }
    }
}

export default SolicitudRepository;