const mongoose = require('mongoose');
const  Schema  = mongoose;
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true 
    },
    lastName: {
        type: String,
        required: true  
    },
    email: {
        type: String,
        required: true, 
        unique: true
    },
    password: {
        type: String
    }
});
module.exports = mongoose.model('User', userSchema)