const mongoose=require("mongoose");

const teachersModel=mongoose.model("teachers",{
    name:{type:String},
    age:{type:Number},
    gender:{type:String},
    subject:{type:String}
});
module.exports=teachersModel