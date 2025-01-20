import { MessageModel } from "../models/message.model.js"
import { ChatModel } from "../models/chat.model.js"

export const newMessage = async (req, res) => {
    try {
        const newMessage = new MessageModel(req.body)
        const savedMessage = await newMessage.save()

        const currentChat = await ChatModel.findOneAndUpdate(
            { _id: req.body.chatId },
            {
                lastMessage: savedMessage._id,
                $inc: { unreadMessageCount: 1 }
            }
        )
        return res.status(201).json({ message: "Message sent Successfully!", success: true, data: savedMessage })

    } catch (error) {
        return res.status(500).json({ message: error.message || error, success: false })
    }
}

export const getAllMessages = async (req, res) => {
    try {
        const allMessages = await MessageModel.find({ chatId: req.params.chatId }).sort({ createdAt: 1 }).populate("chatId")

        return res.status(200).json({ message: "All Messages fetched Successfully!", success: true, data: allMessages })
    } catch (error) {
        return res.status(500).json({ message: error.message || error, success: false })

    }
}