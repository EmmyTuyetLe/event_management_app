const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
const expiry = Number(process.env.TOKEN_EXPIRY);


exports.createToken = (user) =>{
    try {
        let token = jwt.sign({
            id: user._id,
            email: user.email,
            firstName:user.firstName,
            lastName: user.lastName
        }, secret, { expiresIn: expiry });
        return token
    } catch (err){
       console.log(err)
       return null
    }
}

exports.decodeToken = (token) =>{
    try {
        let decodedToken = jwt.verify(token, secret)
        return decodedToken
    } catch(err) {
        console.log(err)
        return null
    }
}