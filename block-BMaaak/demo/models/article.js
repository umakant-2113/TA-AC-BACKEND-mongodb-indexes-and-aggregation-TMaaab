let mongoose=require("mongoose");
let Schema=mongoose.Schema;

let articleSchema=new Schema({
title:{type:String,required:true},
description:{type:String,required:true},
tags: [{type:String}]
})

module.exports=mongoose.model("Article",articleSchema)