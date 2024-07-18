const mongoose = require("mongoose")
const cartSchema = new mongoose.Schema({
    product:{
        type:mongoose.Types.ObjectId,
        ref:'products',
        required:true
    },
    quantity:{
        type:Number,
        default:'1'
    },
    email:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true
    }
})
 
const Cart = mongoose.model("Cart", cartSchema)

module.exports = Cart