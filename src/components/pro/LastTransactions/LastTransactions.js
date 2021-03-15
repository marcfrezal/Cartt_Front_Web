import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './LastTransactions.css'
import { Image, Carousel } from "react-bootstrap";
import YellowCard from "../../../assets/pro/card-background/card-bg-yellow.png";
import PinkCard from "../../../assets/pro/card-background/card-bg-pink.png";

var transactions = [{ name: 'Paul Vitry', date: '27/02/2020', amount: 1235, card_background:'../../assets/card-background/card-bg-yellow.png' },
                    { name: 'Paul Vitry', date: '27/02/2020', amount: 1235, card_background:'../../assets/card-background/card-bg-pink.png' },
                    { name: 'Paul Vitry', date: '27/02/2020', amount: 1235, card_background:'../../assets/card-background/card-bg-yellow.png' },]

class LastTransactions extends React.Component {

  renderTransaction(data, index) {
    return (
          <div className="transactionBody">          
            <div  className="transactionItemRow1"> {data.name}</div>
            <div  className="transactionItemRow2">{data.date}</div>
            <div className="transactionDivider"/>
            <div className="transactionItemRow3">{data.amount}€</div>
          </div>
    )
  }

  render() {
    return (
      <Container fluid>
        <Row className='titleCol'>
         Dernières cartes vendues
        </Row>
        <Row className='bodyTransaction'>
           {transactions.map(transaction => this.renderTransaction(transaction))} 
        </Row>
      </Container>
    );
  }
}


export default LastTransactions;