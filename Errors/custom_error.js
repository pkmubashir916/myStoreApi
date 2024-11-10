
class customErrAPI extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode= statusCode;
    }
}

const customErr = (message,statusCode)=>{
    return new customErrAPI(message,statusCode);
}

module.exports ={customErr,customErrAPI};