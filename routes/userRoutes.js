const express = require("express")
const router = express.Router();
const authenticate = require('../middlewares/authenticate')
const authorize = require('../middlewares/authorize')

//Note: ONLY ADMIN CAN ACCESS

router.get('/admin', authenticate, authorize("admin"), (req, res) => {
    res.send('Welcome Admin')
})

//Note: BOTH ADMIN AND MODERATOR CAN ACCESS

router.get('/moderator', authenticate, authorize("admin", "moderator"), (req, res) => {
    res.send('Welcome Moderator')
})

//Note: BOTH ADMIN AND USER CAN ACCESS 

router.get('/user', authenticate, authorize("admin", "user"), (req, res) => {
    res.send('Welcome User')
})

module.exports = router
