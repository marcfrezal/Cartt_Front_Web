import React from "react";
import './Block1.css';
import { Container, Row, Col, Image} from 'react-bootstrap';
import Central from '../../../assets/common/Cartt.png'
import { useState, useEffect } from "react";


/*
class Block1 extends React.Component {
    render() {
      return (
          <Container fluid>
             <Row className="imageBack1">
               <Col className="text1 animate__animated animate__fadeInLeft">
                  <div className="text1-1">Découvrez une nouvelle <br/>façon d'offrir...</div>
                  <div className="text1-2">Faites plaisir à votre entourage en leur offrant les cartes cadeaux de vos enseignes préférées en seulement quelques minutes!</div>
                  <Image src={Stores} className="storesLogo"></Image>
               </Col>
               <Col ></Col>
             </Row>
          </Container>
      );
    }
  }
        <div className="squ1-homepage shadow"></div>  
            <div className="squ2 "></div>
*/

class Block1 extends React.Component {
  render() {
    return (
      <Container className="backGroundBlock1" fluid>
        <Image src={Central} className="centralHomePage"></Image>
        <div className="squ1-homepage shadow"></div>
        <div className="squ2-homepage shadow"></div>
        <div className="squ3-homepage shadow"></div>
        <div className="squ4-homepage shadow"></div>
        <div className="squ5-homepage shadow"></div>
      </Container>
    );
  }
}

export default Block1;
