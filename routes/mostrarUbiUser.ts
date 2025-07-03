import express from "express";
import mostrarUbiUser from "../controllers/Usuario-controller/mostrarUbi-controller";
import verifyToken from "../middleware/VerifyToken";

const route = express.Router();

route.post('/', verifyToken, mostrarUbiUser);

export default route;
