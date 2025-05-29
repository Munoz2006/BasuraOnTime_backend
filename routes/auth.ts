import express from "express";
import authController from '../controllers/Usuario-controller/auth-controller';
import { validadorL, validatorLogin } from "../middleware/Validator/ValidadorLogin";
const router = express.Router();


router.post('/', validatorLogin, validadorL, authController);


export default router;
