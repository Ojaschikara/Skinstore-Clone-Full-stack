const express = require("express");
const productCreate = require("../controllers/ProductReq/product_create.controller");
const productSingle=require("../controllers/ProductReq/product_getSingleProduct.controller");
const productGet = require("../controllers/ProductReq/product-get.controller");
const productCategories = require("../controllers/ProductReq/product-getCategories.controller");

const productRouter= express.Router();


productRouter.get("/", productGet);
productRouter.get("/categories", productCategories);
productRouter.get("/:id",productSingle)
productRouter.post("/",productCreate);

module.exports=productRouter;
