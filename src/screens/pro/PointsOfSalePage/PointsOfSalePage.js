import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PointsOfSalePage.css'
import PointOfSaleList from '../../../components/pro/PointOfSaleList/PointOfSaleList';
import Sidebar from '../../../components/common/Sidebar/Sidebar';
import { Modal, Button, Form } from "react-bootstrap";
import Header from '../../../components/pro/Header/Header'
import { Formik } from 'formik';
import * as yup from 'yup';

// import StoreService from '../../../API/PointOfSaleApi'
// import { useMutation, useLazyQuery } from '@apollo/react-hooks';

class PointsOfSale extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      create_show: false,
      name: "",
      slogan: "",
      line1: "",
      line2: "",
      city: "",
      country: "",
      zip: "",

    };
  }

  _showCreateStoreModal = () => {
    this.setState({ create_show: true });
  }

  _hideCreateStoreModal = () => {
    this.setState({ create_show: false });
  }

  render() {
    return (
      <Container fluid style={{ height : "100vh", backgroundColor: "#f9fafd" }}>
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
          onHide={this._hideCreateStoreModal}
          // handleName={() => this._handleStoreName()}
          // handleSlogan={this._handleStoreSlogan}
          // handleLine1={this._handleStoreLine1}
          // handleLine2={this._handleStoreLine2}
          // handleCity={this._handleStoreCity}
          // handleCountry={this._handleStoreCountry}
          // handleZip={this._handleStoreZip}
          // createPos={this._createPointOfSale}
        />

      </Container>
    );
  }


  CreateStoreModal(props) {

    const schema = yup.object().shape({
      name: yup.string().required(),
      slogan: yup.string().required(),
      line1: yup.string().required(),
      line2: yup.string().required(),
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
            Nouveau point de vente :
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Formik
            validationSchema={schema}
            initialValues={{
              name: "",
              slogan: "",
              line1: "",
              line2: "",
              city: "",
              country: "",
              zip: "",
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
                props.onHide();
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
                  {/* {console.log(values)} */}
                  {/* Pourquoi pas mettre un nom public et privé */}
                  <Form.Group controlId="validationFormik01">
                    <Form.Label>Nom de la boutique</Form.Label>
                    <Form.Control className="posModalInput"
                      placeholder="Nom de la boutique"
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
                      placeholder="Faites vous plaisir chez ..."
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
                      placeholder="1234 Main St"
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
                      placeholder="Apartment, studio, or floor"
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
                        as="select" defaultValue="Choose..."
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
                        onChange={handleChange}
                        name="zip"
                        value={values.zip}
                        onBlur={handleBlur}
                        isValid={touched.zip && !errors.zip}
                        isInvalid={!!errors.zip}  />
                    </Form.Group>
                  </Form.Row>
                  <Row>
                    <Button style={{flex: 1}}
                      className="cancel"
                      onClick={props.onHide}>Annuler</Button>
                    <Button style={{flex: 1}} 
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



    // const _handleStoreName = (e) => {
    //   console.log("///////////////////////// handle name")
    //   this.setState({ name: e.target.value })
    // }
  
    // const _handleStoreSlogan = (e) => {
    //   this.setState({ slogan: e.target.value })
    // }
  
    // const _handleStoreLine1 = (e) => {
    //   this.setState({ line1: e.target.value })
    // }
  
    // const _handleStoreLine2 = (e) => {
    //   this.setState({ line2: e.target.value })
    // }
  
    // const _handleStoreCity = (e) => {
    //   this.setState({ city: e.target.value })
    // }
  
    // const _handleStoreCountry = (e) => {
    //   this.setState({ country: e.target.value })
    // }
  
    // const _handleStoreZip = (e) => {
    //   this.setState({ zip: e.target.value })
    // }
  
    // const _createPointOfSale = () => {
    //   this.setState({ create_show: false })
    //   console.log("//////////////////////// create")
    //   console.log(this.state)
    // }



export default PointsOfSale;
