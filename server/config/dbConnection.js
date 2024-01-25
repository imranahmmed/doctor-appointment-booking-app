import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        await mongoose.connect("mongodb+srv://imranAhammed:doctorAppoinmentApp@cluster0.n04tyoc.mongodb.net/doctor-appointment-booking-app?retryWrites=true&w=majority")
        console.log("Database Connected")
    } catch (error) {
        console.log("Database Connection Failed")
    }
}