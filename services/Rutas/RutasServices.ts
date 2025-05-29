import RutasRepository from '../../repositories/Rutas/RutasRepository';

class RutasService {
    static async configRutasAdmin() {
        const rutas = await RutasRepository.configRutasAdmin();
        const ruta = rutas.ruta;
        const origen = rutas.origen;
        const destino = rutas.destino;
        const distancia = rutas.distancia;
        const tiempoEstimado = rutas.tiempo_estimado;
        const rutaData = {
            ruta: ruta,
            origen: origen,
            destino: destino,
            distancia: distancia,
            tiempo_estimado: tiempoEstimado,
        };
        return rutaData;
    }
}

export default RutasService;