const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    id: Number,
    num:{
        type: Number
    },
    email:{
        type: String
    },
    password:{
        type: String
    },


    
 },{ timestamps: true})

 module.exports = mongoose.model("user",userSchema) 