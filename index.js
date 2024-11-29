require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes')
const dbConnect = require("./config/db");

const app = express();
//INFO: middleware
app.use(express.json());
//INFO: routes 
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

//INFO: Connect to MongoDB
dbConnect();

//note:LOCAL SERVER server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});