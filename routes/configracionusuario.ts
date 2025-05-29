import express from "express";
const router = express.Router();
import verifyToken from "../middleware/VerifyToken";
import configuracionUserController from "../controllers/Usuario-controller/ConfiguracionUser-controller";


router.get("/", verifyToken, )