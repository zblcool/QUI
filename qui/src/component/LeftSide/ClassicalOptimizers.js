import React from 'react'
import { Navbar, Container, Card } from 'react-bootstrap'

const ClassicalOptimizers = (props) => {
  return (
    <div>
    <Card>
    <Card.Header>Quote</Card.Header>
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