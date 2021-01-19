import React from "react";
import './BlockRight.css';
import { Container, Row, Col, Image} from 'react-bootstrap';


class BlockRight extends React.Component {
    render() {
      return (
          <Container fluid >
             <Row>
               <Col>Right</Col>
             </Row>
          </Container>
      );
    }
  }

export default BlockRight;
