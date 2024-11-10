const { customErr } = require("../Errors/custom_error");
const Item = require("../Model/Products");
const asyncWrapper = require("../midlleWare/async");

const createProduct =asyncWrapper(async(req,res)=>{
    const product = await Item.create(req.body);
   res.status(200).json({product,msg:"product details added"}); 
  });
const getAllProduct =asyncWrapper(async(req,res)=>{
    const product = await Item.find({});
    if(!product){
        res.send("the products are empty");
    }
    res.status(200).json({product}); 
});
const getProduct =asyncWrapper(async(req,res,next)=>{
    const {id:productID} = req.params;
    const product = await Item.findOne({_id:productID});
   if(!product){
        // const error = new Error("not Found");
        // error.status= 404;
        return next(customErr(`not found this ${productID}, please check your product id`,404));
   }
    res.status(200).json({product}); 
});
const updateProduct =asyncWrapper(async(req,res)=>{
    const {id:productID}=req.params;
    const product = await Item.findOneAndUpdate({_id:productID},req.body,{new:true,runValidators:true});
    res.status(200).json({product,msg:"upation successfully compleeted"}); 
});
const  deleteProduct =asyncWrapper( async(req,res)=>{
    const {id:productID}=req.params;
    const product = await Item.findOneAndDelete({_id:productID});
    res.status(200).json({msg:"deletion successfully compleeted"}); 

})

module.exports = {createProduct,getAllProduct,getProduct,updateProduct,deleteProduct};
