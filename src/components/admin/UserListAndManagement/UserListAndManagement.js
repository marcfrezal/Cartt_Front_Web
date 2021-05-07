import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './UserListAndManagement.css';
import { GETALLUSERS, LINKUSER, UPDATEUSER, SWITCHUSER, SUPPUSER } from '../../../API/users/users';
import { GETALLBRANDS } from '../../../API/brands/brands';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { FaSyncAlt, FaPen, FaRandom, FaLink, FaTrash } from "react-icons/fa";
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

const UpdUserModal = (props) => {
  const [show, setShow] = useState(false);
  const [firstname, setFirstname] = useState(props.User.firstname);
  const [lastname, setLastname] = useState(props.User.lastname);
  const [birthDate, setBirthDate] = useState(props.User.birthDate);
  const [role, setRole] = useState(props.User.role);
  // const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(props.User.phone);

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
          {/* <Form.Group>
            <Form.Label>Date de naissance</Form.Label>
            <Form.Control type="date" defaultValue={birthDate} onChange={e => setBirthDate(e.target.value)} />
          </Form.Group> */}
          <Form.Group>
            <Form.Label>Role</Form.Label>
            <Form.Control as="select" defaultValue={role} onChange={e => setRole(e.target.value)}>
              <option>ADMIN</option>
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
  const [show, setShow] = useState(false);
  const [brandId, selectBrand] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <FaRandom className="updateUserInfoIconAdm" onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Basculez l'user {props.User.firstname} {props.User.lastname} de marque.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Choisissez une marque ci-dessous sur laquelle basculer l'utilisateur : </Form.Label>
          <Form.Control as="select" onChange={e => selectBrand(e.target.value)}>
            {props.User.brands.map((brand, index) => (
              <option value={brand._id}>{brand.name}</option>
            ))}
          </Form.Control>
        </Modal.Body>
        <Modal.Footer>
          <Button className="closeModalBtnAdmin" onClick={props.handleClose}>
            Fermer
          </Button>
          <ValidateSwitchUser
            idBrand={brandId}
            idUser={props.User._id} />
        </Modal.Footer>
      </Modal>
    </div>
  );
}

const SelectBrand = (props) => {
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
      <Form.Control as="select" onChange={e => props.selectBrand(e.target.value)}>
        {data.getBrands.map((pos, index) => (
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

function ValidateLinkUser(props) {
  const [linkUser, { data, error: mutationError, loading: mutationLoading }] = useMutation(LINKUSER);
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
          <Button className="saveModalBtnAdmin" onClick={() => linkUser({ variables: { idUser: props.idUser, idBrand: idBrand }}).catch(err => console.log(err))}>Link</Button>
        </div>
        <p className="errorMess">Erreur.</p>
      </div>
    )
  }
  if (data) {
    window.location.reload();
  }
  return (
    <Button className="saveModalBtnAdmin" onClick={() => linkUser({ variables: { idUser: props.idUser, idBrand: idBrand }}).catch(err => console.log(err))}>Link</Button>
  )
}

const LinkUserModal = (props) => {
  const [show, setShow] = useState(false);
  const [brandId, setBrandId] = useState();


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <FaLink className="updateUserInfoIconAdm" onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Liason de l'user {props.User.firstname} {props.User.lastname} avec une marque.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Choisissez une marque ci-dessous : </Form.Label>
            <SelectBrand selectBrand={setBrandId}/>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button className="closeModalBtnAdmin" onClick={props.handleClose}>
            Fermer
          </Button>
          <ValidateLinkUser
            idBrand={brandId}
            idUser={props.User._id} />
        </Modal.Footer>
      </Modal>
    </div>
  );
}

// function ValidateSuppUser(props)  {
//   const [ suppUser, {data, error : mutationError, loading : mutationLoading} ] = useMutation(SUPPUSER);

//   if (mutationLoading) {
//     return (
//       <div className="errorLogin">
//         <div className="btnCol">
//           <Button className="saveModalBtnAdmin">Patientez...</Button>
//         </div>
//       </div>
//     )
//   }
//   if (mutationError) {
//     console.log(mutationError)
//     return (
//       <div className="errorLogin">
//         <div className="btnCol">
//           <Button className="saveModalBtnAdmin" onClick={() => suppUser({variables : { idBrand : props.brand._id}}).catch(err => console.log(err))}>Valider</Button>
//         </div>
//         <p className="errorMess">Erreur.</p>
//       </div>
//     )
//   }
//   if (data) {
//     window.location.reload();
//   }
//   return (
//     <Button className="saveModalBtnAdmin" onClick={() => suppUser({variables : { idBrand: props.brand._id}}).catch(err => console.log(err))}>Valider</Button>
//   )
// }

const SuppUserModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <FaTrash className="updateUserInfoIconAdm"  onClick={handleShow}/>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Supression de l'user {props.user.firstname} {props.user.lastname}.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Impossible de supprimer l'user <strong> {props.user.firstname} {props.user.lastname}</strong>.
        </Modal.Body>
        <Modal.Footer>
          <Button className="closeModalBtnAdmin" onClick={handleClose}>
            Fermer
          </Button>
          <Button className="saveModalBtnAdmin"onClick={handleClose}>Valider</Button>
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
    return (
      <div>
        {data.users.map((user, index) => (
          <Container className="containerUserItem" fluid >
            <Row style={{ height: "100%" }}>
              <Col xs={12} md={1}>
              </Col>
              <Col xs={12} md={10}>
                <Row className="UserIdText">
                  <div>ID :&nbsp;</div>
                  <div className="UserInfos" >{user._id}</div>
                </Row>
                <Row className="UserNameText">
                  <div>Nom :&nbsp;</div>
                  <div className="UserInfos" >{user.lastname}</div>
                </Row>
                <Row className="UserNameText">
                  <div>Prénom :&nbsp;</div>
                  <div className="UserInfos" >{user.firstname}</div>
                </Row>
                <Row className="UserNameText">
                  <div>Mail :&nbsp;</div>
                  <div className="UserInfos" >{
                  user.email
                  }</div>
                </Row>
                <Row className="UserNameText">
                  <div>Marques liées :&nbsp;</div>
                  <div className="UserInfosDesc">
                    {user.brands !== null ? <div>{user.brands.map((brand, index) => (<div>{brand.name}</div>))}</div> : <div>Pas de marques liées à cet utilisateur.</div> }
                  </div>
                </Row>
                <Row className="UserNameText">
                  <div>Marque actuelle assosciée:&nbsp;</div>
                  <div className="UserInfos" >
                    {user.currentBrand !== null ? <div>{user.currentBrand.name}</div> : <div>Pas de marques associée.</div> }
                  </div>
                </Row>
                <Row className="UserNameText">
                  <div>Role:&nbsp;</div>
                  <div className="UserInfos" >
                    {user.role !== null ? <div>{user.role}</div> : <div>Pas de role spécifique.</div> }
                  </div>
                </Row>
              </Col>
              <Col xs={12} md={1}>
                <Row style={{ display: "flex", alignItems: "center", height: "25%" }}>
                  <UpdUserModal User={user} />
                </Row>
                <Row style={{ display: "flex", alignItems: "center", height: "25%" }}>
                  <LinkUserModal User={user} />
                </Row>
                <Row style={{ display: "flex", alignItems: "center", height: "25%" }}>
                  <SwitchUserModal User={user} />
                </Row>
                <Row style={{ display: "flex", alignItems: "center", height: "25%" }}>
                  <SuppUserModal user={user} />
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