import express from 'express';
import passwordController from '../controllers/Usuario-controller/validatePassword';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/', passwordController)

export default router;
