import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SalesHistory from '../../../components/pro/SalesHistory/SalesHistory';
import SidebarAdm from '../../../components/common/SidebarAdmin/SidebarAdm';
import MounthlyNumbers from '../../../components/pro/MounthlyNumbers/MounthlyNumbers'
import LastTransactions from '../../../components/pro/LastTransactions/LastTransactions'
import Growth from '../../../components/pro/Growth/Growth'
import './DashboardPage.css'
import Header from '../../../components/admin/Header/HeaderAdm'

class Dashboard extends React.Component {
    render() {
      return (
        <Container className="containerDashboard" fluid>
          <SidebarAdm/>
          <Row className="headerDashboard">
            <Col>
              <Header title="Dashboard" />
            </Col>
          </Row>
          <Row className="rowDashboard1">
            <Col sm={12} md={6} lg={6}>
              <LastTransactions/>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <MounthlyNumbers/>
            </Col>
          </Row>
          <Row className="rowDashboard2">
            <Col sm={12} md={6} lg={6}>
              <Growth/>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <SalesHistory/>
            </Col>
          </Row>
        </Container>
      );
    }
  }

export default Dashboard;
