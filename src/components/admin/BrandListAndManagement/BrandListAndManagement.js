import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './BrandListAndManagement.css';
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
      <FaTrash className="updateBrandInfoIconAdm"  onClick={handleShow}/>

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
      <FaPen className="updateBrandInfoIconAdm"  onClick={handleShow}/>

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

const BrandList = (props) => {
  const { data, error, loading} = useQuery(GETALLBRANDS);

  if (loading) {
    return (
      <div >
        <FaSyncAlt className="loadContainer"/>
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
      <div>
        {data.getBrands.map((pos, index) => (
          <Container className="containerBrandItem" fluid onClick={(e) => props.getMyStoreCallBack(pos)}>
            <Row style={{height : "100%"}}>
              <Col xs={12} md={2}>
              </Col>
              <Col xs={12} md={9}>
                <Row className="brandIdText">
                  <div>ID :&nbsp;</div>
                  <div className="brandInfos" >{pos._id}</div>
                </Row>
                <Row className="brandNameText">
                  <div>Nom :&nbsp;</div>
                  <div className="brandInfos" >{pos.name}</div>
                </Row>
                <Row className="brandDescriptionText">
                  <div>Description :&nbsp;</div>
                  <div className="brandInfosDesc" >{pos.description}</div>
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
  }
  else {
    return (
      <div className="errorContainer">
        <p>Pas de marques enregistrées.</p>
      </div>
    )
  }
};

class BrandListAndManagement extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container fluid className="brandListAdmContainer shadow">
        <Row style={{width : "100%"}}>
          <Col>
            <BrandList getMyStoreCallBack={this.props.getMyStoreCallBack}/>
          </Col>
        </Row>
      </Container>
    );
  }
}




export default BrandListAndManagement;