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
          <Col xs={12} sm={5} md={5} lg={3}>
            <Button
              className="float-right posHeaderAction"
              onPress={() => this.props.onPress()}
              >
              {this.props.actionTitle}
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default Header;