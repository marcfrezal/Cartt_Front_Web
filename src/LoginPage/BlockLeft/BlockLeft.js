import React from "react";
import './BlockLeft.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Checkbox from '@material-ui/core/Checkbox';


class BlockLeft extends React.Component {
    render() {
      return (
          <Container className="blockLeftContainer" fluid>
             <Row className="topRow">
             </Row>
             <Row>
               <Col/>
               <Col  className="titleCol">Login</Col>
               <Col/>
             </Row>
             <Row>
               <Col/>
               <Col md={8} >
                <Form.Group className="userNameCol">
                  <Form.Control type="email" placeholder="Username or email" />
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
               <Col md={4} className="rememberCol">
                Remember me
               </Col>
               <Col md={4} className="forgetCol" >Forgot password ?</Col>
               <Col/>
             </Row>
             <Row >
               <Col/>
               <Col md={8} className="btnCol">
                <Button className="loginBtn">Login</Button>
               </Col>
               <Col/>
             </Row>
             <Row>
               <Col/>
               <Col md={8} className="signInCol" > <div className="signInText">Nouveau ?</div> <div className="signInLink">Inscrivez vous</div></Col>
               <Col/>
             </Row>
          </Container>
      );
    }
  }

export default BlockLeft;
