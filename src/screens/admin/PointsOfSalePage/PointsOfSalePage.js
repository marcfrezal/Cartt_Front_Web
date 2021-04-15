import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PointsOfSalePageAdm.css';
import SidebarAdm from '../../../components/common/SidebarAdmin/SidebarAdm';
import { Modal, Button, Form } from "react-bootstrap";
import HeaderAdm from '../../../components/admin/Header/HeaderAdm';
import BrandListAndManagement from '../../../components/admin/BrandListAndManagement/BrandListAndManagement';
import StoreListAndManagement from '../../../components/admin/StoreListAndManagement/StoreListAndManagement';
import { useState } from "react";
import { CREATEBRAND, GETALLBRANDS } from '../../../API/brands/brands';
import { useQuery, useMutation } from '@apollo/react-hooks';


class PointsOfSaleAdm extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container fluid style={{ height : "100vh", backgroundColor: "#fff7f7" }}>
        <SidebarAdm />
        <Row style={{ height : "100%", backgroundColor: "red"}}>
          <Col xs={1} lg={1} style={{height : "100%", backgroundColor: "#fff7f7"}}></Col>
          <Col xs={11} lg={11} style={{ height : "100%", backgroundColor: "#fff7f7"}}>
            <HeaderAdm title="Points de ventes et marques"/>
            <Container fluid style={{ height : "90%", backgroundColor: "#fff7f7"}}>
              <Row style={{ height : "100%", backgroundColor: "#fff7f7"}}>
                <Col style={{ height : "100%", padding : "5vh", display : "flex", alignItems : "center", flexDirection : "column", backgroundColor: "#fff7f7"}}>
                  <CreateBrand/>
                  <BrandListAndManagement/>
                </Col>
                <Col style={{ height : "100%", padding : "5vh", display : "flex", alignItems : "center", flexDirection : "column", backgroundColor: "#fff7f7"}}>
                  <CreateStore/>
                  <StoreListAndManagement/>
                </Col>
              </Row>
            </Container> 
          </Col>
        </Row>
      </Container>
    );
  }
}


function ValidateCreaBrand(props)  {
  const [ creaBrand, {data, error : mutationError, loading : mutationLoading} ] = useMutation(CREATEBRAND);

  if (mutationLoading) {
    return (
      <div className="errorLogin">
        <div className="btnCol">
          <Button className="saveModalBtnAdmin">Patientez...</Button>
        </div>
      </div>
    )
  }
  if (mutationError) {
    console.log(mutationError)
    return (
      <div className="errorLogin">
        <div className="btnCol">
          <Button className="saveModalBtnAdmin" onClick={() => creaBrand({variables : {myBrand : {name : props.name, description : props.desc}}}).catch(err => console.log(err))}>Valider</Button>
        </div>
        <p className="errorMess">Erreur.</p>
      </div>
    )
  }
  if (data) {
    window.location.reload();
  }
  return (
    <Button className="saveModalBtnAdmin" onClick={() => creaBrand({variables : {myBrand : {name : props.name, description : props.desc}}}).catch(err => console.log(err))}>Valider</Button>
  )
}

function CreateBrand(props){
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Row className="addFunctionBrandAdmContainer" >
      <div style={{width : "100%", height : "100%", display : "flex", alignItems : "center" , justifyContent : "center"}} onClick={handleShow}>
        Créer une marque
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Créer une nouvelle marque.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Nom</Form.Label>
            <Form.Control type="email" placeholder="Nom de la marque"  onChange={e => setName(e.target.value)}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" type="email" placeholder="Description de la marque" onChange={e => setDesc(e.target.value)}/>
          </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button className="closeModalBtnAdmin" onClick={handleClose}>
            Fermer
          </Button>
          <ValidateCreaBrand name={name} desc={desc} />
        </Modal.Footer>
      </Modal>
    </Row>
  );

};

const SelectBrand = () => {
  const { data, error, loading} = useQuery(GETALLBRANDS);

  if (loading) {
    return (
      <div >
        Patientez...
      </div>
    )
  } else if (error) {
    return (
      <div className="errorContainer">
        <p>Une erreur s'est produite lors du chargement des données.</p>
      </div>
    )
  } else if (data && data.getBrands.length !== 0) {
    return (
      <Form.Control as="select">
        {data.getBrands.map((pos, index) => (
          <option>{pos.name}</option>
        ))}
      </Form.Control>
    )
  }
  else {
    return (
      <div className="errorContainer">
        <option>Pas de marques enregistrées.</option>
      </div>
    )
  }
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
          <Modal.Title>Créez votre magasin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Nom</Form.Label>
            <Form.Control type="email"  />
          </Form.Group>
          <Form.Group>
            <Form.Label>Marque associée</Form.Label>
            <SelectBrand/>
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
