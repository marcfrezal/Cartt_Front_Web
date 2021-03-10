import React from "react";
import './Block7.css';
import { Container, Row, Col, Image, Form } from 'react-bootstrap';
import { FaPaperPlane } from 'react-icons/fa';


class Block7 extends React.Component {
  
    render() {
      return (
          <Container className="blockContainer7" fluid>
              <Row className="row1-7">
              </Row>
              <Row className="row2-7">
                <Col className="col2-7">
                  <div className="topTitle7">On vous attends.</div>
                  <div className="title7">Rejoignez-nous!</div>
                  <div className="text7">Entrez votre adresse e-mail ci-dessous et nous vous recontacterons le plus rapidement possible! <br/> Ou alors échangeons directement sur vos besoins a l'adresse marcfrezal@epitech.eu</div>
                  <Form.Group  className="form7">
                    <Form.Control className="email7" type="email" placeholder="E-mail"/>
                    <div className="sendMail7"><FaPaperPlane className="mailIcon7"/></div>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row3-7">
                <Col className="col3-7">
                </Col>
                <Col className="col3-1-7">
                  <div className="footerText">Cartt © 2021</div>
                </Col>
              </Row>
          </Container>
      );
    }
  }

export default Block7;
