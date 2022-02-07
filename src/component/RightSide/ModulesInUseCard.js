import React from 'react'
import { Navbar, Container, Card } from 'react-bootstrap'
import classicalOpt from '../../images/Classical.png'
import modulePlaceholder from '../../images/placeholders/Module.png'

const ModulesInUseCard = (props) => {
  return (
    <div className='p-0'>
    <Card>
    <Card.Header className='d-flex justify-content-between'><img src={classicalOpt} alt='classicalOpt' width={20}></img><span>Classical Optimizers</span><br/></Card.Header>
    <Card.Body className='py-0 px-2'>
      <blockquote className="blockquote mb-0">
      <img src={modulePlaceholder} alt='classicalOpt' ></img>
      </blockquote>
    </Card.Body>
  </Card>
    </div>
  )
}

export default ModulesInUseCard
