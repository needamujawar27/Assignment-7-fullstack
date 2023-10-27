const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const customersModel=require("./model/customersModel");
const employeesModel=require("./model/employeesModel");
const studentsModel=require("./model/studentsModel");
const teachersModel=require("./model/teachersModel");

const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/allpeoplesdb")
.then(()=>{
    console.log("MondoDB is connected!!!")
});

app.get("/customer",async(req,res)=>{
    const result=await customersModel.find({});
    res.json(result)
});

app.get("/employees",async(req,res)=>{
    const result=await employeesModel.find({});
    res.json(result)
});

app.get("/students",async(req,res)=>{
    const result=await studentsModel.find({});
    res.json(result)
});

app.get("/teachers",async(req,res)=>{
    const result=await teachersModel.find({});
    res.json(result)
});

app.listen(3060,()=>{
    console.log("API is Runinng Port 3060")
})
