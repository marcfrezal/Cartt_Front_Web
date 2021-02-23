import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SalesHistory from '../../../components/pro/SalesHistory/SalesHistory';
import Sidebar from '../../../components/common/Sidebar/Sidebar';
import './DashboardPage.css'

class Dashboard extends React.Component {
    render() {
      return (
          <Container fluid>
            <Sidebar/>
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
