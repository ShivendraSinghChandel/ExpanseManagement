import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import {message} from "antd";
import {useNavigate} from "react-router-dom";

const Home=()=>{
 const [input, setInput] = useState({});
 const [uemail,setEmail]=useState("");
 const [upassword,setPassword]=useState("");

 const myNav= useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


   const handleInput=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      setInput(values=>({...values, [name]:value}))
   }


   const handleSubmit=()=>{
    let api="http://localhost:8080/customer/customersave";

    axios.post(api, input).then((res)=>{
      message.success("Registration Successfull");
      setShow(false);
    })

   }

   const checkUser=(e)=>{
      e.preventDefault();
      let api="http://localhost:8080/customer/customercheck";
      axios.post(api,{email:uemail,password:upassword}).then((res)=>{
             window.localStorage.setItem("username",res.data.name);
             window.localStorage.setItem("useremail",res.data.email);
             window.localStorage.setItem("userid", res.data._id);
            myNav("/dashboard");
      }).catch((err)=>{
        message.error(err.response.data);
      })
   }

    return(
        <>
          <div id="header">
              <div id="headerlft">

              </div>
              <div id="headermdl">
              Welcome To Expense Management System
              </div>
              <div id="headerrgt">
              <Button variant="primary" onClick={handleShow}>User Registration</Button>
              </div>
          </div> 

        <div id="loginform">  
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  value={uemail} onChange={(e)=>{setEmail(e.target.value)}}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  value={upassword} onChange={(e)=>{setPassword(e.target.value)}} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={checkUser}>
        Login
      </Button>
    </Form>
    Dont have an Account? Please Sign up
    </div>
 


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter name</Form.Label>
              <Form.Control  type="text" name="name" onChange={handleInput}   autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter city</Form.Label>
              <Form.Control  type="text" name="city" onChange={handleInput}  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter email</Form.Label>
              <Form.Control  type="email" name="email" onChange={handleInput} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter password</Form.Label>
              <Form.Control  type="password" name="password" onChange={handleInput}  />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            submit
          </Button>
        </Modal.Footer>
      </Modal>

       


 <div id='footer'>

 </div>
 <div style={{textAlign:"center"}}>
    www.expensemamanegent.com all right reserved. 2024 &copy;
 </div>

        </>
    )
}

export default Home;