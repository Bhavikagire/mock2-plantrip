const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },

    email:{
        type:String,
        require:true,
    },
    destination:{
        type:String,
        enum:["India", "Africa", "Europe", "America"],
        require:true,
    },
    travelers:{
        type:Number,
        require:true,
    },
    budget:{
        type:Number,
        require:true,
    },
})

const post = mongoose.model("post", postSchema)
module.exports = post;