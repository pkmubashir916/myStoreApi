const  express = require("express");
const app = express();
const products = require("./Router/products");
const notFound = require("./midlleWare/notFound");
const errorHandlerMiddleWare = require("./midlleWare/error_handler");
connectDB=require("./DB/connect");
require('dotenv').config();

app.use(express.json());
app.use('/api/v1/products',products);
app.use(notFound);
app.use(errorHandlerMiddleWare);



const start=()=>{
    const port = (process.env.PORT);
    try {
       connectDB(process.env.MONGO_URL);
        app.listen(port,()=>{
        console.log(`server is listening at port ${port}`)});
    } catch (error) {
        console.log(error);
    }
 
}

start();


