import exprees from 'express';
import configCamionAdminController from '../controllers/Camion-controller/Confi_CamionAdmin';
import verifyToken from '../middleware/VerifyToken';

const router = exprees.Router();

router.get('/', verifyToken, configCamionAdminController);

export default router;