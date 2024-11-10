const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:[true,"enter the product name"],
        maxlength:[20,"Don't cross morthan 20 characters "],
    },
    brand:{
        type:String,
        trim:true,
        required:[true,"must mention brand name "],
        maxlength:[50,"don't use morthan 50 characters"],
    },
});

module.exports = mongoose.model("Item",productSchema);