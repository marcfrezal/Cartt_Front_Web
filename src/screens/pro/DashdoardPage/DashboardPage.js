import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SalesHistory from '../../../components/pro/SalesHistory/SalesHistory';
import Sidebar from '../../../components/common/Sidebar/Sidebar';
import MounthlyNumbers from '../../../components/pro/MounthlyNumbers/MounthlyNumbers'
import LastTransactions from '../../../components/pro/LastTransactions/LastTransactions'
import Growth from '../../../components/pro/Growth/Growth'
// import HeadBand from "./HeadBand/HeadBand";
import './DashboardPage.css'

class Dashboard extends React.Component {
    render() {
      return (
          <Container fluid>
            <Sidebar/>
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
