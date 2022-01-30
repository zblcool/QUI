import React from 'react'
import { Navbar, Container, Card } from 'react-bootstrap'
import proejctsImg from '../../images/Projects.png'
const MyProjects = (props) => {
  return (
    <div>
    <Card>
    <Card.Header className='d-flex justify-content-between'><img src={proejctsImg} alt='projects' width={15}></img><span>My Projects</span><br/></Card.Header>
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
          erat a ante.{' '}
        </p>

      </blockquote>
    </Card.Body>
  </Card>
    </div>
  )
}

export default MyProjects
