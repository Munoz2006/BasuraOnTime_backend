import AdminRepository from '../../repositories/Admin/AdminRepository';
import Auth from '../../Dto/Admin/AuthDto';

class AdminService {
    static async login(auth: Auth) {
        return await AdminRepository.login(auth);
    }
}
export default AdminService;