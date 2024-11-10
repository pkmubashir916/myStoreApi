const { customErrAPI } = require("../Errors/custom_error");

const errorHandlerMiddleWare = (err,req,res,next) =>{
    if(err instanceof customErrAPI){
        return  res.status(err.statusCode).send(err.message);
    }
    return res.status(500).send("something went wrong. please try again ")

} 

module.exports = errorHandlerMiddleWare;