import express from 'express';
import addCamionController from '../controllers/Camion-controller/addCamionController';
import verifyToken from '../middleware/VerifyToken';
const router = express.Router();

router.post('/', verifyToken, addCamionController);

export default router;