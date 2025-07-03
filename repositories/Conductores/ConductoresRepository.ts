import db from '../../config/config-db';
import Conductor from '../../Dto/Conductores/Conductores';

class ConductorRepository {
  static async add(conductor: Conductor) {
    const query = `
      INSERT INTO conductores (nombres, apellidos, telefono, tipo_licencia, fecha_vencimiento_licencia)
      VALUES (?, ?, ?, ?, ?)
    `;
    const values = [
      conductor.nombres,
      conductor.apellidos,
      conductor.telefono,
      conductor.tipo_licencia,
      conductor.fecha_vencimiento_licencia
    ];
    return db.execute(query, values);
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
