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
import { FaStoreAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dashboard: false,
      customers: false,
      shops : false,
      settings : false
    };
  }

  componentDidMount() {
    if (window.location.pathname === "/dashboard") {
      this.setState({
        dashboard : true
      })
    } else if (window.location.pathname === "/points-of-sale") {
      this.setState({
        shops : true
      })
    }
  }

    render() {
      return (
          <Container className="sideBarBody ">
              <Row  className="sideBarRow">
                <Col className="sideBarCol">
                  <div className="sideBarBurger">
                    <FaBars className="sideBarIconBurger"/>
                  </div>
                </Col>
              </Row>
              <Row className="sideBarRow">
                <Col className="sideBarCol">
                  <Link to="/dashboard" className={this.state.dashboard ? 'sideBarItemActive' : 'sideBarItem'} >
                    <div className="sideBarIcon">
                      <FaChartLine />
                    </div>
                  </Link>
                </Col>
              </Row>
              <Row className="sideBarRow">
                <Col className="sideBarCol">
                  <Link to="/points-of-sale" className={this.state.shops ? 'sideBarItemActive' : 'sideBarItem'} >
                    <div className="sideBarIcon">
                      <FaStoreAlt/>
                    </div>
                  </Link>
                </Col>
              </Row>
              <Row className="sideBarRow">
                <Col className="sideBarCol">
                  <Link to="/" className="sideBarItem">
                      <div className="sideBarIcon">
                        <FaCog/>
                      </div>
                  </Link>
                </Col>
              </Row>
              <Row className="sideBarRow">
                <Col className="sideBarCol">
                  <div>{this.state.dashboard}</div>
                  
                </Col>
              </Row>
              <Row className="sideBarRow">
                <Col className="sideBarCol">
                  <div>{this.state.dashboard}</div>
                  
                </Col>
              </Row>
              <Row className="sideBarRow">
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