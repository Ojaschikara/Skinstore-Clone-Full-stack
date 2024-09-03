require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel= require("../../models/user.model");

const userLogin = async (req,res) => {
    const{ email, password }=req.body;
    try {
        const user= await UserModel.findOne({email});
        
        if(!user){
            return res.status(401).send({ message: "Wrong Email, Register first" });
        }

        bcrypt.compare(password,user.password,async(err,result) => {
            if(err){
                return res.status(500).send({message:`Error in comparing password ${err.message}`})
            }

            if(result){
                const token= await jwt.sign({
                    username: user.username,
                    email:user.email,
                    userID:user._id,
                },
                process.env.JWT_SECRET_KEY);
            return res.status(200).send({message : "Login Successful","Token": token, "user": user})
            }else{
                return res.status(401).send({ message: "Incorrect password" });
            }
        });

    } catch (error) {
        return res.status(500).send({ message: `Error: ${error.message}` });
    }
}

module.exports= userLogin;