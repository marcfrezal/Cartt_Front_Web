import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PointOfSaleList.css'
import { ListGroup, Button, Modal } from "react-bootstrap";
import StoreImage from '../../../assets/pro/card-background/card-bg-yellow.png'
import { FaEdit, FaTrash } from 'react-icons/fa';


var point_of_sales =  [
  {id: "123456", name: "Mon point de vente", location: {county: 'France', city:'Montpellier', postcode: '34000', address1: '23 Rue de Nul part', address2: ''}},
  {id: "123456", name: "Mon point de vente", location: {county: 'France', city:'Montpellier', postcode: '34000', address1: '23 Rue de Nul part', address2: ''}},
  {id: "123456", name: "Mon point de vente", location: {county: 'France', city:'Montpellier', postcode: '34000', address1: '23 Rue de Nul part', address2: ''}},
  {id: "123456", name: "Mon point de vente", location: {county: 'France', city:'Montpellier', postcode: '34000', address1: '23 Rue de Nul part', address2: ''}},
  {id: "123456", name: "Mon point de vente", location: {county: 'France', city:'Montpellier', postcode: '34000', address1: '23 Rue de Nul part', address2: ''}},

]

class PointOfSale extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      delete_show: false,
      delete_item: {
        id: "", 
        name: "",
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
    this.setState({ delete_show: true, delete_item: pos });
  }

  _hideDeleteStoreModal = () => {
    this.setState({ delete_show: false });
  }

  renderItem(pos, showModal) {
    return (
      <ListGroup.Item className="posListItemContainer shadow">
        <Row>
          <Col xs={12} md={2} style={{backgroundImage: "url(" + StoreImage + ")"}} className='posItemImage'/>
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
            <FaEdit />
          </Col>
        </Row>
      </ListGroup.Item>
    )
  }

  render() {
    return (
      <Container fluid>
        <ListGroup className="posList" onShow={() => this._showDeleteStoreModal()}>
          {point_of_sales.map(pos => this.renderItem(pos))}
        </ListGroup>
        <this.DeleteStoreModal 
          show={this.state.delete_show}
          onHide={this._hideDeleteStoreModal}
          item={this.state.delete_item}/>
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
}


export default PointOfSale;