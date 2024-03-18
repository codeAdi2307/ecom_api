import Express  from "express";
import {getAllUser,signup,login} from "../controllers/user-controller.js";

const router = Express.Router();

router.get("/",getAllUser)
router.post("/signup",signup)
router.post("/login",login)

export default router;