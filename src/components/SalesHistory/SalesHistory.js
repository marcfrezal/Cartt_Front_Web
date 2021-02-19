import React from "react";

// import {StyleSheet} from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

var transactions = [{name: 'Paul Vitry', date:'27/02/2020', amount: 1235},
                    {name: 'Paul Vitry', date:'27/02/2020', amount: 1235},
                    {name: 'Paul Vitry', date:'27/02/2020', amount: 1235}, ]



function getItem (data) {
  return (
      <Container style={{backgroundColor: '#C4C4C4', marginBottom: 5, height: 55, borderRadius: 5}} fluid>
        <Row style={{justifyContent:'center', alignItems: 'center',}}>
          <Col style={{flex:3, alignSelf: 'center',  fontSize:20}}>{data.name}</Col>
          <Col style={{flex:3,fontSize: 20}}>{data.date}</Col>
          <Col style={{flex:1,fontSize: 20, alignContent:'flex-end'}}>{data.amount}€</Col>
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

  // styles = StyleSheet.create({
  //   item: {

  //   },
  // })
  // function fetchTransactions() {
  //   response = fetch("").then()
  // }

export default SalesHistory;




