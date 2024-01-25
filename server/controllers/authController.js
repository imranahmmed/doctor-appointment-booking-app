import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js";
import emailValidation from "../utils/emailValidation.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import pck from "number-generator";
import nodemailer from "nodemailer";
import { otpTemplate } from "../utils/emailTemplate.js";

const generateToken = (user) => {
    const { _id, role } = user

    return jwt.sign({ id: _id, role: role }, "Cm56T28ucjuW", {
        expiresIn: "15d"
    })
}

export const registrationController = async (req, res) => {
    const { fullName, email, password, role, gender, photo } = req.body
    let duplicateEmail = null
    try {
        if (!fullName) {
            return res.status(400).json({ message: "Enter fullname" })
        } else if (!email) {
            return res.status(400).json({ message: "Enter email" })
        } else if (!emailValidation(email)) {
            return res.status(400).json({ message: "Enter valid email" })
        } else if (!password) {
            return res.status(400).json({ message: "Enter password" })
        } else if (!role) {
            return res.status(400).json({ message: "Please select your role" })
        } else if (!gender) {
            return res.status(400).json({ message: "Please select your gender" })
        } else {
            // Check if User and doctor exists or not
            if (role === "patient") {
                duplicateEmail = await User.find({ email: email })
            } else if (role === "doctor") {
                duplicateEmail = await Doctor.find({ email: email })
            }

            if (duplicateEmail.length > 0) {
                return res.status(403).json({ message: "User already exists. Please, Try another email" })
            }

            bcrypt.hash(password, 10, async (err, hash) => {

                const generator2 = pck.aleaRNGFactory(Date.now());
                const otp = generator2.uInt32().toString().substring(0, 4);
                const otpExpireTime = 30000;

                if (role === "patient") {
                    const user = new User({
                        fullName, email, password: hash, role, gender, photo, otp: otp
                    })
                    await user.save()
                }

                if (role === "doctor") {
                    const doctor = new Doctor({
                        fullName, email, password: hash, role, gender, photo, otp: otp
                    })
                    await doctor.save()
                }

                // Email send
                const transporter = nodemailer.createTransport({
                    service: "gmail",
                    auth: {
                        user: "imran.mern2201@gmail.com",
                        pass: "xavt bubc tyzk buyh",
                    },
                });

                const info = await transporter.sendMail({
                    from: "imran.mern2201@gmail.com", // sender address
                    to: email, // list of receivers
                    subject: "Please Verify Your Email", // Subject line
                    html: otpTemplate(otp, otpExpireTime), // html body
                });

                return res.status(200).json({ message: `Registration successfull as a ${role}, Check your email for OTP` })
            })

        }
    } catch (error) {
        return res.status(500).json({ message: "Server Error" })
    }
}

export const loginController = async (req, res) => {
    const { email } = req.body;
    try {
        let user = null;
        const doctor = await Doctor.find({ email });
        const patient = await User.find({ email });

        if (doctor.length > 0) {
            user = doctor[0]; // Assuming email is unique, use the first user
        }
        if (patient.length > 0) {
            user = patient[0]; // Assuming email is unique, use the first user
        }

        
        // // check if user exists or not
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        // if user exists, compare the provided password with the stored password
        const isPassMatched = await bcrypt.compare(req.body.password, user.password);
        
        if (!isPassMatched) {
            return res.status(400).json({ message: "Password mismatch" });
        }
        
        const token = generateToken(user);
        console.log(token)

        const { password, role, appointments, ...rest } = user._doc;
        return res.status(200).json({ message: "Successfully Login", token, data: { ...rest }, role });

    } catch (error) {
        return res.status(500).json({ message: "Failed to login" });
    }
};
