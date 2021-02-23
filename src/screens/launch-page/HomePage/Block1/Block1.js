import React from "react";
import './Block1.css';
import { Container, Row, Col, Image} from 'react-bootstrap';
import Stores from '../../../../assets/launch-page/stores-logo.png'


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

export default Block1;
