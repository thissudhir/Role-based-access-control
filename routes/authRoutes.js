const express = require('express');
const { register, login } = require('../controllers/authController')

const router = express.Router();


//INFO:ROUTES FOR LOGIN AND REGISTRATION 
router.post("/register", register);
router.post("/login", login);
;

module.exports = router;
