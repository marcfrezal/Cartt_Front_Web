import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ProfileInfos.css'
import { FaEdit } from "react-icons/fa";
import { Modal, Form, Button } from "react-bootstrap";

class ProfileInfos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstname: "firstname",
      lastname: "lastname",
      email: "email@email.com",
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
      <Container fluid className="profileInfosContainer shadow"
        style={{ marginBottom: 10 }}>

        <Row >
          <Col xs={10} className="profileInfosTitle">
          /* Informations Personel: */
          </Col>
          <Col xs={2} className="profileEditRow">
            <FaEdit className="profileEdit"
              onClick={() => this._showUpdateProfileInfosModal()} />
          </Col>
          
        </Row>

        <Row >
          <Col xs={12} sm={5} md={4} lg={3} xl={2}
            className='profileInfosPictureCol'>
            <div className="profileInfosPicture">
              Brand Photo
            </div>
          </Col>

          <Col xs={12} sm={7} md={8} lg={9} xl={10}
            className='profileInfosCol'>
            <div className="profileName">
              {this.state.firstname} {this.state.lastname}
            </div>
            <div className="profileInfo">{this.state.email}</div>
            <div className="profileInfo">{this.state.birthdate}</div>
            <div className="profileInfo">{this.state.phone_number}</div>
          </Col>
        </Row>

        <this.UpdateProfileInfosModal
          show={this.state.profile_info_show}
          item={this.state}
          onHide={() => this._hideUpdateProfileInfosModal()}/>
      </Container>
    );
  }

  UpdateProfileInfosModal(props) {
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

          <Form.Row>
          <Form.Group xs={12} sm={4} as={Col} controlId="formGridText">
            <Form.Label>Prénom :</Form.Label>
            <Form.Control className="posModalInput"
              placeholder={props.item.firstname} />
          </Form.Group>

          <Form.Group xs={12} sm={4} as={Col} controlId="formGridText">
            <Form.Label>Nom :</Form.Label>
            <Form.Control className="posModalInput"
              placeholder={props.item.lastname} />
          </Form.Group>

          <Form.Group xs={12} sm={4} as={Col} controlId="formGridBirthdate">
            <Form.Label>Date de naissance :</Form.Label>
            <Form.Control className="posModalInput"
              placeholder={props.item.birthdate} />
          </Form.Group>

          </Form.Row>

          <Form.Group controlId="email">
            <Form.Label>Email :</Form.Label>
            <Form.Control className="posModalInput"
              placeholder={props.item.email} />
          </Form.Group>

          <Form.Group controlId="formGridPhone">
            <Form.Label>Téléphone :</Form.Label>
            <Form.Control className="posModalInput"
              placeholder={props.item.phone_number} />
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


export default ProfileInfos;
