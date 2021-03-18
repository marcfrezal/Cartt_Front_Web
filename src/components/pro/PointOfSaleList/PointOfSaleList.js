import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PointOfSaleList.css'
import { ListGroup, Button, Modal, Form } from "react-bootstrap";
import StoreImage from '../../../assets/pro/card-background/card-bg-yellow.png'
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Formik } from 'formik';
import * as yup from 'yup';


var point_of_sales = [
  { id: "123456", name: "Mon SUUPPPERRRRR pdv", slogan: "Mon super slogan", location: { country: 'France', city: 'Montpellier', postcode: '34000', address1: '23 Rue de la rue', address2: '' } },
  { id: "123456", name: "Mon point de vente", location: { country: 'France', city: 'Montpellier', postcode: '34000', address1: '23 Rue de Nul part', address2: '' } },
  { id: "123456", name: "Mon point de vente", location: { country: 'France', city: 'Montpellier', postcode: '34000', address1: '23 Rue de Nul part', address2: '' } },
  { id: "123456", name: "Mon point de vente", location: { country: 'France', city: 'Montpellier', postcode: '34000', address1: '23 Rue de Nul part', address2: '' } },
  { id: "123456", name: "Mon point de vente", location: { country: 'France', city: 'Montpellier', postcode: '34000', address1: '23 Rue de Nul part', address2: '' } },

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
            style={{
              backgroundImage: "url(" + StoreImage +
                ")"
            }} className='posItemImage' />
          <Col xs={12} md={8}>
            <Row>
              <div className="posItemTitle">{pos.name}</div>
            </Row>
            <Row>
              <div className="posItemAddress">{pos.location.address1}, {pos.location.postcode} {pos.location.city}</div>
            </Row>
          </Col>
          <Col xs={6} md={1} className="posItemIcon">
            <FaTrash onClick={() => this._showDeleteStoreModal(pos)} />
          </Col>
          <Col xs={6} md={1} className="posItemIcon">
            <FaEdit onClick={() => this._showEditStoreModal(pos)} />
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
          item={this.state.item} />
        <this.EditStoreModal
          show={this.state.edit_show}
          onHide={this._hideEditStoreModal}
          item={this.state.item} />
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
              <Col xs={12} md={2} style={{ backgroundImage: "url(" + StoreImage + ")" }} className='posItemImage' />
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


    const schema = yup.object().shape({
      name: yup.string().required(),
      slogan: yup.string().required(),
      line1: yup.string().required(),
      line2: yup.string(),
      city: yup.string().required(),
      country: yup.string(),
      zip: yup.string().required(),
    });


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

          <Formik
            validationSchema={schema}
            initialValues={{
              name: props.item.name,
              slogan: props.item.slogan,
              line1: props.item.location.address1,
              line2: props.item.location.address2,
              city: props.item.location.city,
              country: props.item.location.country,
              zip: props.item.location.postcode,
            }}
            onSubmit={(values, actions) => {
              actions.setSubmitting(true);
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.resetForm({
                  name: "",
                  slogan: "",
                  line1: "",
                  line2: "",
                  city: "",
                  country: "",
                  zip: "",
                });
                actions.setSubmitting(false);
              }, 2000);
            }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              errors,
              isSubmitting,
            }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  {/* Pourquoi pas mettre un nom public et privé */}
                  <Form.Group controlId="validationFormik01">
                    <Form.Label>Nom de la boutique</Form.Label>
                    <Form.Control className="posModalInput"
                      placeholder={values.name}
                      onChange={handleChange}
                      name="name"
                      value={values.name}
                      onBlur={handleBlur}
                      isValid={touched.name && !errors.name}
                      isInvalid={!!errors.name} />
                  </Form.Group>

                  <Form.Group controlId="validationFormik02">
                    <Form.Label>Slogan</Form.Label>
                    <Form.Control className="posModalInput"
                      placeholder={values.slogan}
                      onChange={handleChange}
                      name="slogan"
                      value={values.slogan}
                      onBlur={handleBlur}
                      isValid={touched.slogan && !errors.slogan}
                      isInvalid={!!errors.slogan}  />
                  </Form.Group>

                  <Form.Group controlId="validationFormik03">
                    <Form.Label>Address</Form.Label>
                    <Form.Control className="posModalInput"
                      placeholder={values.line1}
                      onChange={handleChange}
                      name="line1"
                      value={values.line1}
                      onBlur={handleBlur}
                      isValid={touched.line1 && !errors.line1}
                      isInvalid={!!errors.line1}  />
                  </Form.Group>

                  <Form.Group controlId="validationFormik04">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control className="posModalInput"
                      placeholder={values.line2}
                      onChange={handleChange}
                      name="line2"
                      value={values.line2}
                      onBlur={handleBlur}
                      isValid={touched.line2 && !errors.line2}
                      isInvalid={!!errors.line2}  />
                  </Form.Group>

                  <Form.Row>
                    <Form.Group xs={12} sm={4} as={Col} controlId="validationFormik05">
                      <Form.Label>City</Form.Label>
                      <Form.Control className="posModalInput"
                        placeholder={values.city}
                        onChange={handleChange}
                        name="city"
                        value={values.city}
                        onBlur={handleBlur}
                        isValid={touched.city && !errors.city}
                        isInvalid={!!errors.city}  />
                    </Form.Group>

                    <Form.Group xs={12} sm={4} as={Col} controlId="validationFormik06">
                      <Form.Label>State</Form.Label>
                      <Form.Control className="posModalInput"
                        as="select" defaultValue={values.country}
                        onChange={handleChange}
                        name="country"
                        value={values.country}
                        onBlur={handleBlur}
                        isValid={touched.country && !errors.country}
                        isInvalid={!!errors.country} >
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group xs={12} sm={4} as={Col} controlId="validationFormik07">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control className="posModalInput"
                        placeholder={values.zip}
                        onChange={handleChange}
                        name="zip"
                        value={values.zip}
                        onBlur={handleBlur}
                        isValid={touched.zip && !errors.zip}
                        isInvalid={!!errors.zip}  />
                    </Form.Group>
                  </Form.Row>
                  <Row>
                    <Button style={{ flex: 1 }}
                      className="cancel"
                      onClick={props.onHide}>Annuler</Button>
                    <Button style={{ flex: 1 }}
                      type='submit' disabled={isSubmitting}
                      className="validate">Valider</Button>
                  </Row>

                </Form>
              )}
          </Formik>

        </Modal.Body>
      </Modal>
    );
  }

}


export default PointOfSale;