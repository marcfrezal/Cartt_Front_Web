import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './ForgotPassword.css';
import BlockLeft from './BlockLeft/BlockLeft';
import BlockRight from './../LoginPage/BlockRight/BlockRight'


class ForgotPassword extends React.Component {
    render() {
      return (
          <Container fluid>
              <Row className="ForgotPasswordRow">
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

export default ForgotPassword;
