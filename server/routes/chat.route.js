import { Router } from "express";
import { createNewChat,getAllChats} from "../controller/chat.controller.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router()

router.post("/create-new-chat", authMiddleware, createNewChat)
router.get("/get-all-chats", authMiddleware, getAllChats)






export default router