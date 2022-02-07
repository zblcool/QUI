import React from 'react'
import { Navbar, Container, Card } from 'react-bootstrap'
import accountsImg from '../../images/Account.png'
import accountsPlaceholder from '../../images/placeholders/account.png'
const AccountStatusCard = (props) => {
  return (
    <div>
    <Card>
    <Card.Header className='d-flex justify-content-between'><img src={accountsImg} alt='account' width={15}></img><span>Account status</span><br/></Card.Header>
    <Card.Body>
      <blockquote className="blockquote mb-0">
      <img src={accountsPlaceholder} alt='account' width={120}></img>

      </blockquote>
    </Card.Body>
  </Card>
    </div>
  )
}

export default AccountStatusCard
