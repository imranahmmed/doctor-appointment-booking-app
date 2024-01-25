import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import allroutes from "./routes/api/index.js";
import { dbConnection } from "./config/dbConnection.js";
dotenv.config()
const app = express()
const corsOptions = {
    origin: true
};
const baseUrl = process.env.BASE_URL;
const port = process.env.PORT || 5000

app.get("/", (req, res) => {
    res.send("Api is working")
});

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/api/v1", allroutes)
app.use("/api/v1", (req, res) => res.status(404).json({ message: "No API Found on This Route." }))
// app.use('/auth', authRoutes);
// app.use(router)

app.listen(port, () => {
    // Db Connection
    dbConnection()
    console.log("Server is running on port " + port)

})

