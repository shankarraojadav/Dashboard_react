import mongoose from "mongoose";

const Connection =async () => {
    const url = process.env.Mongo_Url;
    console.log("db connected successfully");
    try {
        await mongoose.connect(url)
    } catch (error) {
        console.log("error while connecting to db", error)
    }
}

export default Connection;