const express=require("express");
const connection=require("./config/db");
const dotenv=require("dotenv");
const userRouter=require("./routes/user.routes");
const productRouter=require("./routes/product.routes");


dotenv.config();
const app=express()
const PORT=process.env.PORT || 3001 ;
app.use(express.json());
app.use("/user",userRouter);
app.use("/product",productRouter)

app.get("/",(req,res)=>{
    res.status(201).send("hey buddy, site server is running fine")
});

app.listen(PORT,async()=>{
    try {
       await connection;
       console.log(`Server is running on PORT: ${PORT} and DB is also connected`) 
    } catch (error) {
        console.log(`Error occured during server connection${error}`)
        
    }
})