import React, { useState } from "react";
import { Button, Col, Offcanvas, Row } from "react-bootstrap";
import GridLayout from "react-grid-layout";
import AccountStatusCard from "../component/LeftSide/AccountStatusCard";
import ClassicalOptimizers from "../component/LeftSide/ClassicalOptimizers";
import MyProjects from "../component/LeftSide/MyProjects";
import QPUConfig from "../component/LeftSide/QPUConfig";
import QuantumRegisters from "../component/LeftSide/QuantumRegisters";
import leftSideImg from "../images/leftSide.png";
import verticalImg from "../images/veriticaDivider.png"
import Hadmard from "../images/Hadmard.png"
import ParameterControl from "../images/ParameterControl.png"
import QNN from "../images/QNN.png"
import QuantamData from "../images/QuantamData.png"


const Dashboard = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [gridLayout, setGridLayout] = useState([
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
  ]);

  const onDrop = (layout, layoutItem, _event) => {
    // alert(`Dropped element props:\n${JSON.stringify(layoutItem, ['x', 'y', 'w', 'h'], 2)}`);
    console.log(layoutItem);
    console.log(layout);
    let tempArray = [];
    for (let i = 0; i < layout.length; i++) {
      const element = layout[i];
      tempArray.push({
        i: element.i.startsWith("itemId")
          ? element.i
          : "itemId" + (layout.length + i).toString(),
        x: element.x,
        y: element.y,
        w: element.w,
        h: element.h,
      });
    }
    setGridLayout(tempArray);
  };

  return (
    <div className=" d-flex flex-column flex-grow-1 mb-5">
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="top"
        className="top-right-off-canvas"
        backdrop={false}
      >
        <Offcanvas.Body>
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
            
            <img src={Hadmard} width={100} alt="Hadmard"></img>
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
          
          <img src={ParameterControl} width={100} alt="ParameterControl"></img>
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
        
        <img src={QNN} width={100} alt="QNN"></img>
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
      
      <img src={QuantamData} width={100} alt="QuantamData"></img>
    </div>
        </Offcanvas.Body>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
      </Offcanvas>
      <Row>
        <Col xs={2} className="custom-purple-cards-container">
          <Row>
            <Col>
              <AccountStatusCard />
            </Col>
            <Col>
              <QPUConfig />
            </Col>
          </Row>
          <Row>
            <Col>
              <MyProjects />
            </Col>
            <Col>
              <QuantumRegisters />
            </Col>
          </Row>
          <Row>
            <Col>
              <ClassicalOptimizers />
            </Col>
          </Row>
        </Col>
        <Col xs={1} className="custom-middle-tool-bar">
        <img src={verticalImg} alt='vertical'></img>
      </Col>
        <Col xs={9} style={{marginLeft:'-80px'}}>
          <Button variant="primary" onClick={handleShow}>
            Launch
          </Button>
          

    
            <GridLayout
            className="layout"
            layout={gridLayout}
            cols={12}
            rowHeight={30}
            width={1200}
            allowOverlap={true}
            preventCollision={true}
            isDroppable={true}
            onLayoutChange={(layout)=>{
              console.log('layout',layout)
            }}
            onDrop={(layout, layoutItem, _event) =>
              onDrop(layout, layoutItem, _event)
            }
          >
            {gridLayout.map((e) => {
              return (
                <div key={e.i} className={e.static ? "static" : ""}>
                  {e.static ? (
                    <span
                      className="text"
                      title="This item is static and cannot be removed or resized."
                    >
                      Static - {e.i}
                    </span>
                  ) : (
                    <span className="text">{e.i}</span>
                  )}
                </div>
              );
            })}
          </GridLayout>
          
          
         

        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
