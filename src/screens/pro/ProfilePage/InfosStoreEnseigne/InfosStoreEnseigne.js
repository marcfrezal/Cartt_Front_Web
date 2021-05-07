import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './InfosStoreEnseigne.css'
import { useMutation, useQuery } from '@apollo/react-hooks';
import {GETALLSTORESFORCOUNTING} from '../../../../API/stores/stores'
import {GETALLBRANDSFORCOUNTING} from '../../../../API/brands/brands'
import {ME} from '../../../../API/users/users'
import { FaSyncAlt} from 'react-icons/fa';

const GetStores = () => {
  const { data, error, loading} = useQuery(GETALLSTORESFORCOUNTING);

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
  } else if (data && data.getStores.length !== 0) {
    return (
      <div className="shadow pro-infoStoreEnseignCard">
        <div className="pro-infosStoreEnsigneCenter">
          <div className="pro-infosItemTitle">Points de vente</div>
          <div className="pro-infosItemNumber">{data.getStores.length}</div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="errorContainer">
        <p>Vous n'avez aucuns magasins enregistrés.</p>
      </div>
    )
  }
};

const GetBrands = () => {
  const { data, error, loading} = useQuery(ME);

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
  } else if (data && data.me.brands.length !== 0) {
    return (
      <div className="shadow pro-infoStoreEnseignCard">
        <div className="pro-infosStoreEnsigneCenter">
          <div className="pro-infosItemTitle">Enseignes</div>
          <div className="pro-infosItemNumber">{data.me.brands.length}</div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="shadow pro-infoStoreEnseignCard">
        <div className="pro-infosStoreEnsigneCenter">
          <div className="pro-infosItemTitle">Enseignes</div>
          <div className="pro-infosItemNumber">0</div>
        </div>
      </div>
    )
  }
};

class InfosStoreEnseigne extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container fluid className="pro-infosStoreEnseigneContainer">
        <Row>
          <Col className="pro-infoStoreCol">
            <GetStores/>
          </Col>
          <Col className="pro-infosEnseigneCol ">
            <GetBrands/> 
          </Col>
        </Row>
      </Container>
    );
  }

  renderItem(title, number) {
    return (
      <div className="shadow pro-infoStoreEnseignCard">
        <div className="pro-infosStoreEnsigneCenter">
          <div className="pro-infosItemTitle">{title}</div>
          <div className="pro-infosItemNumber">{number}</div>
        </div>
      </div>
    )
  }
}


export default InfosStoreEnseigne;
