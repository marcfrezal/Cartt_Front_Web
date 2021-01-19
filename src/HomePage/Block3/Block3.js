import { useState, useEffect } from "react";
import React from "react";
import './Block3.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Stores from '../../draw-1.png'
import Draw2 from '../../draw-2.png'
import Draw3 from '../../draw-3.png'



class Block3 extends React.Component {
  
    render() {
      return (
          <Container fluid className="blockContainer3">
            <Row style={{ height : "33%"}}>
              <AnimatedIcon1/>
              <AnimatedText1/>
            </Row>
            <Row style={{height : "33%"}}>
              <AnimatedText2/>
              <AnimatedIcon2/>
            </Row>
            <Row style={{ height : "33%"}}>
              <AnimatedIcon3/>
              <AnimatedText3/>
            </Row>
          </Container>
      );
    }
  }

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
  }
export default Block3;
