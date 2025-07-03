import db from '../../config/config-db';
import Documento from '../../Dto/Documentos/Documentos';

class DocumentoRepository {
  static async guardar(documento: Documento) {
    const query = `INSERT INTO documentos (nombre_archivo, archivo_pdf) VALUES (?, ?)`;
    const values = [documento.nombre_archivo, documento.archivo_pdf];
    return db.execute(query, values);
  }

  static async obtenerPorId(id_rol: number) {
    const query = `CALL GetRutasWithRoles(?)`;
    const [result]: any = await db.execute(query, [id_rol]);
    return result.length > 0 ? result[0] : null;
  }


}

export default DocumentoRepository;
