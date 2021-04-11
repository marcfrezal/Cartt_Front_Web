import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PointsOfSalePageAdm.css';
import SidebarAdm from '../../../components/common/SidebarAdmin/SidebarAdm';
import { Modal, Button, Form } from "react-bootstrap";
import HeaderAdm from '../../../components/admin/Header/HeaderAdm';
import BrandListAndManagement from '../../../components/admin/BrandListAndManagement/BrandListAndManagement';
import { useState } from "react";


class PointsOfSaleAdm extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container fluid style={{ height : "100vh", backgroundColor: "#fff7f7" }}>
        <SidebarAdm />
        <Row style={{ height : "100%", backgroundColor: "#fff7f7"}}>
          <Col xs={1} lg={1} style={{backgroundColor: "#fff7f7"}}></Col>
          <Col xs={11} lg={11} style={{backgroundColor: "#fff7f7"}}>
            <HeaderAdm title="Points de vente et marques"/>
            <Container fluid style={{ height : "90%", backgroundColor: "#fff7f7"}}>
              <Row style={{ height : "100%", backgroundColor: "#fff7f7"}}>
                <Col style={{ height : "100%", padding : "5vh", display : "flex", alignItems : "center", flexDirection : "column", backgroundColor: "#fff7f7"}}>
                  <CreateBrand/>
                  <BrandListAndManagement/>
                </Col>
                <Col style={{ height : "100%", padding : "5vh", display : "flex", alignItems : "center", flexDirection : "column", backgroundColor: "#fff7f7"}}>
                  <CreateStore/>
                  <BrandListAndManagement/>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

function CreateBrand(){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Row className="addFunctionBrandAdmContainer" >
      <div style={{width : "100%", height : "100%", display : "flex", alignItems : "center" , justifyContent : "center"}} onClick={handleShow}>
        Créer une marque
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Nom</Form.Label>
            <Form.Control type="email"  />
          </Form.Group>
          <Form.Group>
            <Form.Label>Prénom</Form.Label>
            <Form.Control type="email"  />
          </Form.Group>
          <Form.Group>
            <Form.Label>Téléphone</Form.Label>
            <Form.Control type="email"/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Mail</Form.Label>
            <Form.Control type="email" style={{color : "red !important"}}/>
          </Form.Group>
          
        </Modal.Body>
        <Modal.Footer>
          <Button className="closeModalBtnAdmin" onClick={handleClose}>
            Fermer
          </Button>
          <Button className="saveModalBtnAdmin" onClick={handleClose}>
            Créer
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  );

};

function CreateStore(){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Row className="addFunctionBrandAdmContainer " >
      <div style={{width : "100%", height : "100%", display : "flex", alignItems : "center" , justifyContent : "center"}} onClick={handleShow}>
        Créer un magasin
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Nom</Form.Label>
            <Form.Control type="email"  />
          </Form.Group>
          <Form.Group>
            <Form.Label>Prénom</Form.Label>
            <Form.Control type="email"  />
          </Form.Group>
          <Form.Group>
            <Form.Label>Téléphone</Form.Label>
            <Form.Control type="email"/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Mail</Form.Label>
            <Form.Control type="email" style={{color : "red !important"}}/>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
        <Button className="closeModalBtnAdmin" onClick={handleClose}>
            Fermer
          </Button>
          <Button className="saveModalBtnAdmin" onClick={handleClose}>
            Créer 
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  )
};


export default PointsOfSaleAdm;
