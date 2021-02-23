import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CategoryBar.css'

var categories = ["Sport", "High-Tech", "Voyages", "Bien-être", "Mode", "Food", "Maison", "Luxe"]

class CategoryBar extends React.Component {

  renderItem(cat) {
    return (
      <Col>
        <div className="itemContainer">
        {cat}
        </div>
      </Col>
    )
  }
  
  render() {
    return (
      <Container className="container">
        <Row>
          {categories.map(cat => this.renderItem(cat))}
        </Row>
      </Container>
    );
  }
}


export default CategoryBar;