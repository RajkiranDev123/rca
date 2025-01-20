import dotenv from "dotenv"
dotenv.config({ path: "./config.env" })
import db from "./config/dbConfig.js";
import app from "./app.js";

const PORT = process.env.PORT_NUMBER || 3000

app.listen(PORT, () => {
    console.log("Listening to requests on PORT : " + PORT)
})

//server.js : db , import app , port and listen