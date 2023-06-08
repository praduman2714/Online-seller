const mongoose = require('mongoose');


// UserSchema consist of the name, email, passowrd. 
// User has a relationship of one to many, with the habit. i.e one user can have multiple habits.

const buisnessShema = new mongoose.Schema({
    name :{
        type : 'String',
        required : true
    },
    email : {
        type : 'String',
        require : true,
        unique : true
    },
    password : {
        type : 'String',
        require : true
    }
}, {
    timestamps: true
})

const Buisness = mongoose.model("User" , buisnessShema);
module.exports = Buisness;