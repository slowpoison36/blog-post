const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    author:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    title:{type:String,required:true},
    description:String,
    comments:[{type:mongoose.Schema.Types.ObjectId,ref:"Comment"}],
    created:{type:Date,default:Date.now}
})

module.exports = mongoose.model("Post",postSchema);