const post = require("../models/model");

exports.creatpost = async(req,res) =>{
   
    try {
        const {name, email, destination, travelers, budget} = req.body;

        const newpost = new post({
            name,
            email,
            destination,
            travelers,
            budget,
        })

        await newpost.save();
        res.json({"msg":"new post created"})
    } catch (error) {
        console.log(error)
        res.status(500).json({err:"an err"})
    }
}