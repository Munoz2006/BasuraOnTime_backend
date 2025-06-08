import express from 'express';
import MostrarSoli from '../controllers/Solicitudes-controller/MostrarSoli-controller';
import verifyToken from '../middleware/VerifyToken';

const router = express.Router();

router.get('/', verifyToken, MostrarSoli)

export default router;