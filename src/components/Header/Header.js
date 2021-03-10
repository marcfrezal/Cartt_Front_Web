import React from "react";
import Container from 'react-bootstrap/Container';
import './Header.css'
import { Col, Row, Button } from "react-bootstrap";

class Header extends React.Component {

  render() {
    return (
      <Container fluid>
        <Row>
          <Col sm={8} md={9} class="headerTitle">
            {this.props.title}
          </Col>
          <Col sm={6} md={3} style={{backgroundColor: 'grey'}}>
            <Button title="créer un point de vente" className="createPos"/>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default Header;