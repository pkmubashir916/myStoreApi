const express =require("express");
const router = express.Router();
const {createProduct,getAllProduct,getProduct,updateProduct,deleteProduct}=require("../Controller/products");

router.route('/').get(getAllProduct).post(createProduct);
router.route('/:id').get(getProduct).patch(updateProduct).delete(deleteProduct);

module.exports=router;