import db from '../../config/config-db'; // Ajusta la ruta a tu archivo de conexión

export default class UsuarioRepository {
    async getAllUsuarios(): Promise<any[]> {
    const [result]: any = await db.execute('CALL GetAllUsuarios()');
    const usuarios = result[0];
    return usuarios;
  }
}
