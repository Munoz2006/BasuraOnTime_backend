import express from 'express';
import authController from '../controllers/Admin-controller/authController';
import { ValidadorLoginAdmin, validadorLA } from '../middleware/Validator/ValidadorLoginAdmin';
const router = express.Router();

router.post('/',ValidadorLoginAdmin , validadorLA ,authController);

export default router;