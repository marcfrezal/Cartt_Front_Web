import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Growth.css'

class Growth extends React.Component {

  render() {
    return (
      <Container className="blockLeftContainer" fluid>
        <Row>
          <Col className='titleCol'>Croissance</Col>
        </Row>
        <Row className='body'>

        </Row>
      </Container>
    );
  }
}


export default Growth;