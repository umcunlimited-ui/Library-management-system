import mongoose from "mongoose";

const AttendantSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    phone_number:{
        type: String,
        required: true,
        unique:true
    },
    
    password:{
        type: String,
        required: true,
    },

    role:{
        type: String,
        enum: ["LIBRARIAN", "ADMIN"],
        default: "LIBRARIAN"
        }

},
{timestamps:true})

const Attendant = mongoose.model("Attendant", AttendantSchema);

export default Attendant