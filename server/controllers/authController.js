import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js";
import emailValidation from "../utils/emailValidation.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import pck from "number-generator";
import nodemailer from "nodemailer";
import { otpTemplate } from "../utils/emailTemplate.js";

export const registrationController = async (req, res) => {
    const { fullName, email, password, role, gender, photo } = req.body
    let duplicateEmail = null
    try {
        if (!fullName) {
            return res.status(400).json({ message: "Enter fullname" })
        } else if (!email) {
            return res.status(400).json({ message: "Enter email" })
        } else if (!emailValidation) {
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

export const loginController = async () => {
    try {
        console.log("Login")
    } catch (error) {

    }
}
