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

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modify_password_show: false,
    };
  }

  _showModifyPasswordModal = () => {
    this.setState({modify_password_show: true});
  }

  _hideModifyPasswordModal = () => {
    this.setState({modify_password_show: false});
  }

  render() {
    return (
      <Container fluid style={{ backgroundColor: "#f9fafd" }}>
        <Sidebar />
        <Row>
          <Col xs={1} lg={1}/>
          <Col xs={11} lg={11}>

            <Header
              title='Profil'
              actionTitle='Modifier mon mot de passe'
              onPress={() => this._showModifyPasswordModal()}
               />
            <div style={{height: 20}}/>
            <ProfileInfos/>
            {/* A voir avec les dimention des carré comment on les met #Container */}
            <InfosStoreEnseigne/>

          </Col>
        </Row>
        <this.ModifyPasswordModal
          show={this.state.modify_password_show}
          onHide= {() => this._hideModifyPasswordModal()} />
      </Container>
    );
  }

  ModifyPasswordModal(props) {
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

          <Form.Group controlId="email">
            <Form.Label>Mot de passe actuel :</Form.Label>
            <Form.Control className="posModalInput"
              type="password" />
          </Form.Group>

          <Form.Group controlId="formGridPhone">
            <Form.Label>Nouveau mot de passe :</Form.Label>
            <Form.Control className="posModalInput"
              type="password" />
          </Form.Group>

          <Form.Group controlId="formGridPhone">
            <Form.Label>Confirmez ouveau mot de passe :</Form.Label>
            <Form.Control className="posModalInput"
              type="password" />
          </Form.Group>

        </Modal.Body>
        <Modal.Footer>

          <Button as={Col} className="cancel">Annuler</Button>
          <Button as={Col} className="validate"
            onClick={props.onHide}>Valider</Button>
        </Modal.Footer>
      </Modal>
    );
  }

}


export default Profile;
