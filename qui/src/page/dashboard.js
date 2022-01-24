import React, { useState } from "react";
import { Button, Col, Offcanvas, Row } from "react-bootstrap";
import GridLayout from "react-grid-layout";
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

    setGridLayout(e=>([...e,{
        i: "itemId" + ((Math.round(Math.random()* 1000) ).toString()),
        x: layoutItem.x,
        y: layoutItem.y,
        w: layoutItem.w,
        h: layoutItem.h,
      }]));
  };
  return (
    <div className="px-4 px-md-5 d-flex flex-column flex-grow-1 my-5">
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="top"
        className="top-right-off-canvas"
        backdrop={false}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <div
          className="droppable-element"
          draggable={true}
          unselectable="on"
          style={{ width: 150 + "px", backgroundColor: "grey" }}
          // this is a hack for firefox
          // Firefox requires some kind of initialization
          // which we can do by adding this attribute
          // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
          onDragStart={(e) => e.dataTransfer.setData("text/plain", "")}
        >
          Droppable Element (Drag me!)
        </div>
      </Offcanvas>
      <Row>
        <GridLayout
          className="layout"
          layout={gridLayout}
          cols={12}
          rowHeight={30}
          width={1200}
          isDroppable={true}
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
      </Row>
    </div>
  );
};

export default Dashboard;
