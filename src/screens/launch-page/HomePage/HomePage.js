import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './HomePage.css';
import HeadBand from "../../../components/launch-page/HeadBand/HeadBand";
import Block1 from "../../../components/launch-page/Block1/Block1"
import Block2 from "../../../components/launch-page/Block2/Block2"
import Block3 from "../../../components/launch-page/Block3/Block3"
import Block4 from "../../../components/launch-page/Block4/Block4"
import Block5 from "../../../components/launch-page/Block5/Block5"
import Block6 from "../../../components/launch-page/Block6/Block6"
import Block7 from "../../../components/launch-page/Block7/Block7"

class Home extends React.Component {
    render() {
      return (
          <Container fluid>
            <HeadBand/>
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
              <Row>
                <Block5/>
              </Row>
              <Row>
                <Block6/>
              </Row>
              <Row>
                <Block7/>
              </Row>
          </Container>
      );
    }
  }

export default Home;
