import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PointOfSaleList.css'
import { ListGroup, Button, Modal, Form } from "react-bootstrap";
import StoreImage from '../../../assets/pro/card-background/card-bg-yellow.png'
import { FaEdit, FaTrash } from 'react-icons/fa';


var point_of_sales =  [
  {id: "123456", name: "Mon SUUPPPERRRRR pdv", location: {country: 'France', city:'Montpellier', postcode: '34000', address1: '23 Rue de la rue', address2: ''}},
  {id: "123456", name: "Mon point de vente", location: {country: 'France', city:'Montpellier', postcode: '34000', address1: '23 Rue de Nul part', address2: ''}},
  {id: "123456", name: "Mon point de vente", location: {country: 'France', city:'Montpellier', postcode: '34000', address1: '23 Rue de Nul part', address2: ''}},
  {id: "123456", name: "Mon point de vente", location: {country: 'France', city:'Montpellier', postcode: '34000', address1: '23 Rue de Nul part', address2: ''}},
  {id: "123456", name: "Mon point de vente", location: {country: 'France', city:'Montpellier', postcode: '34000', address1: '23 Rue de Nul part', address2: ''}},

]

class PointOfSale extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      delete_show: false,
      edit_show: false,
      item: {
        id: "", 
        name: "",
        slogan: "",
        location: {
          country: "",
          city: "",
          postcode: "",
          address1: "",
          address2: ""
        }
      },
    };
  }

  _showDeleteStoreModal = (pos) => {
    this.setState({ delete_show: true, item: pos });
  }

  _hideDeleteStoreModal = () => {
    this.setState({ delete_show: false });
  }

  _showEditStoreModal = (pos) => {
    this.setState({ edit_show: true, item: pos });
  }

  _hideEditStoreModal = () => {
    this.setState({ edit_show: false });
  }

  renderItem(pos, showModal) {
    return (
      <ListGroup.Item className="posListItemContainer shadow">
        <Row>
          <Col xs={12} md={2} 
            style={{backgroundImage: "url(" + StoreImage +
            ")"}} className='posItemImage'/>
          <Col xs={12} md={8}>
            <Row>
              <div className="posItemTitle">{pos.name}</div>
            </Row>
            <Row>
              <div className="posItemAddress">{pos.location.address1}, {pos.location.postcode} {pos.location.city}</div>
            </Row>
          </Col>
          <Col xs={6} md={1} className="posItemIcon">
              <FaTrash onClick={() => this._showDeleteStoreModal(pos)}/>   
          </Col>
          <Col xs={6} md={1} className="posItemIcon">
            <FaEdit onClick={() => this._showEditStoreModal(pos)}/>
          </Col>
        </Row>
      </ListGroup.Item>
    )
  }

  render() {
    return (
      <Container fluid>
        <ListGroup className="posList">
          {point_of_sales.map(pos => this.renderItem(pos))}
        </ListGroup>
        <this.DeleteStoreModal 
          show={this.state.delete_show}
          onHide={this._hideDeleteStoreModal}
          item={this.state.item}/>
        <this.EditStoreModal 
          show={this.state.edit_show}
          onHide={this._hideEditStoreModal}
          item={this.state.item}/>
      </Container>
    );
  }

  DeleteStoreModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Etes-vous sûr de vouloir supprimer ce point de vente ?
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Container className="posListItemContainer shadow">
        <Row>
          <Col xs={12} md={2} style={{backgroundImage: "url(" + StoreImage + ")"}} className='posItemImage'/>
          <Col xs={12} md={8}>
            <Row>
              <div className="posItemTitle">{props.item.name}</div>
            </Row>
            <Row>
              {console.log(props.item.location)}
              <div className="posItemAddress">{props.item.location.address1}, {props.item.location.postcode} {props.item.location.city}</div>
            </Row>
          </Col>
        </Row>
        </Container>

        </Modal.Body>
        <Modal.Footer>
          <Button as={Col} className="cancel">Annuler</Button>
          <Button as={Col} className="validate"
            onClick={props.onHide}>Supprimer</Button>
        </Modal.Footer>
      </Modal>
    )
  }

  EditStoreModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modifier mon point de vente :
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          {/* Pourquoi pas mettre un nom public et privé */}
          <Form.Group controlId="formGridText">
            <Form.Label>Nom de la boutique</Form.Label>
            <Form.Control className="posModalInput"
              placeholder={props.item.name} />
          </Form.Group>

          <Form.Group controlId="formGridText">
            <Form.Label>Slogan</Form.Label>
            <Form.Control className="posModalInput"
              placeholder={props.item.slogan} />
          </Form.Group>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control className="posModalInput"
              placeholder={props.item.location.address1} />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control className="posModalInput"
              placeholder={props.item.location.address2} />
          </Form.Group>

          <Form.Row>
            <Form.Group xs={12} sm={4} as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control className="posModalInput"
              placeholder={props.item.location.city} />
            </Form.Group>

            <Form.Group xs={12} sm={4} as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control className="posModalInput"
                as="select" defaultValue={props.item.location.country}>
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group xs={12} sm={4} as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control className="posModalInput"
              placeholder={props.item.location.postcode} />
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


export default PointOfSale;