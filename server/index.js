import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const app = express()
const port = process.env.PORT || 8000
const corsOptions = {
    origin: true
};

app.get("/", (req, res) => {
    res.send("Api is working")
});

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

app.listen(port, () => {
    dbConnection()
    console.log("Server is running on port " + port)
})
