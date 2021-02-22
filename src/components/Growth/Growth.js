import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Growth.css'

// var transactions = [{ name: 'Paul Vitry', date: '27/02/2020', amount: 1235 },
// { name: 'Paul Vitry', date: '27/02/2020', amount: 1235 },
// { name: 'Paul Vitry', date: '27/02/2020', amount: 1235 },]


function renderTransaction(data) {
  return (
    <Col className='transaction' fluid>
      <Col>{data.name}</Col>
      <Col>{data.date}</Col>
      <Col>{data.amount}€</Col>
    </Col>
  )
}

class Growth extends React.Component {

  render() {
    return (
      <Container className="blockLeftContainer" fluid>
        <Row>
          <Col className='titleCol'>Croissance</Col>
        </Row>
        <Row className='body'>

        </Row>
      </Container>
    );
  }
}


export default Growth;