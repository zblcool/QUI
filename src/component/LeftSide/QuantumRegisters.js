import React from "react";
import { Navbar, Container, Card } from "react-bootstrap";
import QuantumImg from "../../images/Registers.png";
import modal1 from "../../images/modal1.png";
import modal2 from "../../images/modal2.png";
import modal3 from "../../images/modal3.png";
import modal4 from "../../images/modal4.png";
import longPic from "../../images/longPic.png"
import MainRegister from '../../images/MainRegister.png'
import PickRegister from '../../images/pinkRegister.png'
const QuantumRegisters = (props) => {
  const { setItemSize,setSelectedImg,handlePrint } = props;
  return (
    <div>
      <Card>
        <Card.Header className="d-flex justify-content-between">
          <img src={QuantumImg} alt="QuantumImg" width={15}></img>
          <span>Quantum registers</span>
          <br />
        </Card.Header>
        <Card.Body
          style={{ textAlign: "center" }}
          className="custom-quantum-registers"
        >
          <div
            className="droppable-element"
            draggable={true}
            unselectable="on"
            // this is a hack for firefox
            // Firefox requires some kind of initialization
            // which we can do by adding this attribute
            // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
            onDragStart={(e) => {
              e.dataTransfer.setData("text/plain", "");
              setItemSize("register");
              setSelectedImg({src:longPic,alt:'longPic'})
            }}
          >
            <img src={modal2} width={100} alt="modal2"></img>
          </div>
          <div
            className="droppable-element"
            draggable={true}
            unselectable="on"
            // this is a hack for firefox
            // Firefox requires some kind of initialization
            // which we can do by adding this attribute
            // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
            onDragStart={(e) => {
              e.dataTransfer.setData("text/plain", "");
             
              setSelectedImg({src:PickRegister,alt:'longPic'})
              setItemSize("register");
              handlePrint('register1')
            }}
          >
            <img src={modal3} width={100} alt="modal3"></img>
          </div>
          <div
            className="droppable-element"
            draggable={true}
            unselectable="on"
            // this is a hack for firefox
            // Firefox requires some kind of initialization
            // which we can do by adding this attribute
            // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
            onDragStart={(e) => {
              e.dataTransfer.setData("text/plain", "");
              setItemSize("register");
            }}
          >
            <img src={modal4} width={100} alt="modal4"></img>
          </div>
          <div
            className="droppable-element"
            draggable={true}
            unselectable="on"
            // this is a hack for firefox
            // Firefox requires some kind of initialization
            // which we can do by adding this attribute
            // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
            onDragStart={(e) => {
              e.dataTransfer.setData("text/plain", "");
              
              setSelectedImg({src:MainRegister,alt:'longPic'})
              setItemSize("register");
              handlePrint('register2')
            }}
          >
            <img src={modal1} width={100} alt="modal1"></img>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default QuantumRegisters;
