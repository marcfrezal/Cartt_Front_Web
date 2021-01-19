import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './LoginPage.css';
import BlockLeft from './BlockLeft/BlockLeft';
import BlockRight from './BlockRight/BlockRight'

class Login extends React.Component {
    render() {
      return (
          <Container fluid>
              <Row className="logiRow">
                <Col>
                  <BlockLeft/>
                </Col>
                <Col className="imageBack12">
                  <BlockRight />
                </Col>
              </Row>
          </Container>
      );
    }
  }

export default Login;
