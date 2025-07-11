import express from 'express';
import verifyToken from '../middleware/VerifyToken';
import estadoSoliController from '../controllers/Solicitudes-controller/estadoSoliController'

const router = express.Router();

router.patch('/', verifyToken, estadoSoliController)

export default router;