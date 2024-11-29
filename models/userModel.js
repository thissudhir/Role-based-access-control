const mongoose = require('mongoose');

//INFO: User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: ["admin", "user", "moderator"],
        default: "user",
    },
}, {
    timestamps: true
});



//INFO: Exporting the connection and model
module.exports = mongoose.model("User", userSchema);