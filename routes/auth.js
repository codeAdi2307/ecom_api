import Express  from "express";
import { userRegister,userLogin,userDetails,userDelete} from "../controller/auth.controller.js";
import { verifyToken,verifyTokenAndAuth,verifyTokenAndAdmin} from "../controller/verify.token.js";
const userRouter = Express.Router();

userRouter.post("/register",userRegister)
userRouter.post("/login",userLogin)
// userRouter.put("/:id",verifyToken,verifyTokenAndAuth)
userRouter.delete("/:id",verifyTokenAndAuth,userDelete)
userRouter.get("/:id",verifyTokenAndAdmin,userDetails)





export default userRouter;