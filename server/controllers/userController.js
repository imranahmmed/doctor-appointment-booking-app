import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js"
import Doctor from "../models/DoctorSchema.js"
export const updateUserController = async (req, res) => {
    const id = req.params.id
    const email = req.body.email
    try {
        const searchUser = await User.find({ _id: id })
        const searchDuplicateEmail = await User.find({ email: email })
        if (searchUser.length > 0) {
            // if (searchDuplicateEmail.length > 0) {
            //     return res.status(400).json({ message: "This email already exists" })
            // } else {
                const updateUser = await User.findByIdAndUpdate({ _id: id }, { $set: req.body }, { new: true }).select(["-password"])
                return res.status(200).json({ success: "Ok", message: "Successfully Updated the user", data: updateUser })
            // }
        } else {
            return res.status(404).json({ message: "User not found for update" })
        }
    } catch (error) {
        return res.status(400).json({ message: "Failed to update" })
    }
}

export const deleteUserController = async (req, res) => {
    const id = req.params.id
    console.log(id)

    try {
        const searchUser = await User.find({ _id: id })
        if (searchUser.length > 0) {
            const deleteUser = await User.findByIdAndDelete({ _id: id })
            return res.status(200).json({ success: "Ok", message: "Successfully deleted the user" })
        } else {
            return res.status(404).json({ message: "User not found for update" })
        }

    } catch (error) {
        return res.status(400).json({ message: "Failed to delete" })
    }
}

export const getSingleUserController = async (req, res) => {
    const id = req.params.id
    try {
        const getSingleUser = await User.find({ _id: id }).select(["-password"])
        if (getSingleUser.length > 0) {
            return res.status(200).json({ success: "Ok", message: "User found", data: getSingleUser })
        } else {
            return res.status(404).json({ message: "User not found" })
        }
    } catch (error) {
        return res.status(404).json({ message: "User not found" })
    }
}

export const getAllUserController = async (req, res) => {
    try {
        const getAllUsers = await User.find({}).select(["-password"])
        if (getAllUsers.length > 0) {
            return res.status(200).json({ success: "Ok", message: "Users found", data: getAllUsers })
        } else {
            return res.status(404).json({ message: "No user found" })
        }
    } catch (error) {
        return res.status(404).json({ message: "No user found" })
    }
}

export const getUserProfile = async (req, res) => {
    const userId = req.userId
    try {
        const userData = await User.findById(userId)

        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" })
        }

        const { password, ...rest } = userData._doc
        return res.status(200).json({ success: true, message: "User found", data: { ...rest } })
    } catch (error) {
        return res.status(500).json({ success: false, message: "Something went wrong" })
    }
}

export const myAppointments = async (req, res) => {
    try {
        // retrieve Appointments from booking
        const appointments = await Booking.find({ user: req.userId })

        // extract doctor ids from appointments
        // const doctorIds = appointments.map((el) => el.doctor.id)
        // // retrive doctors using doctors id
        // const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select("-password")
        res.status(200).json({ success: true, message: "Appointments found", data: appointments })
    } catch (error) {
        return res.status(500).json({ success: false, message: "Something went wrong" })
    }
}