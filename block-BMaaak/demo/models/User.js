let mongoose=require("mongoose");
let  Schema=mongoose.Schema;

let uesrSchema= new Schema({
name:{type:String},
username:{type:String},
email:{type:String,required:true,unique:true},
address:{
    city:{type:String},
    state:{type:String},
    country:{type:String},
    pin:{type:Number}
}

})

module.exports=mongoose.model("Article",uesrSchema)