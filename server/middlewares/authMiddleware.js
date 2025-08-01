const jwt = require("jsonwebtoken")

const tokenDecode = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1]
    const {_id} = jwt.verify(token, process.env.JWT_SECRET)
    req._id = _id
    console.log(token)
    next()
}

module.exports = tokenDecode