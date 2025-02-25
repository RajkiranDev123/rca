import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    members: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }]
    },
    lastMessage: {
        type: mongoose.Schema.Types.ObjectId, ref: "message"
    },
    unreadMessageCount: {
        type: Number,
        default: 0
    },

}, { timestamps: true })
export const ChatModel = mongoose.model("chat", chatSchema)

