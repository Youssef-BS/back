const mongoose=require("mongoose")
const validator = require('validator');
const Roles= require('./role')
const userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
      
 
    },
    photo: String,
    password: {
        type: String,
        
    },

    role: {
        type: String,
        enum: Object.values(Roles),
        default: Roles.user, 
    },
    username:{
        type:String,
    
    }

})
const User = mongoose.model('User', userSchema);

module.exports = User
