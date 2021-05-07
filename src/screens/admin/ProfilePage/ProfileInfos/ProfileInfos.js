import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ProfileInfos.css'
import { FaPen, FaSyncAlt } from "react-icons/fa";
import { Modal, Form, Button } from "react-bootstrap";
import { ME } from '../../../../API/users/users';
import { UPDATEUSER } from '../../../../API/users/users';
import { useQuery, useMutation } from "@apollo/client";
import dateFormat from 'dateformat';
import { useState } from "react";

function ValidateInfosUser(props)  {
  const [ updateUser, {data, error : mutationError, loading : mutationLoading} ] = useMutation(UPDATEUSER);
  let firstname = "";
  let lastname = "";
  let mail = "";
  let phone = "";

  if (props.newfirstname === "")
    firstname = props.data.me.firstname;
  else
    firstname = props.newfirstname;
  
  if (props.newlastname === "")
    lastname = props.data.me.lastname;
  else
    lastname = props.newlastname;

  if (props.newphone === "")
    phone = props.data.me.phone;
  else
    phone = props.newphone;

  if (props.newfirstname === "")
    firstname = props.data.me.firstname;
  else
    firstname = props.newfirstname;

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
          <Button className="saveModalBtnAdmin" onClick={() => updateUser({variables : {user : {_id : props.data._id, firstname : firstname, lastname : lastname, phone : phone}}}).catch(err => console.log(err))}>Valider</Button>
        </div>
        <p className="errorMess">Erreur.</p>
      </div>
    )
  }
  if (data) {
    window.location.reload();
  }
  return (
    <Button className="saveModalBtnAdmin" onClick={() => updateUser({variables : {user : {_id : props.data._id, firstname : firstname, lastname : lastname, phone : phone}}}).catch(err => console.log(err))}>Valider</Button>
  )
}

const UpdateInfosUser = (props) => {
  // const { data, error, loading} = useQuery(ME);
  const [firstName, setFirstName] = useState(props.me.firstname);
  const [lastName, setLastName] = useState(props.me.lastname);
  const [tel, setTel] = useState(props.me.phone);
  const [mail, setMail] = useState(props.me.email);


  // if (loading) {
  //   return (
  //     <div style={{display : "flex", justifyContent : "center", alignItems : "center", width : "100%", color : "lightgray"}}>
  //       <FaSyncAlt className="loadContainer"/>
  //     </div>
  //   )
  // } else if (error || data.me.role !== "ADMIN") {
  //   console.log(error);
  //   return (
  //     <div style={{display : "flex", justifyContent : "center", alignItems : "center", width : "100%", color : "lightgray"}}>
  //       <p>Une erreur s'est produite lors du chargement des données ou alors vous n'avez pas les droits nécessaires.</p>
  //     </div>
  //   )
  // } else if (data) {
  //   if (data.me.role !== "ADMIN") {
  //     return (
  //       <div style={{display : "flex", justifyContent : "center", alignItems : "center", width : "100%", color : "lightgray"}}>
  //         <p>Vous n'avez pas accès à ces informations.</p>
  //       </div>
  //     )
  //   }
    return (
      <Container fluid>
        <Form.Group>
          <Form.Label>Nom</Form.Label>
          <Form.Control type="email" placeholder={props.me.firstname} onChange={e => setFirstName(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Prénom</Form.Label>
          <Form.Control type="email" placeholder={props.me.lastname} onChange={e => setLastName(e.target.value)}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Téléphone</Form.Label>
          <Form.Control type="email" placeholder={props.me.phone} onChange={e => setTel(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Mail</Form.Label>
          <Form.Control type="email" style={{color : "red !important"}} placeholder={props.me.email} onChange={e => setMail(e.target.value)}/>
        </Form.Group>
        <Modal.Footer>
          <Button className="closeModalBtnAdmin" onClick={props.handleClose}>
            Fermer
          </Button>
          <ValidateInfosUser data={props.me} newmail={mail} newfirstname={firstName} newlastname={lastName} newphone={tel}/>
        </Modal.Footer>
      </Container>
    )
  // }
};

function LogoutModal  (props)  {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="profileInfosUpdateUserAdm">
        <FaPen className="updateUserInfoIconAdm" onClick={handleShow} />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifiez vos informations personnelles.</Modal.Title>
        </Modal.Header>
          <UpdateInfosUser me={props.me} handleClose={handleClose}/>
      </Modal>
    </div>
  );
}

const GetMe = () => {
  const { data, error, loading} = useQuery(ME);

  if (loading) {
    return (
      <div style={{display : "flex", justifyContent : "center", alignItems : "center", width : "100%", color : "lightgray"}}>
        <FaSyncAlt className="loadContainer"/>
      </div>
    )
  } else if (error /*|| data.me.role !== "ADMIN"*/) {
    console.log(error);
    return (
      <div style={{display : "flex", justifyContent : "center", alignItems : "center", width : "100%", color : "lightgray"}}>
        <p>Une erreur s'est produite lors du chargement des données ou alors vous n'avez pas les droits nécessaires.</p>
      </div>
    )
  } else if (data) {
    // if (data.me.role !== "ADMIN") {
    //   return (
    //     <div style={{display : "flex", justifyContent : "center", alignItems : "center", width : "100%", color : "lightgray"}}>
    //       <p>Vous n'avez pas accès à ces informations.</p>
    //     </div>
    //   )
    // }
    let date = dateFormat(data.me.birthDate, "dd/mm/yyyy")
    return (
      <Container fluid>
        <Row>
          <Col xs={12} sm={5}>
            <div className="profileInfosPictureAdm"></div>
          </Col>
          <Col xs={12} sm={5}>
            <div className="profileInfosUserAdm">
              <div className="fieldUser">
                <div className="fieldUserTitle">Nom de famille : </div>
                <div className="fieldUserInfoAdm">{data.me.firstname}</div>
              </div>
              <div className="fieldUser">
                <div className="fieldUserTitle">Prénom : </div>
                <div className="fieldUserInfoAdm">{data.me.lastname}</div>
              </div>
              <div className="fieldUser">
                <div className="fieldUserTitle">Téléphone : </div>
                <div className="fieldUserInfoAdm">{data.me.phone}</div>
              </div>
              <div className="fieldUser">
                <div className="fieldUserTitle">E-mail : </div>
                <div className="fieldUserInfoAdm">{data.me.email}</div>
              </div>
              <div className="fieldUser">
                <div className="fieldUserTitle">Né(e) le : </div>
                <div className="fieldUserInfoAdm">{date}</div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={2}>
            <LogoutModal me={data.me}/>
          </Col>
        </Row>
      </Container>
    )
  }
};

class ProfileInfos extends React.Component {

  render() {
    return (
      <Container fluid className="profileInfosContainer shadow">
        <Row style={{height : "100%"}}>
          <GetMe/>
        </Row>
      </Container>
    );
  }
}



export default ProfileInfos;
