import { useEffect, useState } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';


const DisplayExpenses=()=>{
    const [mydata,setMydata]=useState([]);
    const [uid,setUid]=useState();

    useEffect(()=>{
        let usrid=window.localStorage.getItem("userid");
        setUid(usrid);
    },[]);

    useEffect(()=>{
        loadData();
    },[uid]);

    const loadData=()=>{
        const api="http://localhost:8080/transactions/displayexpanses";
        axios.post(api,{id:uid}).then((res)=>{
            setMydata(res.data);
        })
    }

    let sno=0;
    let totalAmount=0;
    const ans=mydata.map((key)=>{
        sno++;
        totalAmount=totalAmount+key.amount;
        return(
            <tr>
                <td> {sno} </td>
                <td> {key.description} </td>
                <td> {key.date} </td>
                <td> {key.amount} </td>
            </tr>
        )
    })
    return(
        <>
           <h1> Show Total Expenses</h1>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Description</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {ans}

      <tr>
        <th colSpan="3"> <h4> Total Expenses Amount :</h4> </th>
        <th> {totalAmount} </th>
      </tr>
      </tbody>

      </Table>

        </>
    )
}

export default DisplayExpenses;