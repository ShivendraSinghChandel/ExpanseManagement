const express=require("express");
const route=express.Router();

const transactionController=require("../controllers/transactionController");

route.post("/amountsave",transactionController.amountSave);

route.post("/displayearning", transactionController.displayEarning);

route.post("/expansesave",transactionController.expanseSave);

route.post("/displayexpanses",transactionController.displayExpanses);

route.post("/displayreport",transactionController.displayReports);

route.post("/usertotalexpanse",transactionController.userTotalExpanse);

module.exports=route;