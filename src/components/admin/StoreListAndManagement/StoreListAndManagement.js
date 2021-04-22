import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './StoreListAndManagement.css';
import { GETALLSTORES } from '../../../API/stores/stores';
import { GETALLBRANDS, SUPPBRAND, UPDATEBRAND } from '../../../API/brands/brands';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { FaSyncAlt, FaPen, FaTrash } from "react-icons/fa";
import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

function ValidateSuppBrand(props)  {
  const [ suppBrand, {data, error : mutationError, loading : mutationLoading} ] = useMutation(SUPPBRAND);

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
          <Button className="saveModalBtnAdmin" onClick={() => suppBrand({variables : { idBrand : props.brand._id}}).catch(err => console.log(err))}>Valider</Button>
        </div>
        <p className="errorMess">Erreur.</p>
      </div>
    )
  }
  if (data) {
    window.location.reload();
  }
  return (
    <Button className="saveModalBtnAdmin" onClick={() => suppBrand({variables : { idBrand: props.brand._id}}).catch(err => console.log(err))}>Valider</Button>
  )
}

const SuppBrandModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <FaTrash className="updateStoreInfoIconAdm"  onClick={handleShow}/>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Supression de la marque {props.brand.name}.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Souhaitez-vous vraiment supprimer la marque <strong> {props.brand.name} </strong> ?
        </Modal.Body>
        <Modal.Footer>
          <Button className="closeModalBtnAdmin" onClick={props.handleClose}>
            Fermer
          </Button>
          <ValidateSuppBrand brand={props.brand} />
        </Modal.Footer>
      </Modal>
    </div>
  );
}

function ValidateUpdBrand(props)  {
  const [ updBrand, {data, error : mutationError, loading : mutationLoading} ] = useMutation(UPDATEBRAND);

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
          <Button className="saveModalBtnAdmin" onClick={() => updBrand({variables : {myBrand : {_id : props.id, name : props.name, description : props.desc}}}).catch(err => console.log(err))}>Valider</Button>
        </div>
        <p className="errorMess">Erreur.</p>
      </div>
    )
  }
  if (data) {
    window.location.reload();
  }
  return (
    <Button className="saveModalBtnAdmin" onClick={() => updBrand({variables : {myBrand : {_id : props.id, name : props.name, description : props.desc}}}).catch(err => console.log(err))}>Valider</Button>
  )
}


const UpdBrandModal = (props) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(props.brand.name);
  const [desc, setDesc] = useState(props.brand.description);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <FaPen className="updateStoreInfoIconAdm"  onClick={handleShow}/>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifications des informations de la marque {props.brand.name}.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Nom</Form.Label>
            <Form.Control type="email" placeholder={props.brand.name}  onChange={e => setName(e.target.value)}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" type="email" placeholder={props.brand.description} onChange={e => setDesc(e.target.value)}/>
          </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button className="closeModalBtnAdmin" onClick={props.handleClose}>
            Fermer
          </Button>
          <ValidateUpdBrand name={name} desc={desc} id={props.brand._id}/>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

const StoreList = (props) => {
  if (props && props.stores.length !== 0) {
    return (
      <div>
        {props.stores.map((pos, index) => (
          <Container className="containerStoreItem" fluid>
            <Row style={{height : "100%"}}>
              <Col xs={12} md={2}>
              </Col>
              <Col xs={12} md={9}>
                <Row className="storeIdText">
                  <div>ID MAGASIN:&nbsp;</div>
                  <div className="brandInfos" >{pos._id}</div>
                </Row>
                <Row className="storeNameText">
                  <div>Nom :&nbsp;</div>
                  <div className="brandInfos" >{pos.name}</div>
                </Row>
                <Row className="storeDescriptionText">
                  <div>Adresse :&nbsp;</div>
                  {/* <div className="brandInfos" >{pos.location.adress1} {pos.location.postcode} {pos.location.city}</div> */}
                </Row>
                <Row className="storeDescriptionText">
                  <div>Marque associée :&nbsp;</div>
                  <div className="brandInfos" >{pos.brand.name}</div>
                </Row>
              </Col>
              <Col xs={12} md={1}>
                <Row style={{display : "flex", alignItems : "center", height : "50%"}}>
                  <UpdBrandModal brand={pos}/>
                </Row>
                <Row style={{display : "flex", alignItems : "center", height : "50%"}}>
                  <SuppBrandModal brand={pos}/>
                </Row>
              </Col>
            </Row>
          </Container>
        ))}
      </div>
    )
  } else {
    return (
      <div className="errorContainerStoreList">
        <p>Veuillez sélectionner une marque ayant des points de vente.</p>
      </div>
    )
  }
};

class StoreListAndManagement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container fluid className="storeListAdmContainer shadow">
        <Row style={{width : "100%"}}>
          <Col>
            <StoreList stores={this.props.stores}/>
          </Col>
        </Row>
      </Container>
    );
  }
}




export default StoreListAndManagement;