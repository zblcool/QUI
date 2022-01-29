import React from "react";
import { Navbar, Container, Card } from "react-bootstrap";
import QuantumImg from "../../images/Registers.png";
import modal1 from "../../images/modal1.png";
import modal2 from "../../images/modal2.png";
import modal3 from "../../images/modal3.png";
import modal4 from "../../images/modal4.png";
const QuantumRegisters = (props) => {
  return (
    <div>
      <Card>
        <Card.Header className="d-flex justify-content-between">
          <img src={QuantumImg} alt="QuantumImg" width={30}></img>
          <span>Quantum registers</span>
          <br />
        </Card.Header>
        <Card.Body style={{ textAlign: "center" }} className="custom-quantum-registers">
          <div
            className="droppable-element"
            draggable={true}
            unselectable="on"
            // this is a hack for firefox
            // Firefox requires some kind of initialization
            // which we can do by adding this attribute
            // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
            onDragStart={(e) => e.dataTransfer.setData("text/plain", "")}
          >
            <img src={modal2} width={150} alt="modal2"></img>
          </div>
          <div
            className="droppable-element"
            draggable={true}
            unselectable="on"
            // this is a hack for firefox
            // Firefox requires some kind of initialization
            // which we can do by adding this attribute
            // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
            onDragStart={(e) => e.dataTransfer.setData("text/plain", "")}
          >
            <img src={modal3} width={150} alt="modal3"></img>
          </div>
          <div
            className="droppable-element"
            draggable={true}
            unselectable="on"
            // this is a hack for firefox
            // Firefox requires some kind of initialization
            // which we can do by adding this attribute
            // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
            onDragStart={(e) => e.dataTransfer.setData("text/plain", "")}
          >
            <img src={modal4} width={150} alt="modal4"></img>
          </div>
          <div
            className="droppable-element"
            draggable={true}
            unselectable="on"
            // this is a hack for firefox
            // Firefox requires some kind of initialization
            // which we can do by adding this attribute
            // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
            onDragStart={(e) => e.dataTransfer.setData("text/plain", "")}
          >
            <img src={modal1} width={150} alt="modal1"></img>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default QuantumRegisters;
