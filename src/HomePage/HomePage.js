import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './HomePage.css';
import HeadBand from "./HeadBand/HeadBand";
import Block1 from "./Block1/Block1"
import Block2 from "./Block2/Block2"
import Block3 from "./Block3/Block3"
import Block4 from "./Block4/Block4"
import SalesHistory from "./../components/SalesHistory"

class Home extends React.Component {
    render() {
      return (
          <Container fluid>
              <Row>
                <HeadBand/>
              </Row>
              <Row>
                <SalesHistory/>
              </Row>
              <Row>
                <Block1/>
              </Row>
              <Row>
                <Block2/>
              </Row>
              <Row>
                <Block3/>
              </Row>
              <Row>
                <Block4/>
              </Row>
          </Container>
      );
    }
  }

export default Home;
