import express from 'express';
import { loginConductor } from '../controllers/Conductores-controller/loginDriver-controller';

const router = express.Router();

router.post('/', loginConductor);

export default router;
