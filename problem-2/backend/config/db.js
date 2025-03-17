import mongoose from "mongoose";

const connectDb = async() => {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("mongodb connected")
}

export default connectDb