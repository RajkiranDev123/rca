import { Router } from "express";
import { getLoggedUser,getAllUsers } from "../controller/user.controller.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router()

router.get("/get-logged-user", authMiddleware, getLoggedUser)
router.get("/getAllUsers", authMiddleware, getAllUsers)




export default router