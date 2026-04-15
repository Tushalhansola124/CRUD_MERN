const  mongoose =  require("mongoose");


const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
    
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true,
    },
   age:{
    type:Number,
    required:[true,"Age is required]"],
   },
   mobileNumber:{
    type:String,
    required:[true,"Mobile number is required"],
    unique:true,
   }
})

const Student = mongoose.model("Student",studentSchema);
module.exports = Student;
