import React from "react";
import Container from 'react-bootstrap/Container';
import './Header.css'
import { Col, Row, Button } from "react-bootstrap";

class Header extends React.Component {

  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs={6} style={{backgroundColor : "red"}}>
            <div class="posHeaderTitle">{this.props.title}</div>
          </Col>
          <Col xs={6} style={{backgroundColor : "yellow"}}>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default Header;