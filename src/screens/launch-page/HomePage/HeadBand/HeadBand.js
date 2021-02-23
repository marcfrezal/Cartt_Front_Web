import React from "react";
import './HeadBand.css';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import Cartt from '../../../../assets/common/Cartt.png';
import { Link } from "react-router-dom";

class HeadBand extends React.Component {

    render() {
      return (
          <Container fluid className="headBandContainer">
             <Row className="headBandRow">
                <Col lg={3} md={2} sm={4} xs={4}>
                  <Image src={Cartt} className="logoHeadBand"/>
                </Col>
                <Col className="headBandNav">
                  <Link to="/" className="headBandNavText">Acceuil</Link>
                </Col>
                <Col className="headBandNav">
                  <Link to="/login" className="headBandNavText">L'application</Link>
                </Col>
                <Col className="headBandNav">
                  <Link to="/register" className="headBandNavText">Nos Enseignes</Link>
                </Col>
                <Col className="headBandNav">
                  <Link to="/blog" className="headBandNavText">Blog</Link>
                </Col>
                <Col lg={2} md={2} sm={2} xs={2} className="colButtons">
                  <div  className="logButon">
                    <Link to="/login" className="logLink">Connexion</Link>
                  </div>
                </Col>
             </Row>
          </Container>
      );
    }
}

export default HeadBand;
