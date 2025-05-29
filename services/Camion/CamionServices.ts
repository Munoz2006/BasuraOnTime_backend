import CamionRepository from '../../repositories/Camion/CamionRepository';


class CamionService {
    
    static async addCamion(camion: any) {
        return await CamionRepository.addCamion(camion); 
    }

    static async modifyTruck(camion: any) {
        return await CamionRepository.modifyTruck(camion); 
    }
    static async deleteCamion(placa: string) {
        return await CamionRepository.deleteCamion(placa); 
    }
    static async estadoCamion() {
        const camion = await CamionRepository.estadoCamion();
        let camionA: any[] = [];
        camion.forEach((camion: any) => {
            const estado = camion.estado_camion;
            const tipo = camion.tipo_c;
            const camionData = {
                tipo: tipo,
                estado_camion: estado,
            }
            camionA.push(camionData);
        });
        return camionA;
    }

    static async configCamionAdmin() {
        const camion = await CamionRepository.estadoCamion();
        let camionA: any[] = [];
        camion.forEach((camion: any) => {
            const placa = camion.placa;
            const modelo = camion.modelo;
            const capacidad = camion.capacidad;
            const estado = camion.estado_camion;
            const marca = camion.marca;
            const tipo = camion.tipo_c;
            const camionData = {
                placa: placa,
                modelo: modelo,
                capacidad: capacidad,
                estado_camion: estado,
                marca: marca,
                tipo_c: tipo,
            };
            camionA.push(camionData);
        });
        return camionA;
    }
}

export default CamionService;