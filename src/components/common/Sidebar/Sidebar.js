import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";
import './Sidebar.css';
import { FaUsers } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa';
import { FaCog } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';


class Sidebar extends React.Component {

    render() {
      return (
          <Container className="sideBarBody">
              <Row>
                <Col className="sideBarCol">
                  <div className="sideBarBurger">
                    <FaBars className="sideBarIcon"/>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="sideBarCol">
                  <div className="sideBarItem">
                    <FaChartLine className="sideBarIcon"/>
                  </div>
                </Col>
              </Row>
              <Row >
                <Col className="sideBarCol">
                  <div className="sideBarItem">
                    <FaUsers className="sideBarIcon"/>
                  </div>
                </Col>
              </Row>
              <Row >
                <Col className="sideBarCol">
                  <div className="sideBarItem">
                    <FaCog className="sideBarIcon"/>
                  </div>
                </Col>
              </Row>
              <Row >
                <Col className="sideBarCol">
                </Col>
              </Row>
              <Row >
                <Col className="sideBarCol">
                </Col>
              </Row>
              <Row >
                <Col className="sideBarCol">
                  <div className="sideBarItem">
                    <FaSignOutAlt className="sideBarIcon"/>
                  </div>
                </Col>
              </Row>
          </Container>
      );
    }
  }

export default Sidebar;