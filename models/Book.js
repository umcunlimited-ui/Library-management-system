import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
    title:{type: String, required: true},

    isbn:{type: String, unique: true},

    authors: [{type: mongoose.Schema.Types.ObjectId, ref:"Author",}],

    status: {type: String,
        enum: ["IN", "OUT"],
        default: "IN"
    },

    borrowedby: {type: mongoose.Schema.Types.ObjectId, ref:"Student", default: null},

    issuedby: {type: mongoose.Schema.Types.ObjectId, ref:"Attendant", default: null},

    returndate: {type: Date, default: null}
      
},
{timestamps: true});

const Book = mongoose.model("Book", bookSchema);

export default Book