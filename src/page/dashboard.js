import React, { useState } from "react";
import { Button, Col, Offcanvas, Row } from "react-bootstrap";
import GridLayout from "react-grid-layout";
import AccountStatusCard from "../component/LeftSide/AccountStatusCard";
import ClassicalOptimizers from "../component/LeftSide/ClassicalOptimizers";
import MyProjects from "../component/LeftSide/MyProjects";
import QPUConfig from "../component/LeftSide/QPUConfig";
import QuantumRegisters from "../component/LeftSide/QuantumRegisters";
import leftSideImg from "../images/leftSide.png";
import verticalImg from "../images/veriticaDivider.png";
import verticalSidebar from "../images/verticalSidebar.png";
import Hadmard from "../images/Hadmard.png";
import QAA from "../images/QAA.png";
import QAABlank from "../images/QAABlank.png";
import ParameterControl from "../images/ParameterControl.png";
import QNN from "../images/QNN.png";
import Ablock from "../images/Ablock.png";
import Oblock from "../images/Oblock.png";
import Sblock from "../images/Sblock.png";
import QuantamData from "../images/QuantamData.png";
import QuantumStates from "../component/RightSide/QuantumStates";
import QuantumStatesDirac from "../component/RightSide/QuantumStatesDirac";
import ModulesInUseCard from "../component/RightSide/ModulesInUseCard";

import _, { remove } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";

