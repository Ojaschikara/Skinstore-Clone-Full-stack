const mongoose= require("mongoose");

const cartSchema = mongoose.Schema({
    userID: {type:mongoose.Schema.Types.ObjectId,ref : "user", requied:true},
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
        required: true,
    }
    // quantity:{type:Number, required: true},
});

const cartModel= mongoose.model ("cart",cartSchema);

module.exports= cartModel;