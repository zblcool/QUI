import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import logo from '../../images/icon6.png'
import icon1 from '../../images/icon1.png'
import icon2 from '../../images/icon2.png'
import icon3 from '../../images/icon3.png'
import icon4 from '../../images/icon4.png'
import icon5 from '../../images/icon5.png'

const Header = (props) => {
  return (
    <div>
    <Navbar bg="dark" variant="dark" className='custom-nav-bar'>
    <Container className='d-flex justify-content-between'>
    
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}

          height="30"
          className="d-inline-block align-top"
        />{' '}
        Quantum OS
      </Navbar.Brand>
      <div>imgs</div>
      <div>Qubits in use:36</div>
      <div>Gate Count:1359</div>
      <div>Run-time(est.):56s</div>
      <div>
        <img src={icon4} alt='wifi'  height="30"></img>
      </div>
    </Container>
  </Navbar>    
    </div>
  )
}

export default Header
