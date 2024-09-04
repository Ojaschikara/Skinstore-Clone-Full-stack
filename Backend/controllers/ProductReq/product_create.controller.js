const ProductModel=require("../../models/product.model")

const productCreate= async(req,res) => {
    const data= req.body ;
    try {
        const newProduct= new ProductModel(data);
        await newProduct.save();

        res.status(201).send({message: "Product added successfully",Product: newProduct})
    } catch (error) {
        res.status(500).send({message: `error in product create ${error.message}`});

    }
}

module.exports= productCreate;