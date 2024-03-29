import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './MounthlyNumbers.css'

var numbers = { new_customers: 90, transactions: 90, total_ca: 4500 }

class MounthlyNumbers extends React.Component {

  render() {
    return (
      <Container className="mnContainer" fluid>
        <Row>
          <Col className='mnTitle'>Chiffres du mois</Col>
        </Row>
        <Row className='body'>
          <Col md={4}>
            <Row className='number'>{numbers.new_customers}</Row>
            <Row className='category'>Nouveaux Clients</Row>
          </Col>
          <Col md={4}>
            <Row className='number'>{numbers.transactions}</Row>
            <Row className='category'>Transactions</Row>
          </Col>
          <Col md={4}>
            <Row className='number'>{numbers.total_ca}</Row>
            <Row className='category'>Total CA</Row>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default MounthlyNumbers;