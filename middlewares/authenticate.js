const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    //INFO:IF THE TOKEN IS NOT VALID IT WILL THROW ERROR
    if (!token) return res.status(401).send('Access Denied');
    try {
        //INFO:TO DECODE THE TOKEN USING THE SECRET KEY
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        //INFO: FORWARD AFTER DECOING THE TOKEN
        next();
    } catch {
        //INFO:IF THE TOKEN IS NOT VALID IT WILL THROW ERROR
        res.status(400).send('Invalid Token');
    }
};

module.exports = authenticate;
