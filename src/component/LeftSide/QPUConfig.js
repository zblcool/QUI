import React from 'react'
import { Navbar, Container, Card } from 'react-bootstrap'
import QPUConfigImg from '../../images/QPU.png'
const QPUConfig = (props) => {
  return (
    <div>
    <Card>
    <Card.Header className='d-flex justify-content-between'><img src={QPUConfigImg} alt='qpu' width={15} ></img><span>QPU config</span><br/></Card.Header>
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        </p>
 
      </blockquote>
    </Card.Body>
  </Card>
    </div>
  )
}

export default QPUConfig
