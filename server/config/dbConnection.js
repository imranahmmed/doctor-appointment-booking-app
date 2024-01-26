import mongoose from "mongoose";

export const dbConnection = async () => {
    const mongodbUrl = process.env.MONGODB_URL;
    try {
        await mongoose.connect(mongodbUrl)
        console.log("Database Connected")
    } catch (error) {
        console.log("Database Connection Failed")
    }
}