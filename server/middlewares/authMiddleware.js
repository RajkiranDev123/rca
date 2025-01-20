import jwt from "jsonwebtoken"

export const authMiddleware = async (req, res, next) => {
    try {
        //split() : string into array & join() : array into string
        const token = req.headers.authorization.split(" ")[1]
        const decodedtoken = jwt.verify(token, process.env.SECRET_KEY)
        //add a property on request body
        req.body.userId = decodedtoken.userId
        next()
    } catch (error) {
        return res.status(401).json({ message: "Un-Authorized!", success: false })
    }
}