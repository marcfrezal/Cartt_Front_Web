import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './InfosStoreEnseigne.css'

class InfosStoreEnseigne extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container fluid className="infosStoreEnseigneContainer">
        <Row >
          <Col xs={12} sm={6} className="infoStoreEnseignCol">
            {this.renderItem("Point de vente", "0")}

          </Col>
          <Col xs={12} sm={6} className="infoStoreEnseignCol">
            {this.renderItem("Enseignes" ,"1")}
          </Col>
        </Row>
      </Container>
    );
  }

  renderItem(title, number) {
    return (
      <div className="shadow infoStoreEnseignCard">
        <div className="infosStoreEnsigneCenter">
          <div className="infosItemTitle">{title}</div>
          <div className="infosItemNumber">{number}</div>
        </div>
      </div>
    )
  }
}


export default InfosStoreEnseigne;
