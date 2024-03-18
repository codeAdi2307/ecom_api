import Express  from "express";
import { userRegister,userLogin } from "../controller/auth.controller.js";
const userRouter = Express.Router();

userRouter.post("/register",userRegister)
userRouter.post("/login",userLogin)





export default userRouter;