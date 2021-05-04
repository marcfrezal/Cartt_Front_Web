import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './UserListAndManagement.css';
import { GETALLUSERS, SUPPUSER, UPDATEUSER } from '../../../API/users/users';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { FaSyncAlt, FaPen, FaTrash } from "react-icons/fa";
import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";


function ValidateUpdUser(props) {
  const [updUser, { data, error: mutationError, loading: mutationLoading }] = useMutation(UPDATEUSER);

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
          <Button className="saveModalBtnAdmin" onClick={() => updUser({ variables: { user: { _id: props.id, firstname: props.firstname, lastname: props.lastname, birthDate: props.birthDate, role: props.role, phone: props.phone } } }).catch(err => console.log(err))}>Valider</Button>
        </div>
        <p className="errorMess">Erreur.</p>
      </div>
    )
  }
  if (data) {
    window.location.reload();
  }
  return (
    <Button className="saveModalBtnAdmin" onClick={() => updUser({ variables: { user: { _id: props.id, firstname: props.firstname, lastname: props.lastname, birthDate: props.birthDate, role: props.role, phone: props.phone } } }).catch(err => console.log(err))}>Valider</Button>
  )
}

// {_id: props.isfirstname= prosfirstname}, lastname={lastname}, birthDate={birthDate}, role={role}, email={email}, phone={phone}  

const UpdUserModal = (props) => {
  const [show, setShow] = useState(false);
  const [firstname, setFirstname] = useState(props.User.firstname);
  const [lastname, setLastname] = useState(props.User.lastname);
  const [birthDate, setBirthDate] = useState(props.User.birthDate);
  const [role, setRole] = useState(props.User.role);
  // const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(props.User.phone);

  console.log(props)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <FaPen className="updateUserInfoIconAdm" onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifications des informations du user {props.User.name}.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Prénom</Form.Label>
            <Form.Control type="textarea" defaultValue={firstname} onChange={e => setFirstname(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nom</Form.Label>
            <Form.Control type="textarea" defaultValue={lastname} onChange={e => setLastname(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date de naissance</Form.Label>
            <Form.Control type="date" defaultValue={birthDate} onChange={e => setBirthDate(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Role</Form.Label>
            <Form.Control as="select" defaultValue={role} onChange={e => setRole(e.target.value)}>
              <option>PRO</option>
              <option>SELLER</option>
              <option>LAMBDA</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Téléphone</Form.Label>
            <Form.Control type="phone" defaultValue={phone} onChange={e => setPhone(e.target.value)} />
          </Form.Group>
          {/* <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" defaultValue={props.User.email}  onChange={e => setEmail(e.target.value)}/>
            </Form.Group> */}
          {/* <Form.Group>
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="password" defaultValue={props.User.password}  onChange={e => setPhone(e.target.value)}/>
            </Form.Group> */}

        </Modal.Body>
        <Modal.Footer>
          <Button className="closeModalBtnAdmin" onClick={props.handleClose}>
            Fermer
          </Button>
          <ValidateUpdUser
            firstname={firstname}
            lastname={lastname}
            birthDate={birthDate}
            role={role}
            // email={email}
            phone={phone}
            id={props.User._id} />
        </Modal.Footer>
      </Modal>
    </div>
  );
}

const UserList = (props) => {
  const { data, error, loading } = useQuery(GETALLUSERS);

  if (loading) {
    return (
      <div >
        <FaSyncAlt className="loadContainer" />
      </div>
    )
  } else if (error) {
    console.log(error)
    return (

      <div className="errorContainer">
        <p>Une erreur s'est produite lors du chargement des données.</p>
      </div>
    )
  } else if (data && data.users.length !== 0) {
    console.log(data.getUsers)
    return (
      <div>
        {data.users.map((user, index) => (
          <Container className="containerUserItem" fluid >
            <Row style={{ height: "100%" }}>
              <Col xs={12} md={2}>
              </Col>
              <Col xs={12} md={9}>
                <Row className="UserIdText">
                  <div>ID :&nbsp;</div>
                  <div className="UserInfos" >{user._id}</div>
                </Row>
                <Row className="UserNameText">
                  <div>Nom :&nbsp;</div>
                  <div className="UserInfos" >{user.lastname}</div>
                </Row>
                <Row className="UserDescriptionText">
                  <div>Prénom :&nbsp;</div>
                  <div className="UserInfosDesc" >{user.firstname}</div>
                </Row>
                <Row className="UserDescriptionText">
                  <div>Role :&nbsp;</div>
                  <div className="UserInfosDesc" >{user.role}</div>
                </Row>
              </Col>
              <Col xs={12} md={1}>
                <Row style={{ display: "flex", alignItems: "center", height: "50%" }}>
                  <UpdUserModal User={user} />
                </Row>
                {/* <Row style={{ display: "flex", alignItems: "center", height: "50%" }}>
                  <SuppUserModal User={user} />
                </Row> */}
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
        <p>Pas de users enregistrés.</p>
      </div>
    )
  }
};



class UserListAndManagement extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container fluid className="UserListAdmContainer shadow">
        <Row style={{ width: "100%" }}>
          <Col>
            <UserList />
          </Col>
        </Row>
      </Container>
    );
  }
}




export default UserListAndManagement;