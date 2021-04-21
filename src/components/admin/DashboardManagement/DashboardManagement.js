import { Container } from "react-bootstrap";
import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './DashboardManagement.css';
import MounthlyNumbers from "../../pro/MounthlyNumbers/MounthlyNumbers";
import LastTransactions from "../../pro/LastTransactions/LastTransactions";
import SalesHistory from "../../pro/SalesHistory/SalesHistory";


class DashboardManagement extends React.Component {

    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <Container fluid className="DashboardAdmContainer shadow">
          <Row style={{width : "100%"}}>
                <MounthlyNumbers/>
                <SalesHistory/>
                <LastTransactions/>
          </Row>
          
        </Container>
      );
    }
  }

  export default DashboardManagement;