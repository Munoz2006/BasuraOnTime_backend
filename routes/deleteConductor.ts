import { Router } from 'express';
import eliminarConductor from '../controllers/Conductores-controller/deletDriver-controller';
import verifyToken from '../middleware/VerifyToken';

const elminarConductor = Router();
elminarConductor.delete('/eliminar', verifyToken ,eliminarConductor); // usando id_conductor en el body

export default elminarConductor;
