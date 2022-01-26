import React from 'react'
import { Navbar, Container, Card } from 'react-bootstrap'
import proejctsImg from '../../images/Projects.png'
const MyProjects = (props) => {
  return (
    <div>
    <Card>
    <Card.Header className='d-flex justify-content-between'><img src={proejctsImg} alt='projects' width={25}></img><span>My Projects</span><br/></Card.Header>
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

export default MyProjects
