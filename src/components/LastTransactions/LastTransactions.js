import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './LastTransactions.css'

var transactions = [{ name: 'Paul Vitry', date: '27/02/2020', amount: 1235 },
{ name: 'Paul Vitry', date: '27/02/2020', amount: 1235 },
{ name: 'Paul Vitry', date: '27/02/2020', amount: 1235 },]

class LastTransactions extends React.Component {

  renderTransaction(data) {
    return (
      <Col className='transaction' fluid>
        <Col>{data.name}</Col>
        <Col>{data.date}</Col>
        <Col>{data.amount}€</Col>
      </Col>
    )
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col className='titleCol'>Dernières Transactions</Col>
        </Row>
        <Row className='body'>
          {/* <Carousel data={transactions} renderItem={renderTransaction(item, index)}/> */}
          {transactions.map(transaction => this.renderTransaction(transaction))}
        </Row>
      </Container>
    );
  }
}


export default LastTransactions;