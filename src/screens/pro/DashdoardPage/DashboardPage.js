import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SalesHistory from '../../../components/SalesHistory/SalesHistory'
import MounthlyNumbers from '../../../components/MounthlyNumbers/MounthlyNumbers'
import LastTransactions from '../../../components/LastTransactions/LastTransactions'
import Growth from '../../../components/Growth/Growth'
// import HeadBand from "./HeadBand/HeadBand";
import './DashboardPage.css'
import Header from "../../../components/Header/Header";

class Dashboard extends React.Component {
    render() {
      return (
          <Container fluid>
              <Header title="Dashboard"/>
            <Row className='topRow'>
              <Col  className='topRowLeftColumn'>
                <LastTransactions/>
              </Col>
              <Col className='topRowRightColumn'>
                <MounthlyNumbers/>
              </Col>
            </Row>
            <Row className='bottomRow'>
              <Col className='bottomLeftCol'>
                <SalesHistory/>
              </Col>
              <Col className='bottomRightCol'>
                <Growth/>
              </Col>
            </Row>
          </Container>
      );
    }
  }

export default Dashboard;
