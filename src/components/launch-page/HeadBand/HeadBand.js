import React from "react";
import './HeadBand.css';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import Cartt from '../../../assets/common/Cartt.png';
import { Link } from "react-router-dom";
import { FaUnlockAlt } from 'react-icons/fa';



class HeadBand extends React.Component {

    render() {
      return (
          <Container className="headBandContainer">
             <Row>
              <Col className="colNav">
                <div className="mainNav shadow"></div>
              </Col>
              <Col>
                <div className="logNav shadow"><Link to="/login" className="round1"><div className="round2"><FaUnlockAlt className="logIcon"/></div></Link></div>
              </Col>
             </Row>
          </Container>
      );
    }
}

export default HeadBand;
