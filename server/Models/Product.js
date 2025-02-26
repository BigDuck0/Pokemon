const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    id: Number,
    id: {
        type: Number
    },
    num:{
        type: String
    },
    name:{
        type: String
    },
    img:{
        type: String
    },
    type:{
        type: Array
    },
    height:{
        type: String
    },
    weight:{
        type: String
    },
    candy:{
        type: String
    },
    egg:{
        type: String
    },
    multipliers:{
        type: Array
    },
    weaknesses:{
        type: Array
    },
    candy_cound:{
        type: Number
    },
    spawn_chance:{
        type: Number
    },
    avg_spawns:{
        type: Number
    },
    spawn_time:{
        type: String
    },
    prev_evolution:{
        type: Array,
        default: []
    },
    next_evolution:{
        type: Array,
        default: []
    }

    
 },{ timestamps: true})

 module.exports = mongoose.model("products",productSchema) 