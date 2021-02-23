import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
<<<<<<< HEAD
import SalesHistory from '../../../components/pro/SalesHistory/SalesHistory';
import Sidebar from '../../../components/common/Sidebar/Sidebar';
=======
import SalesHistory from '../../../components/SalesHistory/SalesHistory'
import MounthlyNumbers from '../../../components/MounthlyNumbers/MounthlyNumbers'
import LastTransactions from '../../../components/LastTransactions/LastTransactions'
import Growth from '../../../components/Growth/Growth'
// import HeadBand from "./HeadBand/HeadBand";
>>>>>>> f6640211303cd63e144976a08f36bf79d0beb5a4
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
