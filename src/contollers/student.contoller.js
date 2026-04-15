const studentModel = require("../models/student.model");

const createStudent = async (req,res) =>{
    const {name,email,age,mobileNumber} = req.body;
    if(!name || !email || !age || !mobileNumber){
        return res.status(400).json({message:"All fields are required"});
    }
    try{
        const  newStudent = await studentModel.create({
            name,email,age,mobileNumber,
        })
        newStudent.save();
        return res.status(201).json({message:"Student created successfully", student: newStudent});

    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:"Server error"});
    }
}

const getAllStudents = async(req,res) =>{
    try{
            const allStudent = await studentModel.find();
            return res.status(200).json({
                message:"All students retrieved successfully",
                status:"success",
                statusCode:200,
                students: allStudent,
            })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:"Server error"});
    }
}

const getStudentById = async(req,res) =>{
    const {id} = req.params;
    try{
            const getStudent = await studentModel.findById(id);
            if(!getStudent){
                return res.status(404).json({message:"Student not found"});
            }
            else{
                return res.status(200).json({
                    message:"Student retrieved successfully",
                    status:"success",
                    statusCode:200,
                    student: getStudent,
                });

            }
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:"Server error"});
    }
}
const updateStudentById = async(req,res) =>{
    const {id} =  req.params;
    // const {name,email,age,mobileNumber} = req.body;
    try{
                const updateStudent = await studentModel.findByIdAndUpdate(id,req.body,{new:true});
                if(!updateStudent){
                    return res.status(404).json({
                        message:"Student not found",
                        status:"error",
                        statusCode:404,
                    })
                }
                else{
                     return res.status(200).json({
                        message:"Student updated successfully",
                        status:"success",
                        statusCode:200,
                        student: updateStudent,
                     })
                }
              
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:"Server error"});
    }

}
const deleteStudentById = async (req,res) =>{
    const {id} = req.params;
    try{
            const deleteStudent = await studentModel.findByIdAndDelete(id);
            if(!deleteStudent){
                return res.status(404).json({
                    message:"Student not found",
                    status:"error",
                    statusCode:404,
                })
            }   
            else{
                return res.status(200).json({
                    message:"Student deleted successfully",
                    status:"success",
                    statusCode:200,
                })
            }
               
            
    }
    catch(err){
        console.log
        return res.status(500).json({message:"Server error"});
    }
}
module.exports = { createStudent , getAllStudents , getStudentById ,updateStudentById,deleteStudentById};


