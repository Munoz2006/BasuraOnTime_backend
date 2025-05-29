import express from "express";
const router = express.Router();
import verifyToken from "../middleware/VerifyToken";
//import notificarUserController from "../controllers/NotificarUser-controller/NotificarUser-controller";

//router.post("/", verifyToken, (req, res) => {