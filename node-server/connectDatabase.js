import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const uri = 'mongodb+srv://jenavista:QRIFjTfHaqnC9j6b@cluster0.yrxv3.mongodb.net/';
        await mongoose.connect(uri)

        console.log('MongoDB connected!')
    }
    catch (error) {
        console.error("MongoDB connection error")
        process.exit(1)
    }
}

export default connectDB;