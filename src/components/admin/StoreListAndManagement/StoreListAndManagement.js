import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './StoreListAndManagement.css';
import { GETALLBRANDS, SUPPBRAND, UPDATEBRAND } from '../../../API/brands/brands';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { FaSyncAlt, FaPen, FaTrash } from "react-icons/fa";
import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const BrandList = () => {
  const { data, error, loading} = useQuery(GETALLBRANDS);

  if (loading) {
    return (
      <div >
        <FaSyncAlt className="loadContainer"/>
      </div>
    )
  } else if (error) {
    return (
      <div className="errorContainer">
        <p>Une erreur s'est produite lors du chargement des données.</p>
      </div>
    )
  } else if (data && data.getBrands.length !== 0) {
    return (
      <div>
        {data.getBrands.map((pos, index) => (
          <Container className="containerBrandItem" fluid>
            <Row style={{height : "100%"}}>
              <Col xs={12} md={2}>
              </Col>
              <Col xs={12} md={9}>
                <Row className="brandIdText">
                  <div>ID :&nbsp;</div>
                  <div className="brandInfos" >{pos._id}</div>
                </Row>
                <Row className="brandNameText">
                  <div>Nom :&nbsp;</div>
                  <div className="brandInfos" >{pos.name}</div>
                </Row>
                <Row className="brandDescriptionText">
                  <div>Description :&nbsp;</div>
                  <div className="brandInfosDesc" >{pos.description}</div>
                </Row>
              </Col>
              <Col xs={12} md={1}>
                <Row style={{display : "flex", alignItems : "center", height : "50%"}}>

                </Row>
                <Row style={{display : "flex", alignItems : "center", height : "50%"}}>

                </Row>
              </Col>
            </Row>
          </Container>
        ))}
      </div>
    )
  }
  else {
    return (
      <div className="errorContainer">
        <p>Pas de marques enregistrées.</p>
      </div>
    )
  }
};

class StoreListAndManagement extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container fluid className="storeListAdmContainer shadow">
        <Row style={{width : "100%"}}>
          <Col>
            {/* <BrandList/> */}
          </Col>
        </Row>
      </Container>
    );
  }
}




export default StoreListAndManagement;