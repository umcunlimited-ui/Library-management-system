import mongoose from "mongoose"

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
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

    borrowedbooks: [{type: mongoose.Schema.Types.ObjectId, ref: "Book"}],

    borrowHistory: [{type: mongoose.Schema.Types.ObjectId, ref: "Book"}],


},
{timestamps: true});

const Student = mongoose.model("Student", StudentSchema);

export default Student;