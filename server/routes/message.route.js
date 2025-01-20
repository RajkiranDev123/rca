import { Router } from "express";
import { newMessage, getAllMessages } from "../controller/message.controller.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router()

router.post("/new-message", authMiddleware, newMessage)
router.get("/get-all-messages/:chatId", authMiddleware, getAllMessages)

export default router