import express from 'express';
import ConfingRutasAdminController from '../controllers/Ruta-controller/ConfigRutasAdminController';
import verifyToken from '../middleware/VerifyToken';

const router = express.Router();

router.get('/', verifyToken, ConfingRutasAdminController);