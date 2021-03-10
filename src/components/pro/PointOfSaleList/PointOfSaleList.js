import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PointOfSaleList.css'
import { ListGroup } from "react-bootstrap";
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

  renderItem(pos) {
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
            <FaTrash />            
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
        <ListGroup className="posList">
          {point_of_sales.map(pos => this.renderItem(pos))}
        </ListGroup>
      </Container>
    );
  }
}


export default PointOfSale;