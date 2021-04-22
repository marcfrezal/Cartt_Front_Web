import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './UserPage.css'
import HeaderAdm from '../../../components/admin/Header/HeaderAdm'
import SidebarAdm from '../../../components/common/SidebarAdmin/SidebarAdm';
import { Modal, Form, Button } from "react-bootstrap";
import { useQuery, useMutation } from '@apollo/react-hooks';
import { CREATEUSER, GETALLUSERS } from '../../../API/users/users';


class User extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }



  render() {
    return (
        <Container fluid className="containerUserInfosAdm">
        <SidebarAdm />
        <Row>
          <Col xs={1} lg={1}/>
          <Col xs={10} lg={10}>
            <Container fluid>
              <Row className="rowHeaderProfil">
                <HeaderAdm
                title='Users'
                // actionTitle='Modifier mon mot de passe'
                // onPress={() => this._showModifyPasswordModal()}
                />
              </Row>
              <Row>
                  <CreateUser/>
              </Row>
           
            </Container>
          </Col>
          <Col xs={1} lg={1} />
        </Row>
        {/* <this.ModifyPasswordModal
          show={this.state.modify_password_show}
          onHide={() => this._hideModifyPasswordModal()} /> */}
      </Container>
    );
  }
}

function ValidateCreaUser(props)  {
    const [ creaUser, {data, error : mutationError, loading : mutationLoading} ] = useMutation(CREATEUSER);
  
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
            <Button className="saveModalBtnAdmin" onClick={() => creaUser({variables : {myBrand : {name : props.name, description : props.desc}}}).catch(err => console.log(err))}>Valider</Button>
          </div>
          <p className="errorMess">Erreur.</p>
        </div>
      )
    }
    if (data) {
      window.location.reload();
    }
    return (
      <Button className="saveModalBtnAdmin" onClick={() => creaUser({variables : {myBrand : {name : props.name, description : props.desc}}}).catch(err => console.log(err))}>Valider</Button>
    )
  }

function CreateUser(props){
    const [show, setShow] = useState(false);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [role, setRole]= useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <Row className="addFunctionBrandAdmContainer" >
        <div style={{width : "100%", height : "100%", display : "flex", alignItems : "center" , justifyContent : "center"}} onClick={handleShow}>
          Créer un user
        </div>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Créer un nouvel utilisateur.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Prénom</Form.Label>
              <Form.Control type="textarea" placeholder="Prénom"  onChange={e => setFirstname(e.target.value)}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Nom</Form.Label>
              <Form.Control type="textarea" placeholder="Nom"  onChange={e => setLastname(e.target.value)}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Date de naissance</Form.Label>
              <Form.Control type="date" placeholder="Date de naissance"  onChange={e => setBirthDate(e.target.value)}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Control as="select"  onChange={e => setRole(e.target.value)}>
                <option>PRO</option>
                <option>CUSTOMER</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Téléphone</Form.Label>
              <Form.Control type="phone" placeholder="Téléphone"  onChange={e => setPhone(e.target.value)}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email"  onChange={e => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="password" placeholder="Mot de passe"  onChange={e => setPhone(e.target.value)}/>
            </Form.Group>
            
  
          </Modal.Body>
          <Modal.Footer>
            <Button className="closeModalBtnAdmin" onClick={handleClose}>
              Fermer
            </Button>
            <ValidateCreaUser firstname={firstname} lastname={lastname} birthDate={birthDate} role={role} email={email} phone={phone} />
          </Modal.Footer>
        </Modal>
      </Row>
    );
  
  };
  


export default User;
