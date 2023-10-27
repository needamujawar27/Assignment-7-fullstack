const mongoose=require("mongoose");

const customersModel=mongoose.model("customers",{
    name:{type:String},
    age:{type:String},
    gender:{type:String}
});
module.exports=customersModel
