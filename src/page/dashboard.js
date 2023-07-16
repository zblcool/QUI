import React, { useRef, useState } from "react";
import { Button, Col, Modal, Offcanvas, Row, Toast } from "react-bootstrap";
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
import SidePic from '../images/sidePic.png'
import QAABlank from "../images/QAABlank.png";
import ParameterControl from "../images/ParameterControl.png";
import QNN from "../images/QNN.png";
import Ablock from "../images/Ablock.png";
import AblockZ from "../images/AblockZ.png";
import Oblock from "../images/Oblock.png";
import Sblock from "../images/Sblock.png";
import RedBlock from "../images/redBlock.png";
import Ntimes from "../images/Ntimes.png"
import measure from "../images/measure.png"
import QuantamData from "../images/QuantamData.png";
import QuantumStates from "../component/RightSide/QuantumStates";
import QuantumStatesDirac from "../component/RightSide/QuantumStatesDirac";
import ModulesInUseCard from "../component/RightSide/ModulesInUseCard";

import _, { remove } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";

import styled, { keyframes } from "styled-components";
import { flash } from "react-animations";

const bounceAnimation = keyframes`${flash}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;

const Dashboard = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showModal, setShowModal] = useState(false);
  const childRef = useRef();

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);
  const [itemSize, setItemSize] = useState("small");
  const [gridLayout, setGridLayout] = useState([]);
  const [gridItemImgs, setGridItemImgs] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);
  const [printedCode, setPrintedCode] = useState("");
  const [showAblockZ, setShowAblockZ] = useState(false);
  const [hasDropedBlockA, setHasDropedBlockA] = useState(false);
  const [loopFinishedSetup, setLoopFinishedSetup] = useState(false);
  const [hasDropedAZ,setHasDropedAZ] = useState(false)
  const [showDiagram,setShowDiagram] = useState(false)
  const [showToast,setShowToast] = useState(false)
  const [showSidePic1, setShowSidePic1] = useState(false)
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
  const handlePrint = (e) => {
    switch (e) {
      case "register1":
        setTimeout(() => {
          setPrintedCode([
            ...printedCode,
            "qaa_ancilla = eng.allocate_qubit()",
            " ",
          ]);
        }, 1000);

        break;
      case "register2":
        setTimeout(() => {
          setPrintedCode([
            ...printedCode,
            "system_qubits = eng.allocate_qureg(3)",
            " ",
          ]);
        }, 1000);
        break;
      case "redBlock":
        setTimeout(() => {
          setPrintedCode([
            ...printedCode,
            "X | qaa_ancilla",
            "H | qaa_ancilla",
            " ",
          ]);
        }, 1000);
        break;
      case "oblock":
        setTimeout(() => {
          setPrintedCode([
            ...printedCode,
            "def func_oracle(eng,system_qubits,qaa_ancilla):",
            "  with Compute(eng):",
            "    All(X) | system_qubits[0::2]",
            "  with Control(eng, system_qubits):",
            "    X | qaa_ancilla",
            "  Uncompute(eng)",
          ]);
        }, 1000);
        break;
      case "aBlock":
        if (!hasDropedBlockA) {
          setTimeout(() => {
            setPrintedCode([
              ...printedCode,
              "def func_algorithm(eng,system_qubits):",
              "  All(H) | system_qubits",
            ]);
          }, 1000);
          setHasDropedBlockA(true);
        } else {
          setTimeout(() => {
            setPrintedCode([
              ...printedCode,
              "func_algorithm(eng, system_qubits)",
              " ",
            ]);
          }, 1000);
          setHasDropedBlockA(false);
        }

        break;
      case "Loop":
        setTimeout(() => {
          setPrintedCode([
            ...printedCode,
            "with Loop(eng, num_it):",
            "  QAA(func_algorithm, func_oracle) | (system_qubits, qaa_ancilla)"
          ]);
          setLoopFinishedSetup(true)
        }, 1000);
        break;

      case 'measure':
        setTimeout(() => {
        setPrintedCode([...printedCode, "All(Measure) | system_qubits"]);
        },1000);
        break;
      default:
        break;
    }
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
    <Toast onClose={() => setShowToast(false)} show={showToast} delay={4000} autohide style={{position:'absolute',left:'40%',top:'5%',zIndex:1000}}>
          <Toast.Header>

            <strong className="me-auto">Notifications</strong>
            <small>2 seconds ago</small>
          </Toast.Header>
          <Toast.Body><h4>Compile successfully! Loading diagram....</h4></Toast.Body>
        </Toast>
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
              handlePrint("redBlock");
              setItemSize("smallBlock");
              setSelectedImg({ src: e.target.src, alt: e.target.alt });
            }}
            onDragEnd={(e) => {
              console.log("end", e.target.src);
            }}
            style={{ position: "absolute", top: 120 }}
          >
            <img src={RedBlock} width={50} alt="block"></img>
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
            handlePrint("measure");
            setItemSize("block");
            setSelectedImg({ src: e.target.src, alt: e.target.alt });
          }}
          onDragEndCapture={(e)=>{
            setTimeout(() => {
              setShowToast(true)
            }, 1000);
          
            setTimeout(() => {
              childRef.current.setNewData()
            }, 2000);
          }}
          onDragEnd={(e) => {
            console.log("end", e.target.src);
          }}
          style={{ position: "absolute", top: 100,left:150 }}
        >
          <img src={measure} width={50} alt="block"></img>
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
              setShowAblockZ(true);
              setItemSize("small");
              setSelectedImg({ src: e.target.src, alt: e.target.alt });
              handlePrint("aBlock");
             

            }}
            onDragEndCapture={(e)=>{
              if (!hasDropedAZ){
                setCount(count + 1);
                setTimeout(() => {
                  setGridItemImgs([...gridItemImgs,{
                    src:AblockZ,
                    alt:"block"
                  }])
                  setGridLayout([...gridLayout,{
                    i:"itemId" + (count + 1).toString(),
                    x:gridLayout[gridLayout.length-1].x-4,
                    y:gridLayout[gridLayout.length-1].y,
                    w:2,
                    h:2,
                    isResizable:false,
                    isDraggable:true
                  }])
                }, 1000);
              }
             setHasDropedAZ(true)

            }}
            onDragEnd={(e) => {
              console.log("end", e.target.src);
            }}
          >
            <img src={Ablock} width={50} alt="block"></img>
          </div>
          {showAblockZ && (
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
              <img src={AblockZ} width={50} alt="block"></img>
            </div>
          )}
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
              handlePrint("oblock");
              setTimeout(() => {
                handleModalShow();
              }, 3000);
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
                handlePrint={handlePrint}
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
              onDrag={(layout, layoutItem, _event) => {
                console.log("drag", layout, layoutItem, _event);
              }}
              onDropDragOver={(e) => {
                if (itemSize === "register") {
                  return { w: 2, h: 1 };
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
                  left: "20px",
                  top: -25,

                  cursor: "pointer",
                };
                const removeStyle = {
                  position: "absolute",
                  left: "2px",
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
                          {gridItemImgs[index].alt === "QAA" && loopFinishedSetup? (
                            <BouncyDiv>
                            <div style={{position:'absolute',right:-540,top:-40}}>
                            <img src={Ntimes} alt='Ntimes' width={100}></img>
                            </div>
                              <img
                                src={gridItemImgs[index].src}
                                alt={gridItemImgs[index].alt}
                                width={
                                  gridItemImgs[index].alt === "longPic"
                                    ? 1390
                                    : gridItemImgs[index].alt === "QAA"
                                    ? 520
                                    : gridItemImgs[index].alt === "block"
                                    ? 90
                                    : 120
                                }
                              ></img>
                              
                            </BouncyDiv>
                          ) : (
                            <div style={{perspective:'1500px'}}>
                            <img
                              src={gridItemImgs[index].src}
                              alt={gridItemImgs[index].alt}
                              width={
                                gridItemImgs[index].alt === "longPic"
                                  ? 1390
                                  : gridItemImgs[index].alt === "QAA"
                                  ? 520
                                  : gridItemImgs[index].alt === "block"
                                  ? 90
                                  : 120
                              }

                            ></img>
                            {showSidePic1 && gridItemImgs[index].alt === "Hadmard" && (<div className="td-figure"> <img src={SidePic} alt="sidePic" width={250} ></img></div> )}
                            
                            </div>
                          )}
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
       
                    {gridItemImgs[index].alt === "Hadmard" && (
                     
                      <span
                      className="lock"
                      style={lockStyle}
                      onClick={() => {
                        setShowSidePic1(!showSidePic1); 
                      }}
                    >
                      <FontAwesomeIcon
                        icon={
                          faList
                        }
                      />
                    </span>
                    )}
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
              <QuantumStates showDiagram={showDiagram} ref={childRef}/>
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
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>QAA Set up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          QAA is ready to be build, Do you want to build it now?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleModalClose();
              handlePrint("Loop");
            }}
          >
            Build
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Dashboard;
