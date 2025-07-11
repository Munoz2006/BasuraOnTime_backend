import db from '../../config/config-db';
import Conductor from '../../Dto/Conductores/Conductor';
import bcrypt from 'bcryptjs';

class ConductorRepository {
  static async add(conductor: Conductor) {
    try {
        const [resultUsuario] = await db.execute(
        'CALL InsertUsuario(?, ?, ?, ?, ?, ?, ?, ?)',
          [
          conductor.id_rol,
          conductor.email,
          conductor.nombres,
          conductor.apellidos,
          conductor.telefono,
          conductor.password,
          null,
          null
          ]
        );
        const rows = resultUsuario as any[][];
        const id_conductor = rows[0][0].id_usuario; 

        const queryConductor = 'CALL AddConductor(?, ?, ?, ?)';
        const valuesConductor = [
            id_conductor,
            conductor.tipo_licencia,
            conductor.fecha_vencimiento_licencia,
            conductor.fk_id_camion
        ];
        const result = await db.execute(queryConductor, valuesConductor);
        return result;
    } catch (error) {
        console.error('Error al agregar conductor:', error);
        throw new Error('Error al insertar el conductor');
    }
  }


    static async delete(id_conductor: number) {
      const query = 'DELETE FROM conductores WHERE id_conductor = ?';
      return db.execute(query, [id_conductor]);
    }
    


    static async update(id: number, conductor: Conductor) {
      const query = `
        UPDATE conductores
        SET nombres = ?, apellidos = ?, telefono = ?, tipo_licencia = ?, fecha_vencimiento_licencia = ?
        WHERE id_conductor = ?
      `;
      const values = [
        conductor.nombres,
        conductor.apellidos,
        conductor.telefono,
        conductor.tipo_licencia,
        conductor.fecha_vencimiento_licencia,
        id
      ];
      return db.execute(query, values);
    }
    static async login(email: string, password: string){
      try {

        const sql = 'CALL LoginUsuario(?)';
        const values = [email];
        const result: any = await db.execute(sql, values);
        if (result[0].length > 0){
            const user = result[0][0];
        if(!user[0].password){
            return {logged: false, status: "Usuario no tiene contraseña" };
        }
        const isPasswordValid = await bcrypt.compare(password, user[0].password);
        if (isPasswordValid){
            return {logged: true, status: "Successful authentication", id: user[0].id_usuario, id_rol: user[0].id_rol};
        }
        return {logged: false, status: "Invalid username or password" };
        }
        return {logged: false, status: "Invalid username or password" };  
      } catch (error){
        console.error('Error al agregar conductor:', error);
        throw new Error('Error al insertar el conductor');
      }

    }

    static async modifiyConductor(lat: number, lng: number, estado: string, id: number){
      try{
        const sql = 'CALL UpdateConductorDatos(?, ?, ?, ?)'
        const values = [id, lat, lng, estado]
        return db.execute(sql, values)
      } catch (error: any){
        console.error('error al cambiar los datos', error);
        throw new Error('Error al cambiar los datos');
      }
    }
    static async consultarEstado(id: number){
        const sql = 'CALL GetLatLongIfConductorActivo(?)'
        const values = [id]
        const result: any = await db.execute(sql, values);
        const estado = result[0][0]
        return estado[0].estado
    }
    static async cambiarEstado(id: number, estado: string){
      try{
        const sql = 'CALL sp_actualizar_estado_conductor(?,?)'
        const values = [id, estado];
        return db.execute(sql, values)
      } catch(error: any){
        console.error('error al cambiar los datos', error);
        throw new Error('Error al cambiar los datos');
      }
    }

    static async mostrarConductores(id: number){
      try{
        const sql = 'CALL GetConductoresPorAdministrador(?)'
        const values = [id]
        const result: any = await db.execute(sql, values);
        //console.log(result[0][0])
        return result[0][0]
      } catch (error){
         console.error('error al cambiar los datos', error);
        throw new Error('Error al cambiar los datos');
      }
    }
  }
export default ConductorRepository;
