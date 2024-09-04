const express = require("express");
const productCreate = require("../controllers/ProductReq/product_create.controller");
const productSingle=require("../controllers/ProductReq/product_getSingleProduct.controller");

const productRouter= express.Router();

productRouter.get("/:id",productSingle)
productRouter.post("/",productCreate);

module.exports=productRouter;