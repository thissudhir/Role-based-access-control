const authorize = (...roles) => (req, res, next) => {
    //INFO: CHECK THE ROLE
    if (!roles.includes(req.user.role)) {
        //INFO:IF THE TOKEN IS NOT VALID FOR PARTICULAR ROLE IT WILL THROW ERROR
        return res.status(403).send('Forbidden');
    }
    next();
};

module.exports = authorize;
