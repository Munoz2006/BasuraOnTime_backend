import db from '../../config/config-db';
import Auth from '../../Dto/Admin/AuthDto';


class AdminRepository {
    static async login(auth: Auth) {
        const sql = 'CALL LoginUsuario(?)';
        const values = [auth.email];
        const result: any = await db.execute(sql, values);
        if (result[0].length > 0) {
            const user = result[0][0];
            const isPasswordValid = auth.password === user[0].password;
            if (isPasswordValid) {
                return { logged: true, status: "Successful authentication", id: user[0].id_usuario, id_rol: user[0].id_rol };
            }
            return { logged: false, status: "Invalid username or password1" };
        }
        return { logged: false, status: "Invalid username or password2" };
    }
}
export default AdminRepository;