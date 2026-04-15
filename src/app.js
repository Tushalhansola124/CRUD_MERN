require('dotenv').config();
const express = require('express');
const studentRouter = require("./router/student.router");


const app = express();

app.use(express.json());
app.use("/api/students",studentRouter)

app.get("/",(req,res)=>{
    res.send("API is working fine");
})




module.exports = app;