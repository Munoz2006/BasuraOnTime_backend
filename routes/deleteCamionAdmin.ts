import express from 'express';
import deleteCamionAdminController from '../controllers/Camion-controller/deleteCamionController';
import verifyToken from '../middleware/VerifyToken';

const route = express.Router();

route.delete('/',verifyToken, deleteCamionAdminController);

export default route;