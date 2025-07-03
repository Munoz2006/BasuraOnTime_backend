import express from 'express';
import recoverPassword from '../controllers/Usuario-controller/recoverPassword';
import verifyToken from '../middleware/VerifyToken';
const router = express.Router();

router.put('/', verifyToken, recoverPassword);

export default router;
