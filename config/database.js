import mongoose from "mongoose"

const connectdb = async() => {
    try {
        await mongoose.connect(process.env.mongodb)
        console.log("Mongodb is connected")
    } catch (error) {
        console.error(error);
        process.exit(1)
    }
}

export default connectdb