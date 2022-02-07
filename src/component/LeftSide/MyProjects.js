import React from 'react'
import { Navbar, Container, Card } from 'react-bootstrap'
import proejctsImg from '../../images/Projects.png'
import proejctsPlaceholders from '../../images/placeholders/Project.png'
const MyProjects = (props) => {
  return (
    <div>
    <Card>
    <Card.Header className='d-flex justify-content-between'><img src={proejctsImg} alt='projects' width={15}></img><span>My Projects</span><br/></Card.Header>
    <Card.Body className='py-0'>
      <blockquote className="blockquote mb-0">
      <img src={proejctsPlaceholders} alt='projects' width={110}></img>

      </blockquote>
    </Card.Body>
  </Card>
    </div>
  )
}

export default MyProjects
