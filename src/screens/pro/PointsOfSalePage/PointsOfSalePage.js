import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PointsOfSalePage.css'
import PointOfSaleList from '../../../components/pro/PointOfSaleList/PointOfSaleList';
import Sidebar from '../../../components/common/Sidebar/Sidebar';
import { Modal, Button } from "react-bootstrap";
import Header from '../../../components/pro/Header/Header'


class PointsOfSale extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  showCreateStoreModal = () => {
    // console.log("/////////////////// show")
    // this.setState({show: true});
  }

  hideCreateStoreModal = () => {
    this.setState({ show: false });
  }

  render() {
    return (
      <Container fluid style={{ backgroundColor: "#f9fafd" }}>
        <Sidebar />

        <Row>
          <Col xs={1} lg={1}></Col>
          <Col xs={11} lg={11}>
            <Header
              title="Mes points de ventes"
              actionTitle="Créer un point de vente"
              onPress={() => this.showCreateStoreModal()} />
            <PointOfSaleList />
          </Col>
        </Row>

        <this.CreateStoreModal
          show={this.state.show}
          onHide={() => this.hideCreateStoreModal()}
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
            Modal heading
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
            </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

}





export default PointsOfSale;
