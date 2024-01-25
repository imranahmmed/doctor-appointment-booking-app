import Booking from "../models/BookingSchema.js"
import Doctor from "../models/DoctorSchema.js"

export const updateDoctorController = async (req, res) => {
    const id = req.params.id
    const email = req.body.email

    try {
        const searchDoctor = await Doctor.find({ _id: id })
        const searchDuplicateEmail = await Doctor.find({ email: email })
        if (searchDoctor.length > 0) {
            if (searchDuplicateEmail.length > 0) {
                return res.status(400).json({ message: "This email already exists" })
            } else {
                const updateDoctor = await Doctor.findByIdAndUpdate({ _id: id }, { $set: req.body }, { new: true })
                return res.status(200).json({ success: "Ok", message: "Successfully updated the doctor", data: updateDoctor })
            }
        } else {
            return res.status(404).json({ message: "Doctor not found for update" })
        }
    } catch (error) {
        return res.status(400).json({ message: "Failed to update" })
    }
}

export const deleteDoctorController = async (req, res) => {
    const id = req.params.id
    try {
        const searchDoctor = await Doctor.find({ _id: id })
        if (searchDoctor.length > 0) {
            const deleteDoctor = await Doctor.findByIdAndDelete({ _id: id })
            return res.status(200).json({ success: "Ok", message: "Successfully deleted the Doctor" })
        } else {
            return res.status(404).json({ message: "Doctor not found for delete" })
        }
    } catch (error) {
        return res.status(400).json({ message: "Failed to delete" })
    }
}

export const getSingleDoctorController = async (req, res) => {
    const id = req.params.id
    try {
        const getSingleDoctor = await Doctor.find({ _id: id }).populate("reviews").select(["-password"])
        if (getSingleDoctor.length > 0) {
            return res.status(200).json({ success: "Ok", message: "Doctor found", data: getSingleDoctor })
        } else {
            return res.status(404).json({ message: "Doctor not found" })
        }
    } catch (error) {
        return res.status(404).json({ message: "Doctor not found" })
    }
}

export const getAllDoctorController = async (req, res) => {
    const { query } = req.query
    let doctors
    try {
        if (query) {
            doctors = await Doctor.find({
                isApproved: "approved",
                $or: [
                    { fullname: { $regex: query, $options: "i" } },
                    { specialization: { $regex: query, $options: "i" } },
                ]
            }).populate("reviews").select(["-password"])
        } else {
            const getAllDoctors = await Doctor.find({ isApproved: "approved" }).populate("reviews").select(["-password"])
            if (getAllDoctors.length > 0) {
                return res.status(200).json({ success: "Ok", message: "Doctors found", data: getAllDoctors })
            } else {
                return res.status(404).json({ message: "No approved doctor found" })
            }
        }
    } catch (error) {
        return res.status(404).json({ message: "No Doctor found" })
    }
}

export const getDoctorProfile = async (req, res) => {
    const doctorId = req.userId
    try {
        const doctorData = await Doctor.findById(doctorId)

        if (!doctorData) {
            return res.status(404).json({ success: false, message: "Doctor not found" })
        }

        const { password, ...rest } = doctorData._doc
        const appointments = await Booking.find({ doctor: doctorId })


        return res.status(200).json({ success: true, message: "Doctor found", data: { ...rest }, appointments })
    } catch (error) {
        return res.status(500).json({ success: false, message: "Something went wrong" })
    }
}