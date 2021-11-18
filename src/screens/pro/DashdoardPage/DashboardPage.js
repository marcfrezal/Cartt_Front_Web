import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Line } from 'react-chartjs-2';
import Sidebar from '../../../components/common/Sidebar/Sidebar';
// import HeadBand from "./HeadBand/HeadBand";


//IMPORT COMPONENTS
import './DashboardPage.css'
import Header from '../../../components/pro/Header/Header'
import Calendary from "../../../components/pro/Calendary/Calendary"
import CardsList from "../../../components/pro/CardsList/CardsList"
import Chart from "../../../components/pro/Chart/Chart"


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
                      <Row style={{display : "flex", justifyContent : "center", height : "47vh", alignItems : "center"}}>
                        <Chart/>
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
