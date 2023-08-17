const post = require("../models/model")

exports.retrievedata = async(req,res)=>{
    try {
        const posts = await post.find()
        res.json(posts)
    } catch (error) {
        console.log("err", error)
    }
}