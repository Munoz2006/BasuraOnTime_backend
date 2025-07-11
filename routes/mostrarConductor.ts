import express from 'express'
import mostrarConductor from '../controllers/Conductores-controller/mostrarConductor'
import verifyToken from '../middleware/VerifyToken'

const route = express.Router();

route.get('/', verifyToken, mostrarConductor)

export default route;