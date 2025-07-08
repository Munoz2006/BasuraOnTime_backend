import express from 'express';
import { loginConductor } from '../controllers/Conductores-controller/loginDriver-controller';

const router = express.Router();

router.post('/iniciar', loginConductor);

export default router;
