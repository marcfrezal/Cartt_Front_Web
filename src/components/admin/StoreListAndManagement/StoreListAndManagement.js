import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './StoreListAndManagement.css';
import { GETALLSTORES, SUPPSTORE, SETSTORELOCATION } from '../../../API/stores/stores';
// import { GETALLBRANDS, SUPPBRAND, UPDATEBRAND } from '../../../API/brands/brands';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { FaSyncAlt, FaPen, FaTrash, FaMapMarker , FaGlobeEurope} from "react-icons/fa";
import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

function ValidateSuppStore(props)  {
  const [ suppBrand, {data, error : mutationError, loading : mutationLoading} ] = useMutation(SUPPSTORE);

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
          <Button className="saveModalBtnAdmin" onClick={() => suppBrand({variables : { idStore : props.brand._id}}).catch(err => console.log(err))}>Valider</Button>
        </div>
        <p className="errorMess">Erreur.</p>
      </div>
    )
  }
  if (data) {
    window.location.reload();
  }
  return (
    <Button className="saveModalBtnAdmin" onClick={() => suppBrand({variables : { idStore : props.brand._id}}).catch(err => console.log(err))}>Valider</Button>
  )
}

const SuppStoreModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <FaTrash className="updateStoreInfoIconAdm"  onClick={handleShow}/>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Supression du point de vente {props.brand.name}.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Souhaitez-vous vraiment supprimer le point de vente <strong> {props.brand.name} </strong> ?
        </Modal.Body>
        <Modal.Footer>
          <Button className="closeModalBtnAdmin" onClick={props.handleClose}>
            Fermer
          </Button>
          <ValidateSuppStore brand={props.brand} />
        </Modal.Footer>
      </Modal>
    </div>
  );
}

const SelectCountry = (props) => {
    return (
      <Form.Control as="select">
        <option value="France">FRANCE</option>
      </Form.Control>
    )
};

function ValidateLocationStore(props)  {
  const [ creaStore, {data, error : mutationError, loading : mutationLoading} ] = useMutation(SETSTORELOCATION);

  var idStore = parseFloat(props.store._id);
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
    return (
      <div className="errorLogin">
        <div className="btnCol">
          <Button className="saveModalBtnAdmin" onClick={() => creaStore({variables : {mystore : {name : props.name, idBrand : props.idBrand}}}).catch(err => console.log(err))}>Valider</Button>
        </div>
        <p className="errorMess">Erreur.</p>
      </div>
    )
  }
  if (data) {
    window.location.reload();
  }
  return (
    <Button className="saveModalBtnAdmin" onClick={() => creaStore({variables : {location : {country : props.country, postcode : props.postcode, city : props.city, adress1 : props.adress}, idStore : idStore}}).catch(err => console.log(err))}>Valider</Button>
  )
}

function SetStoreLocation(props){

  const [showe, setShowe] = useState(false);
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('FRANCE');
  const [postcode, setPostCode] = useState('');
  const [adress, setAdress] = useState('');

  const handleClose = () => setShowe(false);
  const handleShow = () => setShowe(true);

  return (
    <div>
      <FaGlobeEurope className="updateStoreInfoIconAdm"  onClick={handleShow}/>
      
      <Modal show={showe} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Choisissez sa localisation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Adresse</Form.Label>
            <Form.Control type="email" placeholder="ex : 2 Rue du Poisson Rouge" onChange={e => setAdress(e.target.value)} />
          </Form.Group>
          <Form.Group>
          <Form.Group>
            <Form.Label>Code Postal</Form.Label>
            <Form.Control type="email" placeholder="ex : 11430" onChange={e => setPostCode(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ville</Form.Label>
            <Form.Control type="email" placeholder="ex : Gruissan" onChange={e => setCity(e.target.value)} />
          </Form.Group>
            <Form.Label>Pays</Form.Label>
            <SelectCountry/>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
         <Button className="closeModalBtnAdmin" onClick={handleClose}>
            Fermer
          </Button>
          <ValidateLocationStore country={country} adress={adress} city={city} postcode={postcode} store={props.store}/>
        </Modal.Footer>
        </Modal>
      </div>
  )
};


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
                  {pos.location !== null ? <div className="brandInfos">{pos.location.adress1} {pos.location.postcode} {pos.location.city}</div> : <div className="brandInfos">Pas d'adresses enregistrée.</div> }
                </Row>
                <Row className="storeDescriptionText">
                  <div>Marque associée :&nbsp;</div>
                  <div className="brandInfos" >{pos.brand.name}</div>
                </Row>
              </Col>
              <Col xs={12} md={1}>
                <Row style={{display : "flex", alignItems : "center", height : "50%"}}>
                  <SetStoreLocation store={pos}/>
                </Row>
                <Row style={{display : "flex", alignItems : "center", height : "50%"}}>
                  <SuppStoreModal brand={pos}/>
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