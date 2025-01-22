import { UserModel } from "../models/user.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

/////////////////////////////////// signup ///////////////////////////
export const signUp = async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body
        if (!firstname || !lastname || !email || !password) {
            return res.status(400).json({ message: "All fields are required!", success: false })
        }
        const user = await UserModel.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ message: "User already exists!", success: false })
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        req.body.password = hashedPassword
        const newUser = new UserModel(req.body)
        await newUser.save()
        return res.status(201).json({
            message: "User Created Successfully!",
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            success: false
        })
    }
}

/////////////////////////////////// login ///////////////////////////
export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ message: "Both fields are required!", success: false })
        }
        const user = await UserModel.findOne({ email: req.body.email }).select("+password")

        if (!user) {
            return res.status(400).json({ message: "User does not exists!", success: false })
        }
        const isValid = await bcrypt.compare(req.body.password, user.password)
        if (!isValid) {
            return res.status(400).json({ message: "Invalid password!", success: false })
        }
        // {payload},sk,{expiry}
        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: "8d" })

        return res.status(200).json({
            message: "User logged-in Successfully!",
            success: true,
            token: token
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: error.message || error,
            success: false
        })
    }
}