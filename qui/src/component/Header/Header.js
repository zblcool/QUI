import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

const Header = (props) => {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
    <Container>
    
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Quantum OS
      </Navbar.Brand>
    </Container>
  </Navbar>    
    </div>
  )
}

export default Header
