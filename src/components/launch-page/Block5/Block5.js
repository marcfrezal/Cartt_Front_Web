import React from "react";
import './Block5.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaLinkedin} from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';


class Block5 extends React.Component {
  
    render() {
      return (
          <Container className="blockContainer5" fluid>
              <Row>
                <Col lg={6} sm={12} className="colLeft5">
                    <div className="topTitle5">Bonjour, enchanté.</div>
                    <div className="title5">Une équipe soudée et dynamique. </div>
                    <div className="text5">Derrière l’aventure Cartt se cache 7 collaborateurs issue de la formation EPITECH. Motivé et l’écoute, nous saurons vous accompagner et vous aider dans l’apprentissage de votre solution.</div>
                    <div className="followUs"></div>
                    <FaLinkedin className="linkedinIcon"/>
                    <FaFacebook className="facebookIcon"/>
                    <FaInstagram className="instagramIcon"/>
                </Col>
                <Col lg={6} sm={12} className="colRight5">
                    <div className="divFlo shadow"><div className="flo">Florian Marcon</div></div>
                    <div className="divArthur shadow"><div className="flo">Arthur DeRosny</div></div>
                    <div className="divMarc shadow"><div className="flo">Marc Frezal</div></div>
                    <div className="divPaul shadow"><div className="flo">Paul Vitry</div></div>
                    <div className="divTais shadow"><div className="flo">Tais Laaraj</div></div>
                    <div className="divMat shadow"><div className="flo">Mathieu Vacance</div></div>
                    <div className="divRaph shadow"><div className="flo">Raphael Gianonne</div></div>
                </Col>
              </Row>

          </Container>
      );
    }
  }

export default Block5;
