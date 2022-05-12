import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Pagination,
} from "react-bootstrap";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import OffcanvasEl from "../../components/off-canvas/OffCanvas";
import { isMobile } from "react-device-detect";
import Darkmode from 'darkmode-js';
export default function Header() {
  const [list, setlist] = useState([
    "11.12.12",
    "10.12.12",
    "09.12.12",
    "08.12.12",
    "12.11.2011",
    "Grafik",
  ]);
console.log(useLocation().pathname )
const darkmode =  new Darkmode();
// darkmode.toggle();
  const [count, setcount] = useState(3);
  return (
    <Navbar bg="light" expand="lg" style={{height:'50px'}}>
      
      <Container fluid>
      {/* {isMobile && <OffcanvasEl />} */}
      

        <Navbar.Brand className="d-none-on-phone fw-bold">Czas Pracy</Navbar.Brand>
      
       {!(String(useLocation().pathname )=== '/auth') &&  <Pagination className="pagination-custom">
          <Pagination.Prev onClick={() => setcount((prev) => prev - 1)} />
          <Pagination.Item style={{width:'120px', textAlign:'center'}}><span className="fw-regular text-dark">{list[count]}</span></Pagination.Item>

          <Pagination.Next onClick={() => setcount((prev) => prev + 1)} />
        </Pagination>}
        <div style={{marginRight:'-35px'}} >
          <Navbar.Collapse id="basic-navbar-nav">
          
            <Nav>
           
            {<Navbar.Brand className="d-flex justify-content-end text-muted fs-6 d-none-on-phone">
             <div className="mx-3">24.07.2022, 15:58</div> 
          <OffcanvasEl />
            </Navbar.Brand>}  
            {/* <OffcanvasEl/> */}
            </Nav>
            
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}
