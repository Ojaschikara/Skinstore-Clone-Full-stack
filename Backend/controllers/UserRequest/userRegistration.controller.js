const bcrypt = require("bcrypt");
const UserModel=require("../../models/user.model");

const userRegistration=async(req,res)=>{
    const{username, email, password}=req.body;

    try {
        const existingUser= await UserModel.findOne({email});

        if(existingUser){
            return res.status(401).send({message: "User already exist"});
        }
        bcrypt.hash(password,3,async(err,hash) => {
        if(err){
            return res.status(500).send("Error in passwword hashing");
        } 
        const newUser= new UserModel({
            username,
            email,
            password: hash

        });
        await newUser.save();

        res.status(201).send({
            message: `Congratulations ${username} you are successfully registered`,
            "User":newUser
        })
        })
    } catch (error) {
        res.status(500).send({message:`error while registering user${error}`})
    }
};

module.exports= userRegistration;