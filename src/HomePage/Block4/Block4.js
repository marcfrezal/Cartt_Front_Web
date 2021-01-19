import React from "react";
import './Block4.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from "react";


class Block4 extends React.Component {
    render() {
      return (
          <Container className="blockContainer4" fluid>
             <Row className="rowTitle">
               <Col>
                 <AnimatedTitle/>
                 <AnimatedDecoTitle/>
               </Col>
             </Row>
             <Row>
               <Col style={{display : "flex", justifyContent : "center"}}>
                 <div className="colCard shadow">
                   <p className="text" >Vous etes gérant d'une magasin? Propriétaire d'un commerce? Rejoignez-nous afin de profiter de notre offre dédié aux professionels. Une plateforme simple d'utilisation vous permettant de bénéficier d'un système de cartes cadeaux propre à votre enseigne!</p>
                   <p className="link" > Découvrir l'application ➜</p>
                 </div>
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
