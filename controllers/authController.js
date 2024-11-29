const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")

const register = async (req, res) => {
    try {
        const { username, password, role } = req.body;
        //INFO: HASHING THE RAW PASSWORD WITH THE SALT NUMBER WHICH IS 10 IN HERE
        const hashedPassword = await bcrypt.hash(password, 10);
        //INFO:CREATED NEW USER WITH USERNAME PASSWORD AND ROLE WHERE PASSWORD IS ENCRYPTED
        const newUser = new User({ username, password: hashedPassword, role })
        //INFO:SAVE THE NEW USER TO THE DATABASE
        await newUser.save();
        //INFO:IF THE USER IS SUCCESSFULLY REGISTER THEN THIS MESSAGE WILL BE SHOWN
        res.status(201).json({ message: `User created successfully with username ${username}` });
    }
    catch (err) {
        //INFO:THROW A ERROR 
        res.status(500).json({ message: "Error creating user" });
    }
}
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username })
        //INFO:IF THE USER IS NOT FOUND IN THE DB IT WILL THROW AN ERROR
        if (!user) {
            return res.status(404).json({ message: `User not found with username ${username}` })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        //INFO:IF THE PASSWORD IS NOT MATCHED THEN IT WILL THROW AN ERROR
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" })
        //INFO:IF THE PASSWORD IS MATCHED THEN IT WILL RETURN THE JWT TOKEN WITH USERNAME AND ROLE
        res.status(200).json({ message: `Welcome back ${username}`, token, role: user.role });
    } catch (err) {
        //INFO:THROW A ERROR
        res.status(500).json({ message: "Error logging in user" });

    }
}
module.exports = {
    register,
    login
}