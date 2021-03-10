import { useState, useEffect } from "react";
import React from "react";
import './Block3.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Stores from '../../../assets/launch-page/draw-1.png'
import Draw2 from '../../../assets/launch-page/draw-2.png'
import Draw3 from '../../../assets/launch-page/draw-3.png'
import { FaSearch } from 'react-icons/fa';
import { FaGift } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';


class Block3 extends React.Component {
    render() {
      return (
          <Container fluid className="blockContainer3-1">
            <Row className="blockRow3-1">
              <Col>
                <Row className="blockRow3-1-1">Pourquoi nous?</Row>
                <Row className="blockRow3-1-2">Pratique, Simple, Rapide.</Row>
                <Row className="blockRow3-1-3">Cartt est une application mobile  vous permettant d’acheter, <br/>d’offrir et de dépenser des cartes cadeaux d’une manière intuitive, rapide et facile. </Row>
              </Col>
            </Row>
            <Row className="blockRow3-2 ">
                <Col sm={12} lg={4} className="myCardCol">
                  <AnimatedCardExplore/>
                </Col>
                <Col sm={12} lg={4}className="myCardCol">
                  <AnimatedCardChoose/>
                </Col>
                <Col sm={12} lg={4}className="myCardCol">
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
        setScroll(window.scrollY < 200)
      })
    }, [])
    return (
      <Container className={scroll ? "myCard-end animate__animated animate__fadeOut " : "myCard-end animate__animated animate__fadeInUp animate__slow"}>
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
        setScroll(window.scrollY < 200)
      })
    }, [])
    return (
      <Container className={scroll ? "myCard-end animate__animated animate__fadeOut animate__delay-5s" : "myCard-end animate__animated animate__fadeInUp animate__slow"}>
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
        setScroll(window.scrollY < 200)
      })
    }, [])
    return (
      <Container className={scroll ? "myCard-end animate__animated animate__fadeOut animate__delay-5s" : "myCard-end animate__animated animate__fadeInUp animate__slow"}>
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
  
/*
  function AnimatedIcon1(props) {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
      window.addEventListener("scroll", () => {
        //setScroll(window.scrollY < 1200)
      })
    }, [])
    return (
      <Col className={scroll ? "animate__animated animate__fadeOut " : "animate__animated animate__pulse animate__delay-1s"} style={{ display : "flex", justifyContent : "center"}} >
        <Image src={Stores} className="img1"></Image>
      </Col>
    )
  }

  function AnimatedIcon2(props) {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
      window.addEventListener("scroll", () => {
        //setScroll(window.scrollY < 1500)
      })
    }, [])
    return (
      <Col className={scroll ? "animate__animated animate__fadeOut " : "animate__animated animate__pulse animate__delay-1s"} style={{ display : "flex", justifyContent : "center"}} >
        <Image src={Draw2} className="img2"></Image>
      </Col>
    )
  }

  function AnimatedIcon3(props) {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
      window.addEventListener("scroll", () => {
       // setScroll(window.scrollY < 2000)
      })
    }, [])
    return (
      <Col className={scroll ? "animate__animated animate__fadeOut " : "animate__animated animate__pulse animate__delay-1s"} style={{ display : "flex", justifyContent : "center"}} >
          <Image src={Draw3} className="img3"></Image>
      </Col>
    )
  }

  function AnimatedText1(props) {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY < 1200)
      })
    }, [])
    return (
      <Col className={scroll ? "animate__animated animate__fadeOut " : "animate__animated animate__fadeInRight"}>
           <div className="animatedTitle1">Fini les cartes papiers, vive la planète!</div>
           <div className="animatedDiv1 shadow"></div>
           <div className="animatedText1">Terminer les cartes papiers que l'on doit aller chercher soit-meme, emballer, ne pas abimer...<br/> Procurerez vous la carte de votre choix directement sur votre smartphone et offrez la en quelques minutes!</div>
      </Col>
    )
  }

  function AnimatedText2(props) {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY < 1600)
      })
    }, [])
    return (
      <Col className={scroll ? "animate__animated animate__fadeOut " : "animate__animated animate__fadeInLeft"}>
        <div className="animatedTitle2">Personnalisez vos cartes simplement en quelques secondes</div>
        <div className="animatedDiv2 shadow"></div>
        <div className="animatedText2">Grace à notre interface de personnalisation simple et intuitive, <br/>rendez vos cartes à votre image afin d'offrir quelque chosequi vous ressemble!</div>
      </Col>
    )
  }

  function AnimatedText3(props) {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY < 2000)
      })
    }, [])
    return (
      <Col className={scroll ? "animate__animated animate__fadeOut " : "animate__animated animate__fadeInRight"}>
                <div className="animatedTitle3">Dépensez <br/> de manière simple et efficace</div>
                <div className="animatedDiv3 shadow"></div>
                <div className="animatedText3"> Recevez votre carte cadeau directement sur votre téléphone, présentez-la au commerçant lors de vos achats, il scanne et hop! Le tour est joué!</div>      
      </Col>
    )
  }*/
export default Block3;
