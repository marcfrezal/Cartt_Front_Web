import { Container } from "react-bootstrap";
import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './DashboardManagement.css';
import MounthlyNumbers from "../../pro/MounthlyNumbers/MounthlyNumbers";
import LastTransactions from "../../pro/LastTransactions/LastTransactions";
import SalesHistory from "../../pro/SalesHistory/SalesHistory";



const Dashboard = (props) => {
  if (props && props.stores.length !== undefined ) {
    console.log(props)
    return (
      <div>
        <Container>
          <Row>
            <Col md={6}>
              <div className="shadow admin-infoStoreEnseignCard">
                <div className="admin-infosStoreEnsigneCenter">
                  <div className="admin-infosItemTitle">Marques</div>
                  <div className="admin-infosItemNumber">{props.brands.length}</div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="shadow admin-infoStoreEnseignCard">
                <div className="admin-infosStoreEnsigneCenter">
                  <div className="admin-infosItemTitle">Points de vente</div>
                  <div className="admin-infosItemNumber">{props.stores.length}</div>
                </div>
              </div>

            </Col>
          </Row>
          <Row>
            <MounthlyNumbers />
            <SalesHistory />
            <LastTransactions />

          </Row>
        </Container>      
        </div>
    )
  } else {
    return (
      <div className="errorContainerStoreList">
        <p>Veuillez sélectionner une marque ayant des points de vente.</p>
      </div>
    )
  }
};


class DashboardManagement extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container fluid className="DashboardAdmContainer shadow">
        <Row style={{ width: "100%" }}>
          <Dashboard stores={this.props.stores} brands={this.props.brands}/>
        </Row>

      </Container>
    );
  }
}

export default DashboardManagement;