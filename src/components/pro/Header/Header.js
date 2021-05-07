import React from "react";
import Container from 'react-bootstrap/Container';
import './Header.css'
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GETALLBRANDS } from '../../../API/brands/brands';
import { ME, SWITCHUSER } from '../../../API/users/users';
import { FaSortDown, FaSyncAlt } from "react-icons/fa";
import { Modal, Form, Button } from "react-bootstrap";

const SelectBrand = (props) => {
  const { data, error, loading} = useQuery(ME);

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
  } else if (data && data.me.brands.length !== 0) {
    return (
        <Form.Control  as="select" onChange={e => props.selectBrand(e.target.value)}>
          {data.me.brands.map((pos, index) => (
            <option value={pos._id}>{pos.name}</option>
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

function ValidateSwitchUser(props) {
  const [linkUser, { data, error: mutationError, loading: mutationLoading }] = useMutation(SWITCHUSER);
  var idBrand = parseFloat(props.idBrand);

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
          <Button className="saveModalBtnAdmin" onClick={() => linkUser({ variables: { idUser: props.idUser, idBrand: idBrand }}).catch(err => console.log(err))}>Switch</Button>
        </div>
        <p className="errorMess">Erreur.</p>
      </div>
    )
  }
  if (data) {
    window.location.reload();
  }
  return (
    <Button className="saveModalBtnAdmin" onClick={() => linkUser({ variables: { idUser: props.idUser, idBrand: idBrand }}).catch(err => console.log(err))}>Switch</Button>
  )
}

const SwitchUserModal = (props) => {
  const { data, error, loading} = useQuery(ME);
  const [show, setShow] = useState(false);
  const [brandId, selectBrand] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  } else if (data && data.me.brands.length !== 0) {
      return (
        <Col className="headerSwitch" xs={12} sm={5} md={5} lg={3}>
          <div className="headerSwithBrand">{data.me.currentBrand.name}</div>
          <FaSortDown className="headerSwithIcon" onClick={handleShow} />
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Changez votre marque actuelle.</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Label>Choisissez une marque ci-dessous sur laquelle basculer afin d'en visualiser les données relatives sur votre espace pro : </Form.Label>
              <SelectBrand selectBrand={selectBrand}/>
            </Modal.Body>
            <Modal.Footer>
              <Button className="closeModalBtnAdmin" onClick={props.handleClose}>
                Fermer
              </Button>
              <ValidateSwitchUser
                idBrand={brandId}
                idUser={data.me._id} />
            </Modal.Footer>
          </Modal>
        </Col>
      )
  } else {
    return (
      <div className="errorContainer">
        <p>Vous n'avez aucunes marques liées à votre compte.</p>
      </div>
    )
  }
};

class Header extends React.Component {

  render() {
    return (
      
      <Container fluid>
          <Row>
            <Col xs={12} sm={7} md={7} lg={9}>
              <div className="posHeaderTitlePro">{this.props.title} <div className="posHeaderPro">pro</div></div>
            </Col>
            <SwitchUserModal/>
          </Row>
      </Container>
    );
  }
}

export default Header;