import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ProfilePage.css'
import Header from '../../../components/pro/Header/Header'
import Sidebar from "../../../components/common/Sidebar/Sidebar";
import ProfileInfos from "./ProfileInfos/ProfileInfos";
import InfosStoreEnseigne from "./InfosStoreEnseigne/InfosStoreEnseigne";
import { Button, Modal, Form } from "react-bootstrap";
import { Formik } from 'formik';
import * as yup from 'yup';

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modify_password_show: false,
    };
  }

  _showModifyPasswordModal = () => {
    this.setState({ modify_password_show: true });
  }

  _hideModifyPasswordModal = () => {
    this.setState({ modify_password_show: false });
  }

  render() {
    return (
      <Container fluid style={{ backgroundColor: "#f9fafd" }}>
        <Sidebar />
        <Row>
          <Col xs={1} lg={1} />
          <Col xs={11} lg={11}>

            <Header
              title='Profil'
              actionTitle='Modifier mon mot de passe'
              onPress={() => this._showModifyPasswordModal()}
            />
            <div style={{ height: 20 }} />
            <ProfileInfos />
            {/* A voir avec les dimention des carré comment on les met #Container */}
            <InfosStoreEnseigne />

          </Col>
        </Row>
        <this.ModifyPasswordModal
          show={this.state.modify_password_show}
          onHide={() => this._hideModifyPasswordModal()} />
      </Container>
    );
  }

  ModifyPasswordModal(props) {


    const schema = yup.object().shape({
      actual_pwd: yup.string().required(),
      new_pwd: yup.string().required(),
      confirm_new_pwd: yup.string().required(),
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
            Modifiez votre mot de passe :
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Formik
            validationSchema={schema}
            initialValues={{
              actual_pwd: "",
              new_pwd: "",
              confirm_new_pwd: "",
            }}
            onSubmit={(values, actions) => {
              actions.setSubmitting(true);
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.resetForm({
                  actual_pwd: "",
                  new_pwd: "",
                  confirm_new_pwd: "",
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

          <Form.Group controlId="actual_pwd">
            <Form.Label>Mot de passe actuel :</Form.Label>
            <Form.Control className="posModalInput"
              type="password"
              onChange={handleChange}
              name="actual_pwd"
              value={values.actual_pwd}
              onBlur={handleBlur}
              isValid={touched.actual_pwd && !errors.actual_pwd}
              isInvalid={!!errors.actual_pwd} />
          </Form.Group>

          <Form.Group controlId="formGridPhone">
            <Form.Label>Nouveau mot de passe :</Form.Label>
            <Form.Control className="posModalInput"
              type="password"
              onChange={handleChange}
              name="new_pwd"
              value={values.new_pwd}
              onBlur={handleBlur}
              isValid={touched.new_pwd && !errors.new_pwd}
              isInvalid={!!errors.new_pwd} />
          </Form.Group>

          <Form.Group controlId="formGridPhone">
            <Form.Label>Confirmez nouveau mot de passe :</Form.Label>
            <Form.Control className="posModalInput"
              type="password"
              onChange={handleChange}
              name="comfirm_new_pwd"
              value={values.comfirm_new_pwd}
              onBlur={handleBlur}
              isValid={touched.comfirm_new_pwd && !errors.comfirm_new_pwd}
              isInvalid={!!errors.comfirm_new_pwd} />
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


export default Profile;
