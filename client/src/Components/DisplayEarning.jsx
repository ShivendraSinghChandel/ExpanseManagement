import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

const DisplayEarning=()=>{
    const [mydata,setMydata]=useState([]);
    const [uid,setUid]=useState();

    useEffect(()=>{
        let usrid=window.localStorage.getItem("userid");
        setUid(usrid);
    },[]);

    const loadData=()=>{
        let api="http://localhost:8080/transactions/displayearning";
        axios.post(api,{id:uid}).then((res)=>{
            console.log(res.data);
            setMydata(res.data);
        })
    }
    useEffect(()=>{
        loadData();
    },[uid]);
    let sno=0;
    let totalAmount=0;
    const ans=mydata.map((key)=>{
        sno++;
        totalAmount=totalAmount+key.amount;
        return(
            <>
            <tr>
                <td> {sno} </td>
                <td> {key.source} </td>
                <td> {key.date} </td>
                <td> {key.amount} </td>
            </tr>
            </>
        )
    })
    return(
        <>
           <h1>Total Earning</h1>
           <Table striped bordered hover>
            <thead>
                <tr>
                    <th>sno</th>
                    <th>source</th>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
                </thead>
                <tbody>
                    {ans}
                    <tr>
                        <th colSpan="3"><h3>Total Earning Amount : </h3></th>
                        <th> {totalAmount} </th>
                    </tr>
                </tbody>
           </Table>
        </>
    )
}


export default DisplayEarning;