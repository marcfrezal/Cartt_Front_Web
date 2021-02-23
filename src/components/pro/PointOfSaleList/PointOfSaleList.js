import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PointOfSaleList.css'

var point_of_sales =  [
  {id: "123456", name: "Mon point de vente", location: {county: 'France', city:'Montpellier', postcode: '34000', address1: '23 Rue de Nul part', address2: ''}},
  {id: "123456", name: "Mon point de vente", location: {county: 'France', city:'Montpellier', postcode: '34000', address1: '23 Rue de Nul part', address2: ''}},
  {id: "123456", name: "Mon point de vente", location: {county: 'France', city:'Montpellier', postcode: '34000', address1: '23 Rue de Nul part', address2: ''}},
  {id: "123456", name: "Mon point de vente", location: {county: 'France', city:'Montpellier', postcode: '34000', address1: '23 Rue de Nul part', address2: ''}},
  {id: "123456", name: "Mon point de vente", location: {county: 'France', city:'Montpellier', postcode: '34000', address1: '23 Rue de Nul part', address2: ''}},
  {id: "123456", name: "Mon point de vente", location: {county: 'France', city:'Montpellier', postcode: '34000', address1: '23 Rue de Nul part', address2: ''}},
  {id: "123456", name: "Mon point de vente", location: {county: 'France', city:'Montpellier', postcode: '34000', address1: '23 Rue de Nul part', address2: ''}},
  {id: "123456", name: "Mon point de vente", location: {county: 'France', city:'Montpellier', postcode: '34000', address1: '23 Rue de Nul part', address2: ''}},
  {id: "123456", name: "Mon point de vente", location: {county: 'France', city:'Montpellier', postcode: '34000', address1: '23 Rue de Nul part', address2: ''}},
  {id: "123456", name: "Mon point de vente", location: {county: 'France', city:'Montpellier', postcode: '34000', address1: '23 Rue de Nul part', address2: ''}},
  {id: "123456", name: "Mon point de vente", location: {county: 'France', city:'Montpellier', postcode: '34000', address1: '23 Rue de Nul part', address2: ''}},
  {id: "123456", name: "Mon point de vente", location: {county: 'France', city:'Montpellier', postcode: '34000', address1: '23 Rue de Nul part', address2: ''}},
  {id: "123456", name: "Mon point de vente", location: {county: 'France', city:'Montpellier', postcode: '34000', address1: '23 Rue de Nul part', address2: ''}},
  {id: "123456", name: "Mon point de vente", location: {county: 'France', city:'Montpellier', postcode: '34000', address1: '23 Rue de Nul part', address2: ''}},
  {id: "123456", name: "Mon point de vente", location: {county: 'France', city:'Montpellier', postcode: '34000', address1: '23 Rue de Nul part', address2: ''}},
  {id: "123456", name: "Mon point de vente", location: {county: 'France', city:'Montpellier', postcode: '34000', address1: '23 Rue de Nul part', address2: ''}},
  {id: "123456", name: "Mon point de vente", location: {county: 'France', city:'Montpellier', postcode: '34000', address1: '23 Rue de Nul part', address2: ''}},
  {id: "123456", name: "Mon point de vente", location: {county: 'France', city:'Montpellier', postcode: '34000', address1: '23 Rue de Nul part', address2: ''}},
  {id: "123456", name: "Mon point de vente", location: {county: 'France', city:'Montpellier', postcode: '34000', address1: '23 Rue de Nul part', address2: ''}},
  {id: "123456", name: "Mon point de vente", location: {county: 'France', city:'Montpellier', postcode: '34000', address1: '23 Rue de Nul part', address2: ''}},
  {id: "123456", name: "Mon point de vente", location: {county: 'France', city:'Montpellier', postcode: '34000', address1: '23 Rue de Nul part', address2: ''}},
]

class PointOfSale extends React.Component {

  renderItem(pos) {
    return (
      <Row className="itenContainer">
        <Col md={1}/>
        <Col md={6}>
          <Row>{pos.name}</Row>
          <Row>{pos.location.address1}, {pos.location.postcode} {pos.location.city}</Row>
        
        </Col>
        <Col md={1} />
      </Row>
    )
  }

  render() {
    return (
      <Container fluid>
        <Row >
          <Col>Mes points de ventes :</Col>
        </Row>
        {point_of_sales.map(pos => this.renderItem(pos))}
      </Container>
    );
  }
}


export default PointOfSale;