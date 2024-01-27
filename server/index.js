import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import allroutes from "./routes/api/index.js";
import { dbConnection } from "./config/dbConnection.js";
const app = express()
const corsOptions = {
    origin: true
};
// Access environment variables
const baseUrl = process.env.BASE_URL;
const port = process.env.PORT || 8000
app.get("/", (req, res) => {
    res.send("Api is working")
});

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(baseUrl, allroutes)
app.use(baseUrl, (req, res) => res.status(404).json({ message: "No API Found on This Route." }))
// app.use('/auth', authRoutes);
// app.use(router)

app.listen(port, () => {
    // Db Connection
    dbConnection()
    console.log("Server is running on port " + port)

})

