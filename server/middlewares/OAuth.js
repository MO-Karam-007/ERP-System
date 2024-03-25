const jwt = require('jsonwebtoken')
exports.generateTokens = (req, res, next) =>
{
    const token = jwt.sign({ 'token': req.params.id }, process.env.TOKENONE, { expiresIn: process.env.EXPIRES })
    req.user = token
    console.log(`Token ,`, token);
    next()
}



exports.verfiyToken = (req, res, next) =>
{
    if (!req.headers.authantication)
    {
        return res.json({
            mes: "Unauthorized: Missing Authorization header"
        })
    }

    if (req.headers.authantication.split(' ')[0] != 'Mango')
    {
        return res.json({
            mes: "Forbidden: Invalid or expired token"
        })
    }

    const tokenValue = jwt.verify(req.headers.authantication.split(' ')[1], process.env.TOKENONE)
    req.user = tokenValue
    console.log(`Token Value`, req.user);

    next()
}