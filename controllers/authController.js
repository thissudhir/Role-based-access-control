const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")

const register = async (req, res) => {
    try {


        const { username, password, role } = req.body;
        //info: hashing the raw password with the salt number which is 10 in here 
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, password: hashedPassword, role }) //info: created new user with username password and role where the password is encrypted
        await newUser.save(); //info: saving the user into DB
        res.status(201).json({ message: `User created successfully with username ${username}` });
    }
    catch (err) {
        res.status(500).json({ message: "Error creating user" });
    }
}
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(404).json({ message: `User not found with username ${username}` })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" })
        res.status(200).json({ message: `Welcome back ${username}`, token, role: user.role });
    } catch (err) {
        res.status(500).json({ message: "Error logging in user" });

    }
}
module.exports = {
    register,
    login
}