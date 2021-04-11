import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './InfosStoreEnseigne.css'
import { useMutation, useQuery } from '@apollo/react-hooks';
import {GETALLSTORESFORCOUNTING} from '../../../../API/stores/stores'
import {GETALLBRANDSFORCOUNTING} from '../../../../API/brands/brands'
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
    console.log(data.getStores);
    return (
      <div className="shadow infoStoreEnseignCard">
        <div className="infosStoreEnsigneCenter">
          <div className="infosItemTitle">Points de vente</div>
          <div className="infosItemNumber">{data.getStores.length}</div>
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
  const { data, error, loading} = useQuery(GETALLBRANDSFORCOUNTING);

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
    console.log(data.getBrands);
    return (
      <div className="shadow infoStoreEnseignCard">
        <div className="infosStoreEnsigneCenter">
          <div className="infosItemTitle">Enseignes</div>
          <div className="infosItemNumber">{data.getBrands.length}</div>
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

class InfosStoreEnseigne extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container fluid className="infosStoreEnseigneContainer">
        <Row className="rowProfilInfosItemsPro">
          <Col className="infoStoreEnseignCol">
            <GetStores/>
          </Col>
          <Col className="infoStoreEnseignCol">
            <GetBrands/>
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
