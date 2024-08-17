const express=require("express");
const app=express();
const dotenv=require("dotenv");
dotenv.config();
var cors=require("cors");
const mongoose=require("mongoose");
const port=process.env.PORT || 8080
const bodyparser=require("body-parser");

app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/expansemanage").then(()=>{
    console.log("Database connected !!");
})

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json())

const customerRoute=require("./routes/customerRoutes");
const transactionRoute=require("./routes/transactionRoute");

app.use("/customer",customerRoute);
app.use("/transactions",transactionRoute);




app.listen(port,()=>{
    console.log(`server run on port ${port}`);
})

