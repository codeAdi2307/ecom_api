import Express  from "express";
import { userRegister,userLogin} from "../controller/auth.controller.js";
import { verifyToken,verifyTokenAndAuth } from "../controller/verify.token.js";
const userRouter = Express.Router();

userRouter.post("/register",userRegister)
userRouter.post("/login",userLogin)
userRouter.put("/:id",verifyToken,verifyTokenAndAuth)





export default userRouter;