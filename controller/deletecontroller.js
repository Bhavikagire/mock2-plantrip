const post = require("../models/model")

exports.deletedata = async (req,res)=>{
    try {
        const {id} = req.params;
        await post.findByIdAndDelete(id);
        res.json({"msg":"post has been deleted"})
    } catch (error) {
        console.log(error)
    }
};