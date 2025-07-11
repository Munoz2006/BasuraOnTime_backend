import ConductorRepository from "../../repositories/Conductores/ConductoresRepository";
import Conductor from "../../Dto/Conductores/Conductor";
import generateHash from "../../Helpers/generateHash";

class ConductorServices {
    static async registerConductor(conductor: Conductor) {
        conductor.password = await generateHash(conductor.password);
        return await ConductorRepository.add(conductor);
    }

    static async deleteConductor(id_conductor: number) {
        return await ConductorRepository.delete(id_conductor);
    }

    static async updateConductor(id: number, conductor: Conductor) {
        return await ConductorRepository.update(id, conductor);
    }
    static async login(email: string, password: string){
        
        return await ConductorRepository.login(email, password)
    }
    static async cambiarEstado(id: number, estado: string){

        return await ConductorRepository.cambiarEstado(id, estado)
    }
    static async mostrarConductor(id: number){
        const conductor = await ConductorRepository.mostrarConductores(id);
        //console.log(conductor)
        return conductor;
    }
}
export default ConductorServices;