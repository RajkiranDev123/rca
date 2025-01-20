import { ChatModel } from "../models/chat.model.js"

/////////////////////////////////////// establish connection betn two members ///////////////////////
export const createNewChat = async (req, res) => {
    try {
        const chat = new ChatModel(req.body)
        const savedChat = await chat.save()
        res.status(201).json({ message: "Chat Created Successfully!", success: true, data: savedChat })
    } catch (error) {
        res.status(500).json({ message: error.message || error, success: false })
    }
}

///////////////////////////////////////////////

export const getAllChats = async (req, res) => {
    try {
        //The populate() method in Mongoose is used to automatically replace a field in a document with the actual data from a related document.
        const allChats = await ChatModel.find({ members: { $in: req.body.userId } })
      
        return res.status(200).json({ message: "All Chats fetched Successfully!", success: true, data: allChats })
    } catch (error) {
        return res.status(500).json({ message: error.message || error, success: false })
    }
}