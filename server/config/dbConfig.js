import dotenv from "dotenv"
dotenv.config({ path: "./config.env" })
import mongoose from "mongoose";

// connection logic
console.log("connection string ==> ", process.env.CONN_STRING)
mongoose.connect(process.env.CONN_STRING)

//connection state
const db = mongoose.connection

//check DB connection
// "connected" event is emmited when connection is done!
// listen for events using "on"
db.on("connected", () => {
    console.log("DB is Connected!")
})

db.on("err", () => {
    console.log("DB Connection failed!")
})

export default db


