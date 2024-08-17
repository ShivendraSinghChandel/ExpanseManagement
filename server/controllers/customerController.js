const custModel=require("../models/customerModel");
const customerSave=async(req,res)=>{
   const {name,city,email,password}=req.body;

   try {
       const Customer=await custModel.create({
        name:name,
        city:city,
        email:email,
        password:password
       })

       res.status(200).send(Customer);
    
   } catch (error) {
       res.status(400).send(error);
   }
}

const customerCheck=async(req,res)=>{
    try {
        const {email,password}=req.body;
   const data=await custModel.findOne({email:email});
   if(!data)
   {
    res.status(400).send("Email not found");
   }
   else{
    if(data.password==password)
    {
       res.status(200).send(data);
    }
    else{
        res.status(400).send("Password does not match");
    }
   }
        
    } catch (error) {
        res.status(404).send("server not working");
    }
}


module.exports={
    customerSave,
    customerCheck
}