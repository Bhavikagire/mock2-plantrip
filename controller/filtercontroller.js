const post = require("../models/model");

exports.filterdata = async(req,res)=>{
    try {
        const {destination} = req.query;
        const filterddata = await post.find({destination})
        res.json(filterddata)
    } catch (error) {
        console.log(error)
    }
};