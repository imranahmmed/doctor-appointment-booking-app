import mongoose from "mongoose";

const ClinicSchema = new mongoose.Schema({
    clinicName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    photo: {
        type: String
    },
    role: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    zipCode: {
        type: String,
    },
    phone: {
        type: String,
    },
    otp: {
        type: String
    },
    specialties: {
        type: [String]
    },
    hoursOfOperation: {
        type: String
    },
    acceptedInsurances: {
        type: [String]
    },
    // location: {
    //     type: {
    //         type: String,
    //         enum: ['Point'],
    //         default: 'Point'
    //     },
    //     coordinates: {
    //         type: [Number],
    //     }
    // }
});

// ClinicSchema.index({ location: '2dsphere' }); // Index for geospatial queries


export default mongoose.model('Clinic', ClinicSchema)
