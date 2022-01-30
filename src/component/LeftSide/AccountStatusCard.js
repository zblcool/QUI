import React from 'react'
import { Navbar, Container, Card } from 'react-bootstrap'
import accountsImg from '../../images/Account.png'
const AccountStatusCard = (props) => {
  return (
    <div>
    <Card>
    <Card.Header className='d-flex justify-content-between'><img src={accountsImg} alt='account' width={15}></img><span>Account status</span><br/></Card.Header>
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p>
          {' '}
          Lorem ipsum dolor sit
        </p>

      </blockquote>
    </Card.Body>
  </Card>
    </div>
  )
}

export default AccountStatusCard
