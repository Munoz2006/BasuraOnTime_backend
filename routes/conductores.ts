import express from 'express';
import  agregarConductor  from '../controllers/Conductores-controller/Conductores-controller';
import verifyToken from '../middleware/VerifyToken';

const   conductor = express.Router();

conductor.post('/conductores', verifyToken, agregarConductor);

export default conductor;
