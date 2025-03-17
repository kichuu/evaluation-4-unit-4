import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import router from "./routes/launchesroutes.js"
dotenv.config()

const app = express()
app.use(express.json())



const PORT = 5000
connectDb()

app.use("/launches" , router)

app.listen(PORT ,()=>{
    console.log(`server is running on http://localhost:${PORT}/`)
})

