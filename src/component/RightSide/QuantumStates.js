import React from 'react'
import { Navbar, Container, Card } from 'react-bootstrap'
import classicalOpt from '../../images/Classical.png'
import histPlaceholders from '../../images/placeholders/Histo.png'
const QuantumStates = (props) => {
  return (
    <div>
    <Card>
    <Card.Header className='d-flex justify-content-between'><img src={classicalOpt} alt='classicalOpt' width={20}></img><span>Quantum State 【Histograms】</span><br/></Card.Header>
    <Card.Body className="py-0 px-5" style={{backgroundColor:'#F6F7FC'}}>
      <blockquote className="blockquote mb-0">
      <img src={histPlaceholders} alt='classicalOpt' width={620}></img>
      </blockquote>
    </Card.Body>
  </Card>
    </div>
  )
}

export default QuantumStates
