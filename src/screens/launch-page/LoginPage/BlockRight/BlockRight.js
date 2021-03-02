import React from "react";
import './BlockRight.css';
import { Container, Row, Col, Image} from 'react-bootstrap';


class BlockRight extends React.Component {
    render() {
      return (
          <Container>
             <Row>
                <div className="squ1 "></div>  
                <div className="squ2 "></div>
                <div className="squ3 "></div>  
                <div className="squ4 "></div>
                <div className="squ1-1 "></div>  
                <div className="squ2-2 "></div>
                <div className="squ3-3 "></div>  
                <div className="squ4-4 "></div>  
                <div className="squ1-1-1 shadow"></div>  
                <div className="squ2-2-2 shadow"></div>
                <div className="squ3-3-3 shadow"></div>  
                <div className="squ4-4-4 shadow"></div>
                <div className="squJoker "></div>
             </Row>
          </Container>
      );
    }
  }

export default BlockRight;
