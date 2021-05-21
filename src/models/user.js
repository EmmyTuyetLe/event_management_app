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
    },
    role: {
        type: String,
        anum: ['regular', 'admin'],
        default:'regular' 
    }
});
module.exports = mongoose.model('User', userSchema)