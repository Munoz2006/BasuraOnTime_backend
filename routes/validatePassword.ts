import express from 'express';
import passwordController from '../controllers/Usuario-controller/validatePassword';
import recoverPassword from '../controllers/Usuario-controller/recoverPassword';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/', passwordController)

router.put('/reset-password', recoverPassword);


export default router;
