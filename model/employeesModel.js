const mongoose=require("mongoose");

const employeesModel=mongoose.model("employees",{
    id:{type:String},
    name:{type:String},
    age:{type:String},
    gender:{type:String},
    department:{type:String}
});
module.exports=employeesModel
