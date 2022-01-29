import React from 'react'
import { Navbar, Container, Card } from 'react-bootstrap'
import classicalOpt from '../../images/Classical.png'
const ClassicalOptimizers = (props) => {
  return (
    <div>
    <Card>
    <Card.Header className='d-flex justify-content-between'><img src={classicalOpt} alt='classicalOpt' width={30}></img><span>Classical Optimizers</span><br/></Card.Header>
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
          erat a ante.{' '}
        </p>
        <footer className="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
    </Card.Body>
  </Card>
    </div>
  )
}

export default ClassicalOptimizers
