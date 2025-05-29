import express from "express";
import registerController from '../controllers/Usuario-controller/register-controller';
import { validatorRegister, validadorR } from "../middleware/Validator/ValidadorRegister";
const router = express.Router();


router.post('/',validatorRegister, validadorR ,registerController);


export default router;