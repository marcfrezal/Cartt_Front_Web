import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PointsOfSalePage.css'
import PointOfSaleList from '../../../components/pro/PointOfSaleList/PointOfSaleList';
import Sidebar from '../../../components/common/Sidebar/Sidebar';
import Header from './Header/Header'



class PointsOfSale extends React.Component {
    render() {
      return (
          <Container fluid style={{backgroundColor :  "#f9fafd"}}>
              <Sidebar/>
              <Row>
              <Col xs={1} lg={1}></Col>
              <Col xs={11} lg={11}>
                <Header title="Mes points de ventes"/>
                <PointOfSaleList />
              </Col>
              </Row>
          </Container>
      );
    }
  }

export default PointsOfSale;
