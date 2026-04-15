// const mongoose =  require("mongoose");


// async function connectDB(){
//     try{
//           const conn  = await  mongoose.connect(process.env.MONGODB_URI);
//           if(conn){
//             console.log("Database connected successfully");
//           }
//           else{
//             console.log("Database connection failed");
//           }
//     }
//     catch(err){
//         console.log(err);

//     }
// }
// module.exports = connectDB;



const mongoose = require('mongoose');


async function connectDB() {
        mongoose.connect(process.env.MONGODB_URI)
        .then(()=>{
            console.log('Connected to MongoDB');
        }).catch(err=>{
            console.error('Error connecting to MongoDB:', err);
            process.exit(1);
        })

}
module.exports = connectDB;