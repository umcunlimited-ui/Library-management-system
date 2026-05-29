import mongoose from "mongoose"

const authorSchema = new mongoose.Schema({
    name:{type: String, required: true},
    bio: String,
    dob: Date,
    books: [{type: mongoose.Schema.Types.ObjectId, ref: "Book"}]
},
{timestamps: true});

const Author = mongoose.model("Author",authorSchema)

export default Author;