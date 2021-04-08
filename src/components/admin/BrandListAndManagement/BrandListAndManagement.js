import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './BrandListAndManagement.css';

class BrandListAndManagement extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container fluid className="brandListAdmContainer shadow">
        <Row>
          <Col>
            Pas de marques enregistrées.
          </Col>
        </Row>
      </Container>
    );
  }
}




export default BrandListAndManagement;