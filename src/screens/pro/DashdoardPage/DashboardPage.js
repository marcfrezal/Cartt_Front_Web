import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SalesHistory from '../../../components/SalesHistory/SalesHistory'
// import HeadBand from "./HeadBand/HeadBand";
import './DashboardPage.css'

class Dashboard extends React.Component {
    render() {
      return (
          <Container fluid>
            <Row className='topRow'>
              <Col  className='topRowLeftColumn'>
              Derniere transactions
              </Col>
              <Col className='topRowRightColumn'>
              les chiffre du mois 
              </Col>
            </Row>
            <Row className='bottomRow'>
              <Col className='bottomLeftCol'>
                <SalesHistory/>
              </Col>
              <Col className='bottomRightCol'>
                Graphique
              </Col>
            </Row>
          </Container>
      );
    }
  }

export default Dashboard;
