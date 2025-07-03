import { Router } from 'express';
import editarConductor from '../controllers/Conductores-controller/editDriver-controller';
import verifyToken from '../middleware/VerifyToken';

const editconductor = Router();
editconductor.put('/editar', verifyToken, editarConductor); // usando id_conductor en el body

export default editconductor;
