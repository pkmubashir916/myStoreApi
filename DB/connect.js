const mongoose =require("mongoose");

const connectDB=(url)=>{
 mongoose.connect(url)
.then(()=>console.log("database is connected"))
.catch((err)=>console.log(err))
} 
module.exports=connectDB;