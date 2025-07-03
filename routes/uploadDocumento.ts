import Router  from 'express';
import multer from 'multer';
import subirDocumento from '../controllers/Documentos-controller/uploadDocumento-controller'
import verifyToken from '../middleware/VerifyToken';

const documento = Router();
const upload = multer();

documento.post('/subir-pdf', verifyToken, upload.single('archivo'), subirDocumento);

export default documento;
