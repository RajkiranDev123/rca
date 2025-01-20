import { UserModel } from "../models/user.model.js"

/////////////////////////////////// getLoggedUser ///////////////////////////
export const getLoggedUser = async (req, res) => {
    try {
        const user = await UserModel.findOne({ _id: req.body.userId })
        return res.status(200).json({
            message: "User fetched Successfully!",
            success: true,
            data:user
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            success: false
        })
    }
}


/////////////////////////////////// getAllUsers except the current one ///////////////////////////
export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await UserModel.find({ _id:{$ne: req.body.userId} })
        return res.status(200).json({
            message: "All Users fetched Successfully!",
            success: true,
            data:allUsers
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            success: false
        })
    }
}