const Dashboard = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [itemSize, setItemSize] = useState("small");
  const [gridLayout, setGridLayout] = useState([]);
  const [gridItemImgs, setGridItemImgs] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);
  const [printedCode, setPrintedCode] = useState("");
  // counter
  const [count, setCount] = useState(gridLayout.length);

  const onDrop = (layout, layoutItem, _event) => {
    // alert(`Dropped element props:\n${JSON.stringify(layoutItem, ['x', 'y', 'w', 'h'], 2)}`);
    console.log(layoutItem);
    console.log(layout);
    console.log(_event);
    let tempArray = [];
    let newElementCounter = 0;
    for (let i = 0; i < layout.length; i++) {
      const element = layout[i];
      // if it startWith itemId. It means its already created.
      if (element.i.startsWith("itemId")) {
        tempArray.push({
          i: element.i,
          x: element.x,
          y: element.y,
          w: element.w,
          h: element.h,
          isResizable: false,
          isDraggable: element.isDraggable ? true : false,
        });
      } else {
        tempArray.push({
          i: "itemId" + (count + i).toString(),
          x: element.x,
          y: element.y,
          w: element.w,
          h: element.h * 2,
          isResizable: false,
          isDraggable: element.isDraggable ? true : false,
        });
        newElementCounter++;
      }
    }
    setCount(count + newElementCounter);
    setGridLayout(tempArray);
  };

  // NOTE print code
  const handlePrint = () => {
    setPrintedCode();
  };

  const updateItemImg = () => {
    let tempArray = gridItemImgs;
    tempArray.push(selectedImg);
    setGridItemImgs(tempArray);
  };
  const lockGridItem = (i) => {
    // let tempArray = [...gridLayout]
    let tempArray = gridLayout.map((item, index) => {
      if (index === i) {
        return { ...item, isDraggable: !item.isDraggable }; //gets everything that was already in item, and updates "done"
      }
      return item; // else return unmodified item
    });

    setGridLayout(tempArray);
    console.log(tempArray);
    console.log("done");
  };

  const removeGridItem = (i) => {
    console.log("removing", i);

    // setGridLayout(gridLayout.splice(i+1,1))
    console.log("temp", gridLayout);
    let tempLayout = gridLayout;
    gridLayout.splice(i, 1);
    console.log("temp", tempLayout);
    let tempArray = [];
    for (let i = 0; i < tempLayout.length; i++) {
      const element = tempLayout[i];
      // if it startWith itemId. It means its already created.
      tempArray.push({
        // i: "itemId" + (tempLayout.length + i).toString(),
        i: element.i,
        x: element.x,
        y: element.y,
        w: element.w,
        h: element.h,
        isResizable: false,
        isDraggable: element.isDraggable ? true : false,
      });
    }
    setGridLayout(tempArray);
    let tempImgArray = gridItemImgs;
    tempImgArray.splice(i, 1);
    setGridItemImgs(tempImgArray);
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
          <img
            src={verticalSidebar}
            alt="verticalSidebar"
            style={{ position: "absolute", left: 0, top: -4 }}
            height={220}
          ></img>
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
              setItemSize("small");
              setSelectedImg({ src: e.target.src, alt: e.target.alt });
            }}
            onDragEnd={(e) => {
              console.log("end", e.target.src);
            }}
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
            onDragStart={(e) => {
              e.dataTransfer.setData("text/plain", "");
              setItemSize("Block");
              setSelectedImg({ src: e.target.src, alt: e.target.alt });
            }}
            onDragEnd={(e) => {
              console.log("end", e.target.src);
            }}
          >
            <img src={QAABlank} width={100} alt="QAA"></img>
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
              setItemSize("small");
              setSelectedImg({ src: e.target.src, alt: e.target.alt });
            }}
          >
            <img
              src={ParameterControl}
              width={100}
              alt="ParameterControl"
            ></img>
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
              setItemSize("small");
              setSelectedImg({ src: e.target.src, alt: e.target.alt });
            }}
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
            onDragStart={(e) => {
              e.dataTransfer.setData("text/plain", "");
              setItemSize("small");
              setSelectedImg({ src: e.target.src, alt: e.target.alt });
            }}
          >
            <img src={QuantamData} width={100} alt="QuantamData"></img>
          </div>
        </Offcanvas.Body>
        <Offcanvas.Header closeButton></Offcanvas.Header>
      </Offcanvas>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="end-right-off-canvas"
        backdrop={false}
      >
        <Offcanvas.Body>
          <img
            src={verticalSidebar}
            alt="verticalSidebar"
            style={{ position: "absolute", left: 0, top: 0 }}
            height={210}
          ></img>
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
              setItemSize("small");
              setSelectedImg({ src: e.target.src, alt: e.target.alt });
            }}
            onDragEnd={(e) => {
              console.log("end", e.target.src);
            }}
          >
            <img src={Ablock} width={50} alt="block"></img>
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
              setItemSize("small");
              setSelectedImg({ src: e.target.src, alt: e.target.alt });
            }}
            onDragEnd={(e) => {
              console.log("end", e.target.src);
            }}
          >
            <img src={Oblock} width={50} alt="block"></img>
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
              setItemSize("small");
              setSelectedImg({ src: e.target.src, alt: e.target.alt });
            }}
            onDragEnd={(e) => {
              console.log("end", e.target.src);
            }}
          >
            <img src={Sblock} width={50} alt="block"></img>
          </div>
        </Offcanvas.Body>
        <Offcanvas.Header closeButton></Offcanvas.Header>
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
              <QuantumRegisters
                setItemSize={setItemSize}
                setSelectedImg={setSelectedImg}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <ClassicalOptimizers printedCode={printedCode} />
            </Col>
          </Row>
        </Col>
        <Col xs={1} className="custom-middle-tool-bar">
          <img src={verticalImg} alt="vertical" onClick={handleShow}></img>
        </Col>
        <Col xs={9} style={{ marginLeft: "-80px" }}>
          <Row>
            <GridLayout
              className="layout custom-grid-layout"
              layout={gridLayout}
              useCSSTransforms={true}
              cols={24}
              rowHeight={30}
              width={1400}
              allowOverlap={true}
              preventCollision={true}
              compactType={null}
              isDroppable={true}
              onLayoutChange={(layout) => {
                console.log("layout", layout);
              }}
              onDrop={(layout, layoutItem, _event) => {
                onDrop(layout, layoutItem, _event);
                updateItemImg();
              }}
              onDropDragOver={(e) => {
                if (itemSize === "register") {
                  return { w: 24, h: 1 };
                } else {
                  if (itemSize === "small") {
                    return { w: 2, h: 1 };
                  } else {
                    return { w: 1, h: 1 };
                  }
                }
              }}
            >
              {gridLayout.map((e, index) => {
                const lockStyle = {
                  position: "absolute",
                  right: "2px",
                  top: -25,
                  right: 20,
                  cursor: "pointer",
                };
                const removeStyle = {
                  position: "absolute",
                  right: "2px",
                  top: -25,
                  cursor: "pointer",
                };
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
                      // <span className="text">{e.i}</span>
                      gridItemImgs[index] && (
                        <div>
                          <img
                            src={gridItemImgs[index].src}
                            alt={gridItemImgs[index].alt}
                            width={
                              gridItemImgs[index].alt === "longPic"
                                ? 1390
                                : gridItemImgs[index].alt === "QAA"
                                ? 520
                                : (gridItemImgs[index].alt === "block")?90:120
                            }
                          ></img>
                        </div>
                      )
                    )}
                    <span
                      className="remove"
                      style={removeStyle}
                      onClick={() => {
                        removeGridItem(index);
                      }}
                    >
                      x
                    </span>
                    {gridItemImgs[index].alt === "longPic" ? (
                      <span
                        className="lock"
                        style={lockStyle}
                        onClick={() => {
                          lockGridItem(index);
                        }}
                      >
                        <FontAwesomeIcon
                          icon={
                            typeof gridLayout[index].isDraggable === "undefined"
                              ? faLockOpen
                              : gridLayout[index].isDraggable
                              ? faLockOpen
                              : faLock
                          }
                        />
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </GridLayout>
          </Row>
          <Row className="custom-purple-cards-container">
            <Col>
              <QuantumStates />
            </Col>
            <Col>
              <QuantumStatesDirac />
            </Col>
          </Row>
          <Row className="custom-purple-cards-container">
            <ModulesInUseCard />
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
