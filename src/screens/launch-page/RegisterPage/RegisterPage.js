import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './RegisterPage.css';
import BlockLeft from './BlockLeft/BlockLeft';
import BlockRight from './BlockRight/BlockRight'

class Login extends React.Component {
    render() {
      return (
          <Container fluid>
              <Row className="registerRow">
                <Col>
                  <BlockLeft/>
                </Col>
                <Col className="imageBack11">
                  <BlockRight />
                </Col>
              </Row>
          </Container>
      );
    }
  }

export default Login;
