import React from 'react'
import { Navbar, Container, Card } from 'react-bootstrap'
import classicalOpt from '../../images/Classical.png'
import diracPlaceholders from '../../images/placeholders/Dirac.png'
const QuantumStatesDirac = (props) => {
  return (
    <div>
    <Card>
    <Card.Header className='d-flex justify-content-between'><img src={classicalOpt} alt='classicalOpt' width={20}></img><span>Classical Optimizers</span><br/></Card.Header>
    <Card.Body style={{backgroundColor:'#F6F7FC'}}>
      <blockquote className="blockquote mb-0"  >
      <img src={diracPlaceholders} alt='classicalOpt' width={550}></img>
      </blockquote>
    </Card.Body>
  </Card>
    </div>
  )
}

export default QuantumStatesDirac
