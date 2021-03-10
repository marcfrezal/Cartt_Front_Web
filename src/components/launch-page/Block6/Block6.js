import React from "react";
import './Block6.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaLinkedin} from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';


class Block5 extends React.Component {
  
    render() {
      return (
          <Container className="blockContainer6" fluid>
              <Row>
              <Col lg={6} sm={12} className="colLeft4">
                <div className="squ1-6 shadow"></div>
                <div className="squ2-6 shadow"></div>
                <div className="squ3-6 shadow"></div>
                <div className="squimg-6 "></div>
              </Col>
              <Col lg={6} sm={12}className="colRight6">
                <div className="topTitle6">La solution de demain.</div>
                <div className="title6">Terminé les cartes papiers, optez pour le futur.</div>
                <div className="text6">Cartt est la solution de demain, finis de vous encombrer avec les cartes papiers, <br/>choisissez votre carte digitale, personnalisez la, <br/>et offre là en seulement quelques secondes!</div>
              </Col>
              </Row>
          </Container>
      );
    }
  }

export default Block5;
