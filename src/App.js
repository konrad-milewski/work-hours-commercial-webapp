import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
// import "./styles/main.scss";
import Auth from "./layouts/auth"
import Navbar from "./layouts/navbar";
import Header from "./layouts/header";
import Main from "./layouts/main";
import NavbarComponent from "./layouts/navbar";
import './style.css'
import { Container } from "react-bootstrap";
import { useState } from "react";

function App() {
  
  return (
   
<Router>
      <Header />
      <Container fluid className="pb-5">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/auth" element={<Auth/>}/>
      </Routes>
      </Container>
      <NavbarComponent/>
    </Router>
  
    
    
  );
}

const mapDispatchToProps = (dispatch) => ({});
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
