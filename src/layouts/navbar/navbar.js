import React from "react";
import {Navbar, Container, Button} from 'react-bootstrap'
import OffcanvasEl from "../../components/off-canvas/OffCanvas";

const NavbarComponent = () => {
  return (

    <Navbar expand="lg" className="scrollme"  fixed="bottom" variant="light" bg="light">
    <Container fluid  style={{minWidth:'400px', overflowX:'scroll'}}>
    <Button href="/auth">Zaloguj się do pracy</Button>
    <Button variant="secondary" className="me-auto mx-3">KDS</Button>
    </Container>
  </Navbar>
  );
};
export default NavbarComponent;
