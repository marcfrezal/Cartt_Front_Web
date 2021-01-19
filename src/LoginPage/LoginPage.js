import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './LoginPage.css';
import BlockLeft from './BlockLeft/BlockLeft';
import BlockRight from './BlockRight/BlockRight'

class Login extends React.Component {
    render() {
      return (
          <Container fluid>
              <Row className="loginRow">
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
