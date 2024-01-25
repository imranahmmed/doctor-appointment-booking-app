import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import allroutes from "./routes/api/index.js";

dotenv.config()
const app = express()
const port = process.env.PORT || 5000
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
        await mongoose.connect("mongodb+srv://imranAhammed:doctorAppoinmentApp@cluster0.n04tyoc.mongodb.net/?retryWrites=true&w=majority")
        console.log("Database Connected")
    } catch (error) {
        console.log("Database Connection Failed")
    }
}


// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/api/v1", allroutes)
app.use("/api/v1", (req, res) => res.status(404).json({ message: "No API Found on This Route." }))
// app.use('/auth', authRoutes);
// app.use(router)

app.listen(port, () => {
    dbConnection()
    console.log("Server is running on port " + port)

})

