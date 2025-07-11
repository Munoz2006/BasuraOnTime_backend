import SolitudRepository from '../../repositories/Solicitud/SolicitudRepository';
import  Solicitud  from '../../Dto/Solicitudes/Solicitud';

class SolicitudServis{
    static async registerSolicitud(solicitud: Solicitud) {
        solicitud.cantidad = parseInt(solicitud.cantidad.toString());
        return await SolitudRepository.add(solicitud);
    }

    static async mostrarsoli(){
        const solicitudes = await SolitudRepository.mostrarsoli();
        let solicitudesA: any[] = [];
        solicitudes.forEach((solicitud: any) => {
            const id_solicitud = solicitud.id_solicitud
            const zona = solicitud.zona;
            const cantidad = solicitud.cantidad;
            const fecha_solicitud = solicitud.fecha_solicitud;
            const tamano = solicitud.tamano;
            const estado = solicitud.estado;
            const nombres = solicitud.nombres;
            solicitudesA.push({id_solicitud ,zona, cantidad, fecha_solicitud, estado, tamano, nombres });
        });
        return solicitudesA;
    }

    static async estadoSoli(id_solicitud: number, estado: string){
        return await SolitudRepository.estadoSoli(id_solicitud, estado)
    }
}

export default SolicitudServis;