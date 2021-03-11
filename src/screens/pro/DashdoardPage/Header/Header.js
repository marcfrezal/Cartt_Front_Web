import React from "react";
import Container from 'react-bootstrap/Container';
import './Header.css'
import { Col, Row, Button } from "react-bootstrap";

class Header extends React.Component {

  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs={12} sm={7} md={7} lg={9}>
          <div class="HeaderTitle">{this.props.title}</div>
          </Col>
          <Col xs={12} sm={5} md={5} lg={3} style={{backgroundColor: 'grey'}}>
            <Button title="Séléctionné un pdv" className="createPos"/>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default Header;