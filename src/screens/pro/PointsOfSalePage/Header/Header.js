import React from "react";
import Container from 'react-bootstrap/Container';
import './Header.css'
import { Col, Row } from "react-bootstrap";

class Header extends React.Component {

  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={9}>
            <div class="headerTitle">{this.props.title}</div>
          </Col>
          <Col md={3} style={{backgroundColor: 'grey'}}>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default Header;