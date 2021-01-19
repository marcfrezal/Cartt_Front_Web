import React from "react";
import './BlockLeft.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";



class BlockLeft extends React.Component {
    render() {
      return (
          <Container className="blockLeftContainer" fluid>
             <Row className="topRowRegister">
             </Row>
             <Row>
               <Col/>
               <Col  className="titleCol">Register</Col>
               <Col/>
             </Row>
             <Row>
               <Col/>
               <Col md={8} >
                <Form.Group className="userNameCol">
                  <Form.Control type="email" placeholder="First Name" />
                </Form.Group>
               </Col>
               <Col/>
             </Row>
             <Row>
               <Col/>
                <Col md={8}>
                 <Form.Group className="userNamePassword">
                   <Form.Control type="password" placeholder="Last Name" />
                 </Form.Group>
                </Col>
               <Col/>
             </Row>
             <Row>
               <Col/>
                <Col md={8}>
                 <Form.Group className="userNamePassword">
                   <Form.Control type="password" placeholder="Email" />
                 </Form.Group>
                </Col>
               <Col/>
             </Row>
             <Row>
               <Col/>
                <Col md={8}>
                 <Form.Group className="userNamePassword">
                   <Form.Control type="password" placeholder="N° SIRET" />
                 </Form.Group>
                </Col>
               <Col/>
             </Row>
             <Row>
               <Col/>
                <Col md={8}>
                 <Form.Group className="userNamePassword">
                   <Form.Control type="password" placeholder="Company Name" />
                 </Form.Group>
                </Col>
               <Col/>
             </Row>
             <Row>
               <Col/>
                <Col md={8}>
                 <Form.Group className="userNamePassword">
                   <Form.Control type="password" placeholder="Password" />
                 </Form.Group>
                </Col>
               <Col/>
             </Row>
             <Row>
               <Col/>
                <Col md={8}>
                 <Form.Group className="userNamePassword">
                   <Form.Control type="password" placeholder="Repeat Password" />
                 </Form.Group>
                </Col>
               <Col/>
             </Row>
             <Row>
               <Col/>
               <Col md={4} className="rememberCol">
                Remember me
               </Col>
               <Col md={4} className="forgetCol" >Forgot password ?</Col>
               <Col/>
             </Row>
             <Row >
               <Col/>
               <Col md={8} className="btnCol">
                <Button className="registerBtn">Register</Button>
               </Col>
               <Col/>
             </Row>
             <Row>
               <Col/>
               <Col md={8} className="signInCol"><a href="/register" className="signInLink">Retourner sur le site</a></Col>
               <Col/>
             </Row>
          </Container>
      );
    }
  }

export default BlockLeft;
