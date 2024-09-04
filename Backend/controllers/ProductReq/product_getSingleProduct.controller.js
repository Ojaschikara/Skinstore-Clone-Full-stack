const ProductModel = require("../../models/product.model");

const productSingle= async(req,res) => {
    const {id} = req.params;
    try {
        const product = await ProductModel.findOne({_id: id});
        res.status(200).send({ Product: product})
    } catch (error) {
       res.status(200).send({message: error.message}) 
    }
}

module.exports= productSingle ;