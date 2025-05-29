import express from 'express';
import startAdminController from '../controllers/Admin-controller/startController';
import verifyToken from '../middleware/VerifyToken';
const router = express.Router();

router.get('/',verifyToken ,startAdminController);

export default router;