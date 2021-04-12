import React from "react";
import Container from 'react-bootstrap/Container';
import './HeaderAdm.css'
import { Col, Row, Button } from "react-bootstrap";

class HeaderAdm extends React.Component {

  render() {
    return (
      <Container style={{height : "10%"}} fluid>
        <Row>
          <Col xs={12} sm={7} md={7} lg={9}>
            <div className="posHeaderTitleAdm">{this.props.title} <div className="posHeaderAdm">admin</div></div>
          </Col>
          <Col xs={12} sm={5} md={5} lg={3}>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HeaderAdm;