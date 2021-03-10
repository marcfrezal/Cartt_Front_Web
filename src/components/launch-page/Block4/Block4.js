import React from "react";
import './Block4.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from "react";


class Block4 extends React.Component {
    render() {
      return (
          <Container fluid className="blockContainer4">
            <Row>
              <Col lg={6} sm={12}className="colRight4">
                <div className="topTitle4">A vous de jouer</div>
                <div className="title4">Une solution pensée pour faciliter <br/>la vie des professionels </div>
                <div className="text4">Cartt est destiné aux particuliers mais aussi et surtout aux professionels : <br/>une palette d’outils mis à votre disposition <br/>pour intégrer au mieux notre solution dans votre commerce.</div>
                <div className="btnFollow">Nous rejoindre &nbsp; ➔</div>
              </Col>
              <Col lg={6} sm={12} className="colLeft4">
                <div className="squ1-4 shadow"></div>
                <div className="squ2-4 shadow"></div>
                <div className="squ3-4 shadow"></div>
                <div className="squimg-4 "></div>
              </Col>
            </Row>
          </Container>
      );
    }
  }

  function AnimatedDecoTitle(props) {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY < 2600)
      })
    }, [])
    return (
      <div className={scroll ? "decoTitle shadow animate__animated animate__fadeOut " : "decoTitle shadow animate__animated animate__bounceInDown "}>
      </div>
    )
  }

  function AnimatedTitle(props) {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY < 2700)
      })
    }, [])
    return (
      <div className={scroll ? "title animate__animated animate__fadeOut " : "title animate__animated animate__fadeInUp "}>
        Vous êtes un professionel ?
      </div>
    )
  }

  
export default Block4;
