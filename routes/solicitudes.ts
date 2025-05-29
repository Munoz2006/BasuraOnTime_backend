import express from "express";
import verifyToken from "../middleware/VerifyToken";
import solicitudesController  from "../controllers/Solicitudes-controller/Solicitudes-controller";
import { validadorResiduosEspeciales, validadorRE } from "../middleware/Validator/ValidadorResiduosEspeciales";
const router = express.Router();

router.post('/',validadorResiduosEspeciales, validadorRE, verifyToken, solicitudesController)

export default router;
