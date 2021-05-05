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
import UserListAndManagement from "../../../components/admin/UserListAndManagement/UserListAndManagement";
import DashboardManagement from "../../../components/admin/DashboardManagement/DashboardManagement";


class User extends React.Component {


  render() {
    return (
    <Container fluid style={{ height : "100vh", backgroundColor: "red" }}>
      <SidebarAdm />
      <Row style={{ height : "100%", backgroundColor: "red"}}>
        <Col xs={1} lg={1} style={{height : "100%", backgroundColor: "#fff7f7"}}></Col>
        <Col xs={11} lg={11} style={{ height : "100%", backgroundColor: "#fff7f7"}}>
          <HeaderAdm title="User"/>
          <Container fluid >
            <Row style={{ backgroundColor: "#fff7f7"}}>
              <Col style={{ padding : "5vh", display : "flex", alignItems : "center", flexDirection : "column"}}>
                <CreateUser/>
                <UserListAndManagement getMyStoreCallBack={this.getBrand}/>
              </Col>
            </Row>
          </Container> 
        </Col>
      </Row>
    </Container>
    //   <Container fluid style={{ height: '100vh', backgroundColor: "#fff7f7" }}>
    //   <SidebarAdm />
    //   <Row style={{ height : "100vh"}}>
    //     <Col xs={1} lg={1} style={{height : "100%", backgroundColor: "#fff7f7"}}></Col>
    //     <Col xs={11} lg={11} style={{ height : "100%", backgroundColor: "#fff7f7"}}>
    //       <HeaderAdm title="Users"/>
    //       <Container fluid style={{ height : "80vh", backgroundColor: "#fff7f7"}}>
    //         <Row style={{ height : "80vh", backgroundColor: "#fff7f7"}}>

    //               <CreateUser/>
    //               <UserListAndManagement/>
    //         </Row>
    //       </Container> 
    //     </Col>
    //   </Row>
    // </Container>
       
    );
  }
}

function ValidateCreaUser(props)  {
    const [ creaUser, {data, error : mutationError, loading : mutationLoading} ] = useMutation(CREATEUSER);
    console.log(props)
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
            <Button className="saveModalBtnAdmin" onClick={() => creaUser({variables : {user : {firstname : props.firstname, lastname : props.lastname, birthDate: props.birthDate, role: props.role, email: props.email, password: props.password, phone: props.phone}}}).catch(err => console.log(err))}>Valider</Button>
          </div>
          <p className="errorMess">Erreur.</p>
        </div>
      )
    }
    if (data) {
      window.location.reload();
    }
    return (
      <Button className="saveModalBtnAdmin" onClick={() => creaUser({variables : {user : {firstname : props.firstname, lastname : props.lastname, birthDate: props.birthDate, role: props.role, email: props.email, password: props.password, phone: props.phone}}}).catch(err => console.log(err))}>Valider</Button>
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
    const [password, setPassword] = useState('');
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <Row className="addFunctionUserAdmContainer">
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
              <Form.Control type="date" placeholder="JJ/MM/AAAA"  onChange={e => setBirthDate(e.target.value)}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Control as="select" defaulValue="LAMBDA"  onChange={e => setRole(e.target.value)}>
                <option>SELLER</option>
                <option>LAMBDA</option>
                <option>ADMIN</option>
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
              <Form.Control type="password" placeholder="Mot de passe"  onChange={e => setPassword(e.target.value)}/>
            </Form.Group>
            
          
          </Modal.Body>
          <Modal.Footer>
            <Button className="closeModalBtnAdmin" onClick={handleClose}>
              Fermer
            </Button>
            <ValidateCreaUser firstname={firstname} lastname={lastname} birthDate={birthDate} role={role} email={email} password={password} phone={phone} />
          </Modal.Footer>
        </Modal>
      </Row>
    );
  
  };
  


export default User;
