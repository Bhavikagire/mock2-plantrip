const post = require("../models/model");

exports.sortdata = async (req,res) => {
try {
    const sortpost = await post.find().sort({budget:1});
    res.json(sortpost)
} catch (error) {
    console.log(err)
}
}