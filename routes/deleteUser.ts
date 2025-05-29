import  Express  from "express";
import deleteUser  from "../controllers/Usuario-controller/deleteUser-controller";
import verifyToken from "../middleware/VerifyToken";

const router = Express.Router();

router.delete("/", verifyToken, deleteUser);
   
export default router;