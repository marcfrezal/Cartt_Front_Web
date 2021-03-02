import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PointsOfSalePage.css'
import { Button } from "react-bootstrap";
import PointOfSaleList from '../../../components/pro/PointOfSaleList/PointOfSaleList';
import SearchBar from '../../../components/pro/SearchBar/SearchBar';
import Sidebar from '../../../components/common/Sidebar/Sidebar';


// border * 2 + body must eq 12
var border = 2;
var body = 8

class PointsOfSale extends React.Component {
    render() {
      return (
          <Container fluid style={{backgroundColor :  "#f9fafd"}}>
            <Sidebar/>
            <Row>
            <Col xs={border}/>
            <Col xs={body} >
              <Row className="head"/>
              <Row className='actionBar'>
                  <Col xs={10}/>
                  <Col xs={1}>
                  <Button variant="primary">CREATE</Button>
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
