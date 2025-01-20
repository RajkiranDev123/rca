import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false,
        minlength: 3
    },
    profilePic: {
        type: String,
        required: false
    }
}, { timestamps: true })
export const UserModel = mongoose.model("user", userSchema)

