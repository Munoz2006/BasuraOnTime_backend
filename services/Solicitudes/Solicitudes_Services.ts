import SolitudRepository from '../../repositories/Solicitud/SolicitudRepository';
import  Solicitud  from '../../Dto/Solicitudes/Solicitud';

class SolicitudServis{
    static async registerSolicitud(solicitud: Solicitud) {
        solicitud.cantidad = parseInt(solicitud.cantidad.toString());
        return await SolitudRepository.add(solicitud);
    }

    static async mostrarsoli(){
        return await SolitudRepository.mostrarsoli();
    }
}

export default SolicitudServis;