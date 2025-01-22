import express from "express"
import cors from "cors"
import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/user.route.js"
import chatRouter from "./routes/chat.route.js"
import messageRouter from "./routes/message.route.js"


const app = express()

app.use(cors())
app.use(express.json())//convert json to js object 
app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/chat", chatRouter)
app.use("/api/message", messageRouter)


export default app

//app.js => app , middlewares , routes 