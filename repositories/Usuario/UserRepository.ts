import db from '../../config/config-db';
import User from '../../Dto/Usuario/UserDto';
import Auth from '../../Dto/Usuario/AuthDto';
import bcrypt from 'bcryptjs';


class UserRepository {

    static async add(user: User){
        try {
            const connection = await db.getConnection();
            connection.release();
            const sql = 'CALL InsertUsuario(?, ?, ?, ?, ?, ?, ?, ?)';
            const values = [user.id_rol, user.email, user.nombres, user.apellidos, user.telefono, user.password, user.latitud, user.longitud];
            console.log(typeof(user.latitud));
            const result = await db.execute(sql, values);
            return result;
        } catch (error) {
            console.error('no se logro conectar a la db', error);
            throw error;
        }
    }

    static async login(auth: Auth){
        const sql = 'CALL LoginUsuario(?)';
        const values = [auth.email];
        const result: any = await db.execute(sql, values);
        if (result[0].length > 0){
            const user = result[0][0];
            if(!user[0].password){
                return {logged: false, status: "Usuario no tiene contraseña" };
            }
            const isPasswordValid = await bcrypt.compare(auth.password, user[0].password);
          if (isPasswordValid){
            return {logged: true, status: "Successful authentication", id: user[0].id_usuario, id_rol: user[0].id_rol};
          }
          return {logged: false, status: "Invalid username or password" };
        }
        return {logged: false, status: "Invalid username or password" };
    }

    static async Mostrarinfo(id: number){
        const sql = 'CALL GetUsuarioById(?)';
        const values = [id];
        const result: any = await db.execute(sql, values);
        if (result[0].length > 0){
            console.log(result[0][0]);
            return result[0][0];
        }
        return {status: false, data: null};
    }

    static async EliminarUsuario(id: number) {
        const sql = 'CALL DeleteUsuarioById(?)';
        const values = [id];
        try {
            const result: any = await db.execute(sql, values);
        if (result[0].affectedRows > 0) {
             return { status: true, message: 'Usuario eliminado correctamente' };
        }
            return { status: false, message: 'Usuario no encontrado' };
        } catch (error) {
            return { status: false, message: 'Error al eliminar el usuario', error };
        }
    }

    static async EditarUsuario( email: string, nombres: string, apellidos: string, telefono: string, password: string, id: number) {
        const sql = 'CALL UpdateUsuarioById(?, ?, ?, ?, ?, ?)';
        const values = [email, nombres, apellidos, telefono, password, id];    
        const result: any = await db.execute(sql, values);
        return result;
    }

    static async validateEmail(email: string) {
        const sql = 'CALL ValidateEmail(?)';
        const values = [email];
        const result: any = await db.execute(sql, values);
        if (result[0].length > 0){
            return {status: true, id: result[0][0].id_usuario, id_rol: result[0][0].id_rol};
        }else {
            return {status: false, message: 'Email no encontrado'};
        }
    }
    static async recoverPassword(Newpassword: string, email: string) {
        const sql = 'CALL UpdateUsuarioPasswordByEmail(?, ?)';
        const values = [Newpassword,email];
        const result: any = await db.execute(sql, values);
        console.log(result);
        if (result[0].affectedRows > 0) {
            return { status: true, message: 'Contraseña actualizada correctamente' };
        }
        return { status: false, message: 'Error al actualizar la contraseña' };
    }


}


export default UserRepository;