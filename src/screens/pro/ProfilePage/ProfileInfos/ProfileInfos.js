import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ProfileInfos.css'
import { FaEdit, FaSyncAlt, FaUser } from "react-icons/fa";
import { Modal, Form, Button } from "react-bootstrap";
import { Formik } from 'formik';
import * as yup from 'yup';
import { ME } from '../../../../API/users/users'
import { useQuery } from "@apollo/client";
import dateFormat from 'dateformat';

const GetMe = () => {
  const { data, error, loading} = useQuery(ME);

  if (loading) {
    return (
      <div style={{display : "flex", justifyContent : "center", alignItems : "center", width : "100%", color : "lightgray"}}>
        <FaSyncAlt className="loadContainer"/>
      </div>
    )
  } else if (error) {
    console.log(error)
    return (
      <div style={{display : "flex", justifyContent : "center", alignItems : "center", width : "100%", color : "lightgray"}}>
        <p>Une erreur s'est produite lors du chargement des données.</p>
      </div>
    )
  } else if (data) {
    let date = dateFormat(data.me.birthDate, "dd/mm/yyyy")
    console.log(data)
    return (
      <Container fluid>
        <Row>
          <Col xs={12} sm={12} md={5}>
            <div className="profileInfosPicture">
              <FaUser style={{fontSize : "20vh"}}/>
            </div>
          </Col>
          <Col xs={12} sm={12} md={7}>
            <div className="profileInfosUser">
              <div className="fieldUser">
                <div className="fieldUserTitle">Nom de famille : </div>
                <div className="fieldUserInfo">{data.me.firstname}</div>
              </div>
              <div className="fieldUser">
                <div className="fieldUserTitle">Prénom : </div>
                <div className="fieldUserInfo">{data.me.lastname}</div>
              </div>
              <div className="fieldUser">
                <div className="fieldUserTitle">Téléphone : </div>
                <div className="fieldUserInfo">{data.me.phone}</div>
              </div>
              <div className="fieldUser">
                <div className="fieldUserTitle">E-mail : </div>
                <div className="fieldUserInfo">{data.me.email}</div>
              </div>
              <div className="fieldUser">
                <div className="fieldUserTitle">Né(e) le : </div>
                <div className="fieldUserInfo">{date}</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
};

class ProfileInfos extends React.Component {

  constructor(props) {
    super(props);
  }


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
