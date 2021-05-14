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


//IMPORT COMPONENTS
import './DashboardPage.css'
import Header from '../../../components/pro/Header/Header'
import Calendary from "../../../components/pro/Calendary/Calendary"
import CardsList from "../../../components/pro/CardsList/CardsList"

class Dashboard extends React.Component {
    render() {
      return (
        <Container className="containerDashboard" fluid>
          <Sidebar/>
          <Row className="headerDashboard">
            <Col>
              <Header title="Dashboard" />
            </Col>
          </Row>
          <Row className="bodyDashboard">
            <Col md={1}/>
            <Col md={11}>
              <Container fluid>
                <Row>
                  <Col md={7}>
                    <Container>
                      <Row>
                        <CardsList/>
                      </Row>
                    </Container>
                  </Col>
                  <Col>
                    <Container fluid>
                      <Row>
                        <Calendary/>
                      </Row>
                      <Row>

                      </Row>
                    </Container>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      );
    }
  }

export default Dashboard;
