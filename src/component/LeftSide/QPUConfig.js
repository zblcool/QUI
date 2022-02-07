import React from 'react'
import { Navbar, Container, Card } from 'react-bootstrap'
import QPUConfigImg from '../../images/QPU.png'
import QPUPlaceholders from '../../images/placeholders/QPU.png'
const QPUConfig = (props) => {
  return (
    <div>
    <Card>
    <Card.Header className='d-flex justify-content-between'><img src={QPUConfigImg} alt='qpu' width={15} ></img><span>QPU config</span><br/></Card.Header>
    <Card.Body className="px-0 py-3">
      <blockquote className="blockquote mb-0">
      <img src={QPUPlaceholders} alt='qpu' width={130} ></img>
 
      </blockquote>
    </Card.Body>
  </Card>
    </div>
  )
}

export default QPUConfig
