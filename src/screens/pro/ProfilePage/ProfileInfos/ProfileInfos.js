import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ProfileInfos.css'
import { FaEdit, FaSyncAlt } from "react-icons/fa";
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
            <div className="profileInfosPicture"/>
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
    this.state = {
      firstname: "Paul",
      lastname: "Vitry",
      email: "paul@email.com",
      birthdate: "31/12/1998",
      phone_number: "0698989898",
      profile_info_show: false,
    };
  }

  _showUpdateProfileInfosModal = () => {
    this.setState({ profile_info_show: true });
  }

  _hideUpdateProfileInfosModal = () => {
    this.setState({ profile_info_show: false });
  }

  

  render() {
    return (
      <Container fluid className="profileInfosContainer shadow">
        <Row style={{height : "100%"}}>
          <GetMe/>
        </Row>
        {/* <this.UpdateProfileInfosModal
          show={this.state.profile_info_show}
          item={this.state}
          onHide={() => this._hideUpdateProfileInfosModal()} /> */}
      </Container>
    );
  }

  UpdateProfileInfosModal(props) {

    const schema = yup.object().shape({
      firstname: yup.string().required(),
      lastname: yup.string().required(),
      email: yup.string().required(),
      birthdate: yup.string().required(),
      phone_number: yup.string().required(),
    });

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Informations Personel :
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Formik
            validationSchema={schema}
            initialValues={{
              firstname: props.item.firstname,
              lastname: props.item.lastname,
              email: props.item.email,
              birthdate: props.item.birthdate,
              phone_number: props.item.phone_number,
            }}
            onSubmit={(values, actions) => {
              actions.setSubmitting(true);
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.resetForm({
                  firstname: "",
                  lastname: "",
                  email: "",
                  birthdate: "",
                  phone_number: "",
                });
                actions.setSubmitting(false);
              }, 2000);
            }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              errors,
              isSubmitting,
            }) => (
                <Form noValidate onSubmit={handleSubmit}>

                  <Form.Row>
                    <Form.Group xs={12} sm={4} as={Col} controlId="formGridText">
                      <Form.Label>Prénom :</Form.Label>
                      <Form.Control className="posModalInput"
                        placeholder={props.item.firstname}
                        onChange={handleChange}
                        name="firstname"
                        value={values.firstname}
                        onBlur={handleBlur}
                        isValid={touched.firstname && !errors.firstname}
                        isInvalid={!!errors.firstname} />
                    </Form.Group>

                    <Form.Group xs={12} sm={4} as={Col} controlId="formGridText">
                      <Form.Label>Nom :</Form.Label>
                      <Form.Control className="posModalInput"
                        placeholder={props.item.lastname}
                        onChange={handleChange}
                        name="lastname"
                        value={values.lastname}
                        onBlur={handleBlur}
                        isValid={touched.lastname && !errors.lastname}
                        isInvalid={!!errors.lastname} />
                    </Form.Group>

                    <Form.Group xs={12} sm={4} as={Col} controlId="formGridBirthdate">
                      <Form.Label>Date de naissance :</Form.Label>
                      <Form.Control className="posModalInput"
                        placeholder={props.item.birthdate}
                        onChange={handleChange}
                        name="birthdate"
                        value={values.birthdate}
                        onBlur={handleBlur}
                        isValid={touched.birthdate && !errors.birthdate}
                        isInvalid={!!errors.birthdate} />
                    </Form.Group>

                  </Form.Row>

                  <Form.Group controlId="email">
                    <Form.Label>Email :</Form.Label>
                    <Form.Control className="posModalInput"
                      placeholder={props.item.email}
                      onChange={handleChange}
                      name="email"
                      value={values.email}
                      onBlur={handleBlur}
                      isValid={touched.email && !errors.email}
                      isInvalid={!!errors.email} />
                  </Form.Group>

                  <Form.Group controlId="formGridPhone">
                    <Form.Label>Téléphone :</Form.Label>
                    <Form.Control className="posModalInput"
                      placeholder={props.item.phone_number}
                      onChange={handleChange}
                      name="phone_number"
                      value={values.phone_number}
                      onBlur={handleBlur}
                      isValid={touched.phone_number && !errors.phone_number}
                      isInvalid={!!errors.phone_number} />
                  </Form.Group>

                  <Row>
                    <Button style={{ flex: 1 }}
                      className="cancel"
                      onClick={props.onHide}>Annuler</Button>
                    <Button style={{ flex: 1 }}
                      type='submit' disabled={isSubmitting}
                      className="validate">Valider</Button>
                  </Row>

                </Form>
              )}
          </Formik>

        </Modal.Body>
     
      </Modal>
    );
  }

}



export default ProfileInfos;
