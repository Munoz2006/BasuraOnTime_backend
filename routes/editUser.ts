import  Express  from "express";
import EditarUsuario  from "../controllers/Usuario-controller/editUser";
import verifyToken from "../middleware/VerifyToken";
const router = Express.Router();

router.put("/", verifyToken, EditarUsuario);
   
export default router;