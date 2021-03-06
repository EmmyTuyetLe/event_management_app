const User = require('../models/user');
const bcrypt = require('bcryptjs');
const { createToken } = require('../services/jwtService')
exports.registerNewUser = (req,res) =>{
    // fetch user details from req.body
    // check if an user with this email exists
    User.findOne({email: req.body.email}, (err, existingUser) => {
        if(err){
            return res.status(500).json({err})
        }
            if(existingUser){
                return res.status(400).json({message: "an user with this email already exists"})
            }
// create a new user if email doesn't exist
User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
}, (err, newUser) => {
    if(err) {
        return res.status(500).json({ err })
    }
    // hash user's password
    bcrypt.genSalt(10, (err, salt) => {
       if(err){
        return res.status(500).json({ err })
       } 
       bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
        if(err){
            return res.status(500).json({ err })
        }
        // save password to db
        newUser.password = hashedPassword;
        newUser.save((err, savedUser) => {
          if(err){
              return res.status(500).json({ err })
          }  
         // create jwt for user
          let token = createToken(newUser);
          if(!token){
              return res.status(500).json({message: "Sorry, could not authenticate. Please login."})
          }
            //send token to user 
            return res.status(200).json({ 
                message:"user registration successful",
                token
            })
        })
        })
       })
    })
    })
}

exports.loginUser= (req, res) => {
    //check if user exists
    User.findOne({email: req.body.email}, (err, foundUser) => {
        if(err){
            return res.status(500).json({err})
        }
        if(!foundUser){
            return res.status(401).json({message: "incorrect email"})
        } 
        //check if password is correct
       let match = bcrypt.compareSync(req.body.password, foundUser.password);
       if (!match){
           return res.status(401).json({message: "incorrect password"})
       }
       //create a token
       let token = createToken(foundUser);
       if(!token){
           return res.status(500).json({message: "Sorry, could not authenticate. Please login."})
       }
    //send token to user
    return res.status(200).json({
     message: "user logged in",
     token
           })
        })
}