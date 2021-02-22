import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PointsOfSalePage.css'

class PointsOfSale extends React.Component {
    render() {
      return (
          <Container fluid>
            <Row className='topRow'>
              <Col>
                ICI C'EST PARIS!!
              </Col>
            </Row>
          </Container>
      );
    }
  }

export default PointsOfSale;
