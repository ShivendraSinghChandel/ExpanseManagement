import { useEffect, useState } from "react";
import { Outlet, useNavigate,Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

const Dashboard=()=>{
    const [username,setName]=useState("");
    const [useremail,setEmail]=useState("");
    const myNav=useNavigate();

    useEffect(()=>{
        const usrname=window.localStorage.getItem("username");
        const usremail=window.localStorage.getItem("useremail");
        if(!usrname)
        {
            myNav("/");
        }
        setName(usrname);
        setEmail(usremail);
    },[]);

    const logout=()=>{
        window.localStorage.clear();
        myNav("/");
    }
    return(
        <>
            <Container fluid>
      <Row>
        <Col className="text-end bg-info p-3 text-white"> 
          Welcome : {username} Email: {useremail}

          <Button variant="primary" size="sm" style={{marginLeft:"20px"}} onClick={logout}>Logout</Button>
               
        </Col>
      </Row>
      <Row>
        <Col md={2} className="bg-light">
        <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link as={Link} to="earning">Enter Earnings</Nav.Link>
      <Nav.Link as={Link} to="expanse">Enter Expanses</Nav.Link>
      <Nav.Link as={Link} to="displayern">DisplayEarnings</Nav.Link>
      <Nav.Link as={Link} to="displayexpa">Display Expanses</Nav.Link>
      <Nav.Link as={Link} to="userreport">Reports</Nav.Link>
      <Nav.Link as={Link} to="basicpie">Graphical Reports</Nav.Link>
      <Nav.Link as={Link} to="earning">Search Data</Nav.Link>
      
      </Nav>
        </Col>
        <Col  md={10}>
        <Outlet/>
        </Col>

      </Row>
      </Container>
        </>
    )
}

export default Dashboard;