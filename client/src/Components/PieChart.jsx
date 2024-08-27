import axios from "axios";
import { useState,useEffect } from "react";
const PieChart=()=>{
    const [mydata,setMydata]=useState([]);
    const [mydata1,setMydata1]=useState([]);
    const [uid,setUid]=useState();

    useEffect(()=>{
        let usrid=window.localStorage.getItem("userid");
        setUid(usrid);
    },[]);

    useEffect(()=>{
        loadData();
    },[uid]);

    const loadData=()=>{
        const api="http://localhost:8080/transactions/usertotalexpanse";
        axios.post(api,{id:uid}).then((res)=>{
            setMydata(res.data.ernData);
            setMydata1(res.data.expData);
        })
    }
    let totalearning=0;
    mydata.map((key)=>{
        totalearning+=key.amount;
    })
    let totalexpanse=0;
    mydata.map((key)=>{
        totalexpanse+=key.amount;
    })

    return(
        <>
        <h1>Your Expanse/Earning Graphical Analysis</h1>
        <PieChart
  series={[
    {
      data: [
        { id: 0, value: {totalearning}, label: 'Earning' },
        { id: 1, value: {totalexpanse}, label: 'Expanses' },
      ],
    },
  ]}
  width={400}
  height={200}
/>
            
        </>
    )
}

export default PieChart;