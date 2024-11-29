const mongoose = require('mongoose')

const dbConnect = async () => {
    try {

        const connect = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`MongoDB connected: ${connect.connection.host}, ${connect.connection.name}`) //note: to check the host and name of the database collection
    }
    catch (err) {
        console.log(err);
        process.exit(1);

    }
}

module.exports = dbConnect;