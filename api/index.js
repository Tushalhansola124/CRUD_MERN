const app = require("../src/app");
const connectDB = require("../src/db/db");

connectDB();
app.listen(process.env.PORT || 5000 ,()=>{
    console.log("The Server is  runing on port " + (process.env.PORT || 5000))
})