import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import allroutes from "./routes/api/index.js";
// import authRouter from "./routes/api/auth.js"

dotenv.config()
const app = express()
const port = process.env.PORT || 8000
const corsOptions = {
    origin: true
};
const baseUrl = process.env.BASE_URL;

app.get("/", (req, res) => {
    res.send("Api is working")
});

// Db Connection
mongoose.set("strictQuery", false)
const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database Connected")
    } catch (error) {
        console.log("Database Connection Failed")
    }
}


// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(baseUrl, allroutes)
app.use(baseUrl, (req, res) => res.status(404).json({ message: "No API Found on This Route." }))
// app.use(router)

app.listen(port, () => {
    dbConnection()
    console.log("Server is running on port " + port)

})

