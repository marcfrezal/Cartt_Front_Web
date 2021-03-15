import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PointsOfSalePage.css'
import PointOfSaleList from '../../../components/pro/PointOfSaleList/PointOfSaleList';
import Sidebar from '../../../components/common/Sidebar/Sidebar';
import { Modal, Button, Form } from "react-bootstrap";
import Header from '../../../components/pro/Header/Header'
import StoreImage from '../../../assets/pro/card-background/card-bg-yellow.png'
import { FaEdit } from "react-icons/fa";


class PointsOfSale extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      create_show: false,
      name: "",
      line1: "",
      city: "",
      country: "",
      hours: "",
    };
  }

  _showCreateStoreModal = () => {
    this.setState({ create_show: true });
  }

  _hideCreateStoreModal = () => {
    this.setState({ create_show: false });
  }

  _handleStoreName = (e) => {
    this.setState({ name: e.target.value })
  }



  render() {
    return (
      <Container fluid style={{ backgroundColor: "#f9fafd" }}>
        <Sidebar />

        <Row>
          <Col xs={1} lg={1}></Col>
          <Col xs={11} lg={11}>
            <Header
              title="Mes points de vente"
              actionTitle="Créer un point de vente"
              onPress={() => this._showCreateStoreModal()} />
            <PointOfSaleList />
          </Col>
        </Row>

        <this.CreateStoreModal
          show={this.state.create_show}
          onHide={() => this._hideCreateStoreModal()}
        />

      </Container>
    );
  }


  CreateStoreModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Nouveau point de vente :
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          {/* Pourquoi pas mettre un nom public et privé */}
          <Form.Group controlId="formGridText">
            <Form.Label>Nom de la boutique</Form.Label>
            <Form.Control className="posModalInput"
              placeholder="Nom de la boutique" />
          </Form.Group>

          <Form.Group controlId="formGridText">
            <Form.Label>Slogan</Form.Label>
            <Form.Control className="posModalInput"
              placeholder="Faites vous plaisir chez ..." />
          </Form.Group>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control className="posModalInput"
              placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control className="posModalInput"
              placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Form.Row>
            <Form.Group xs={12} sm={4} as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control className="posModalInput" />
            </Form.Group>

            <Form.Group xs={12} sm={4} as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control className="posModalInput"
                as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group xs={12} sm={4} as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control className="posModalInput" />
            </Form.Group>
          </Form.Row>

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





export default PointsOfSale;
