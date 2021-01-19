import { useState, useEffect } from "react";
import React from "react";
import './Block2.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { FaGift } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';



class Block2 extends React.Component {
  
    render() {
      return (
          <Container fluid className="blockContainer ">
             <Row style={{backgroundColor : "transparent", height : "100vh"}}>
              <Col className="myCardCol">
                <AnimatedCardExplore/>
               </Col>
               <Col className="myCardCol">
                <AnimatedCardChoose/>
               </Col>
               <Col className="myCardCol">
                <AnimatedCardOffer/>
               </Col>
             </Row>
          </Container>
      );
    }
  }

  function AnimatedCardExplore(props) {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY < 20)
      })
    }, [])
    return (
      <Container className={scroll ? "myCard-end shadow animate__animated animate__fadeOut " : "myCard-end shadow animate__animated animate__fadeInUp animate__slow"}>
      <Row className="rowIcon">
        <Col className="colIcon">
          <div className="roundedIcon shadow"> 
            <FaSearch className="searchIcon"/>
          </div>
        </Col>
      </Row>
      <Row className="rowTitle">
        <Col className="colTitle"> 
          Explorer...
        </Col>
      </Row>
      <Row className="rowText">
        <Col className="colText">
          Parcourez notre catalogue d'enseignes et de marques afin de trouver celle qui pourra combler vos envies... Il y en a pour tout les gouts!
        </Col>
      </Row>
      </Container>
    )
  }

  function AnimatedCardChoose(props) {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY < 100)
      })
    }, [])
    return (
      <Container className={scroll ? "myCard-end shadow animate__animated animate__fadeOut animate__delay-5s" : "myCard-end shadow animate__animated animate__fadeInUp animate__slow"}>
      <Row className="rowIcon">
        <Col className="colIcon">
          <div className="roundedIcon shadow">
            <FaHeart className="chooseIcon"/>
          </div>
        </Col>
      </Row>
      <Row className="rowTitle">
        <Col className="colTitle"> 
          Choisir...
        </Col>
      </Row>
      <Row className="rowText">
        <Col className="colText">
          Une fois la perle rare trouvée, rendez-vous sur son espace Cartt afin de voir ce qu'elle a à vous offrir!
        </Col>
      </Row>
    </Container>
    )
  }

  function AnimatedCardOffer(props) {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY < 150)
      })
    }, [])
    return (
      <Container className={scroll ? "myCard-end shadow animate__animated animate__fadeOut animate__delay-5s" : "myCard-end shadow animate__animated animate__fadeInUp animate__slow"}>
      <Row className="rowIcon">
        <Col className="colIcon">
          <div className="roundedIcon shadow">
            <FaGift className="offerIcon"/>
          </div>
        </Col>
      </Row>
      <Row className="rowTitle">
        <Col className="colTitle"> 
          Offrir!
        </Col>
      </Row>
      <Row className="rowText">
        <Col className="colText">
          Votre choix est fait? Parfait! Il ne vous reste plus qu'a l'offrir à la personne de votre choix directement depuis votre compte Cartt!
        </Col>
      </Row>
    </Container>
    )
  }

export default Block2;
