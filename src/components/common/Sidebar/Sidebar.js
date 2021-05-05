import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button, Modal} from 'react-bootstrap';
import React from "react";
import { useState } from "react";
import './Sidebar.css';
import { FaBars } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa';
import { FaCog } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
import { FaStoreAlt } from 'react-icons/fa';
import { Link, Redirect } from "react-router-dom";
import { LOGOUT } from '../../../API/authentication/authentication';
import { useMutation, useQuery } from '@apollo/react-hooks';

function LogoutFunction () {
  const [ updateLogout, {data, error : mutationError, loading : mutationLoading} ] = useMutation(LOGOUT);
    
  if (mutationLoading) {
    return (
      <Button style={{backgroundColor : "#0E3670", border : "none"}}>
        Patientez...
      </Button>
    )
  }
  if (mutationError) {
    console.log(mutationError)
    return (
      <Button style={{backgroundColor : "#0E3670", border : "none"}} onClick={() => updateLogout().catch(err => console.log(err))} >
        Valider
      </Button>
    )
  }
  if (data) {
    if (data.logout === true)
      return <Redirect to='/login'/>;
  }

  return (
    <Button style={{backgroundColor : "#0E3670", border : "none"}} onClick={() => updateLogout().catch(err => console.log(err))} >
      Valider
    </Button>
  )
};

function LogoutModal () {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="sideBarItem" onClick={handleShow} >
        <FaSignOutAlt className="sideBarIcon" alt="logout" />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Voulez-vous vraiment vous déconnecter?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Vous vous appretez à vous déconnecter, etes-vous sur de vouloir poursuivre?</Modal.Body>
        <Modal.Footer>
          <Button style={{backgroundColor : "#E50815", border : "none"}} onClick={handleClose}>
            Fermer
          </Button>
          <LogoutFunction/>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

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
    } else if (window.location.pathname === "/profile") {
      this.setState({
        settings : true
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
              {/* <Row className="sideBarRow">
                <Col className="sideBarCol">
                  <Link to="/dashboard" className={this.state.dashboard ? 'sideBarItemActive' : 'sideBarItem'} >
                    <div className="sideBarIcon">
                      <FaChartLine />
                    </div>
                  </Link>
                </Col>
              </Row> */}
              <Row className="sideBarRow">
                <Col className="sideBarCol">
                  <Link to="/points-of-sale" className={this.state.shops ? 'sideBarItemActive' : 'sideBarItem'} >
                    <div className="sideBarIcon">
                      <FaStoreAlt />
                    </div>
                  </Link>
                </Col>
              </Row>
              <Row className="sideBarRow">
                <Col className="sideBarCol">
                  <Link to="/profile" className={this.state.settings ? 'sideBarItemActive' : 'sideBarItem'} >
                      <div className="sideBarIcon">
                        <FaCog className="fa-spin"/>
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
                  <div>{this.state.dashboard}</div>
                
                </Col>
              </Row>
              <Row className="sideBarRow">
                <Col className="sideBarCol">
                  <LogoutModal/>
                </Col>
              </Row>
          </Container>
      );
    }
  }



export default Sidebar;