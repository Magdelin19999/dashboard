const mongoose = require("mongoose");
require('dotenv').config();

const hostDB = process.env.MONGODB_URL;

const connectDB = async () =>{
    try {
        await mongoose.connect(hostDB)
        console.warn("MongoDB Connected");
    } catch (error) {
        console.error(error);
    }
}

module.exports = {connectDB};
