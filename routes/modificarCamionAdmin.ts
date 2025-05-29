import express from 'express';
import modificarCamionAdminController from '../controllers/Camion-controller/modificarCamionController';
import verifyToken from '../middleware/VerifyToken';

const route = express.Router();

route.put('/',verifyToken, modificarCamionAdminController);

export default route;