const express= require("express");
const userRegistration = require("../controllers/UserRequest/userRegistration.controller");
const userLogin= require("../controllers/UserRequest/userLogin.controller");
const userRouter=express.Router();

userRouter.post("/register",userRegistration);
userRouter.post("/login",userLogin);

module.exports = userRouter ;