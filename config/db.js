const mongoose = require('mongoose')

const dbConnect = async () => {
    try {

        const connect = await mongoose.connect(process.env.MONGODB_URL) //INFO: USING MONGO_URI CONNECTED TO THE MONGODB ATLAS
        console.log(`MongoDB connected: ${connect.connection.host}, ${connect.connection.name}`) //INFO: TO CHECK THE HOST AND THE NAME OF THE DATABASE COLLECTION
    }
    catch (err) {
        console.log(err);
        process.exit(1); //INFO: TO EXIT THE PROCESS IF ERROR OR NOT CONNECTED TO THE DB

    }
}

module.exports = dbConnect;