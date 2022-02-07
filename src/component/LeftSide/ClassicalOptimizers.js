import React from 'react'
import { Navbar, Container, Card } from 'react-bootstrap'
import classicalOpt from '../../images/Classical.png'
import classicalPlaceholders from '../../images/placeholders/Classical.png'
const ClassicalOptimizers = (props) => {
  return (
    <div>
    <Card>
    <Card.Header className='d-flex justify-content-between'><img src={classicalOpt} alt='classicalOpt' width={20}></img><span>Classical Optimizers</span><br/></Card.Header>
    <Card.Body style={{backgroundColor:'#dfe2ec'}}>
      <blockquote className="blockquote mb-0">
      <img src={classicalPlaceholders} alt='classicalOpt' width={230}></img>
      </blockquote>
    </Card.Body>
  </Card>
    </div>
  )
}

export default ClassicalOptimizers
