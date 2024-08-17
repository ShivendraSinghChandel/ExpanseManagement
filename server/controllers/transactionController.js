const transModel=require("../models/transactionModel");
const expanseModel=require("../models/expanseModel");

const amountSave=async(req,res)=>{
    const {amount,source,date,id}=req.body;
    const transdata=await transModel.create({
        user:id,
        amount:amount,
        source:source,
        date:date
    });
    res.status(200).send(transdata);
}

const displayEarning=async(req,res)=>{
   let id=req.body.id;
   const transdata=await transModel.find({user:id});
   res.status(200).send(transdata);

}

const expanseSave=async(req,res)=>{
    const {amount,description,date,id}=req.body;
    const mydata=new expanseModel({
        user:id,
        amount:amount,
        description:description,
        date:date
    });
    await mydata.save();
    res.status(200).send(mydata);
}

const displayExpanses=async(req,res)=>{
    const id=req.body.id;
    const transdata= await expanseModel.find({user:id});
    res.status(200).send(transdata);
}


const displayReports=async(req,res)=>{
    const {startdate,enddate,id}=req.body;

    const mydata1= await transModel.find({$and:[{user:id},{
        date:{
            $gte:new Date(JSON.stringify(startdate)),
            $lte:new Date(JSON.stringify(enddate))
        }
    }]})

    const mydata2=await expanseModel.find({$and:[{user:id},{
        date:{
            $gte:new Date(JSON.stringify(startdate)),
            $lte:new Date(JSON.stringify(enddate))
        }
    }]})

    res.status(200).send({mydata1:mydata1,mydata2:mydata2});
}
module.exports={
    amountSave,
    displayEarning,
    expanseSave,
    displayExpanses,
    displayReports
}