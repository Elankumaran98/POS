const mongoose = require('mongoose');
require('colors')

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected ${con.connection.host}`.bgYellow.red)
    } catch (error) {
        console.log(`Error :${error.message}`.bgGreen.white)
        process.exit(1)
    }
}


module.exports=connectDB