import React, { useRef } from "react";
import { Navbar, Container, Card } from "react-bootstrap";
import classicalOpt from "../../images/Classical.png";
import classicalPlaceholders from "../../images/placeholders/Classical.png";
import { UnControlled as CodeMirror } from "react-codemirror2";
require('codemirror/mode/python/python');
require('codemirror/mode/javascript/javascript');
const ClassicalOptimizers = (props) => {
  const {printedCode} = props
  const newRef = useRef()
  React.useEffect(()=>{
    console.log(newRef.current.editor)
    const tempObj = newRef.current.editor.getScrollInfo();
    console.log(tempObj)
    newRef.current.editor.scrollTo(tempObj.left,tempObj.height)
  },[printedCode])
  return (
    <div>
      <Card>
        <Card.Header className="d-flex justify-content-between">
          <img src={classicalOpt} alt="classicalOpt" width={20}></img>
          <span>Classical Optimizers</span>
          <br />
        </Card.Header>
        <Card.Body style={{ backgroundColor: "#dfe2ec" }}>
          <CodeMirror
            ref={newRef}
            resizable={true}
            value={printedCode}
            options={{
              mode: "python",
              theme: "base16-light",
              lineNumbers: true,
              autofocus:true
              
            }}
            onChange={(editor, data, value) => {}}
          />
          {/*
      <blockquote className="blockquote mb-0">
      <img src={classicalPlaceholders} alt='classicalOpt' width={230}></img>
      </blockquote>
       */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ClassicalOptimizers;
