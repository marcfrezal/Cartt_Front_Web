import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SalesHistory.css';

var transactions = [{name: 'Paul Vitry', date:'27/02/2020', amount: 1235},
                    {name: 'Paul Vitry', date:'27/02/2020', amount: 1235},
                    {name: 'Paul Vitry', date:'27/02/2020', amount: 1235}, ]



function getItem (data) {
  return (
      <Container className='itemContainer' fluid>
        <Row>
          <Col className='text'>{data.name}</Col>
          <Col className='text'>{data.date}</Col>
          <Col className='text'>{data.amount}€</Col>
        </Row>
      </Container>  
  )
}

class SalesHistory extends React.Component {

    render() {
      return (
          <Container className="blockLeftContainer" fluid>
              <Row>
                <Col className='titleCol'>Historique des transactions</Col>
              </Row>
              <Row>
                {transactions.map(transaction => getItem(transaction))}
              </Row>
          </Container>
      );
    }
  }

export default SalesHistory;




