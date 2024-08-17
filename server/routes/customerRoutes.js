const express=require("express");
const route=express.Router();

const customerController=require("../controllers/customerController");


route.post("/customersave",customerController.customerSave);

route.post("/customercheck",customerController.customerCheck);

module.exports=route;