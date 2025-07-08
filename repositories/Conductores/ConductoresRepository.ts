import db from '../../config/config-db';
import Conductor from '../../Dto/Conductores/Conductor';

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


}

export default ConductorRepository;
