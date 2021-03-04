import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PointsOfSalePage.css'
import { Button } from "react-bootstrap";
import PointOfSaleList from '../../../components/pro/PointOfSaleList/PointOfSaleList';
import SearchBar from '../../../components/pro/SearchBar/SearchBar';
import Sidebar from '../../../components/common/Sidebar/Sidebar';


var border = 2;
var body = 8

class PointsOfSale extends React.Component {
    render() {
      return (
          <Container fluid style={{backgroundColor :  "#f9fafd"}}>
            <Sidebar/>
            <Row >
            <Col xs={border}/>
            <Col xs={body} >
              <Row className="head"/>
              <Row className='posTopRow'>
                  <Col xs={10} className="posTitle">
                    Mes Points de ventes
                  </Col>
                  <Col xs={2} className >
                    <Button variant="primary"
                      style={{marginTop: 10}}>
                      CREER UN PDV
                    </Button>
                  </Col>
              </Row>
              <Row className='searchRow'>
                <SearchBar/>
              </Row>
              <Row className='bodyRow'>
                <Col>
                  <PointOfSaleList/>
                </Col>
              </Row>
            </Col>
            <Col xs={border}/>
            </Row>
          </Container>
      );
    }
  }

export default PointsOfSale;
