const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    header:{type:String, required: true},
    image:[{type:String, required:true}],
    cutPrice:{type:Number, required:true},
    price: { type: Number, required: true },
  Save:{type: Number,required:true},
  category: { type: String, required: true },
  tags: [{ type: String, required: true }],
  types: [{ type: String, required: true }],

});

productSchema.index({
    Header: "text",
    category: "text",
    cutPrice:"text",
    tags:"text",
    types:"text"
});
const ProductModel= mongoose.model("product",productSchema);

module.exports= ProductModel;
