require('dotenv').config();
const express = require('express');
const studentRouter = require("./router/student.router");


const app = express();

app.use(express.json());
app.use("/api/students",studentRouter)




module.exports = app;