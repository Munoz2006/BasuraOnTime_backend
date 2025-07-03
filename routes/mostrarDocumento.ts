import  Router  from 'express';
import  mostrarDocumentoPorParams from '../controllers/Documentos-controller/mostrarDocumento-controller';
import verifyToken from '../middleware/VerifyToken';

const mostrarDoc = Router();
mostrarDoc.post('/ver', verifyToken, mostrarDocumentoPorParams);

export default mostrarDoc;
