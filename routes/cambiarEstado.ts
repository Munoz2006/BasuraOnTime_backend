import express from 'express'
import cambiarEstado from '../controllers/Conductores-controller/cambiarEstado'
import verifyToken from '../middleware/VerifyToken'

const route = express.Router()

route.patch('/', verifyToken, cambiarEstado)

export default route;