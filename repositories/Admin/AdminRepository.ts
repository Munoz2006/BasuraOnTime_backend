import db from '../../config/config-db';
import Auth from '../../Dto/Admin/AuthDto';


class AdminRepository {
    static async login(auth: Auth) {
        const sql = 'SELECT id_admin, password, id_rol FROM administrador WHERE email = ?';
        const values = [auth.email];
        const result: any = await db.execute(sql, values);
        if (result[0].length > 0) {
            const isPasswordValid = auth.password === result[0][0].password; 
            if (isPasswordValid) {
                return { logged: true, status: "Successful authentication", id: result[0][0].id_admin, id_rol: result[0][0].id_rol };
            }
            return { logged: false, status: "Invalid username or password" };
        }
        return { logged: false, status: "Invalid username or password" };
    }
}
export default AdminRepository;