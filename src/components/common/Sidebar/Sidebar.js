import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";
import './Sidebar.css';


class Sidebar extends React.Component {

    render() {
      return (
          <Container className="sideBarBody">
              <Row>
                <Col className="sideBarCol">
                  <div className="sideBarItem">
                    Burger
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="sideBarCol">
                  <div className="sideBarItem">
                  </div>
                </Col>
              </Row>
              <Row >
                <Col className="sideBarCol">
                  <div className="sideBarItem">
                  </div>
                </Col>
              </Row>
              <Row >
                <Col className="sideBarCol">
                  <div className="sideBarItem">
                  </div>
                </Col>
              </Row>
          </Container>
      );
    }
  }

export default Sidebar;