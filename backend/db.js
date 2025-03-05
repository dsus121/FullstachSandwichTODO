import mongoose from "mongoose";

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI) // uniform resource identifier
        console.log('Connected to MongoDB')
    } catch(err) {
        console.log(err)
    }
}

export default connectDB
