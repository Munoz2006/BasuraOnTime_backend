import express from 'express';
import CamionController from '../controllers/Camion-controller/Estado_Camion';
import verifyToken from '../middleware/VerifyToken';
const router = express.Router();

router.get('/', verifyToken, CamionController)

export default router;