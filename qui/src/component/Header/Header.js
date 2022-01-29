import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../../images/icon6.png";
import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";
import icon4 from "../../images/icon4.png";
import icon5 from "../../images/icon5.png";
import Projects from "../../images/Projects.png";

const Header = (props) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="custom-nav-bar">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Quantum OS
          </Navbar.Brand>
          <div className="header-status">
            <img src={Projects} height={30} alt="Projects" onClick={()=>{alert('project')}}></img>
            <img src={icon5} height={30} alt="icon5" onClick={()=>{alert('icon5')}}></img>
            <img src={icon3} alt="icon3" height={30} onClick={()=>{alert('icon3')}}></img>
            <img src={icon2} alt="icon2" height={30} onClick={()=>{alert('icon2')}}></img>
            <img src={icon1} alt="icon1" height={30} onClick={()=>{alert('icon1')}}></img>
          </div>
          <div className="header-status">
            Qubits in use:<span> 36</span>
          </div>
          <div className="header-status">
            Gate Count:<span> 1359</span>
          </div>
          <div className="header-status">
            Run-time(est.):<span> 56s</span>
          </div>
          <div>
            <img src={icon4} alt="wifi" height="30"></img>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
