import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PointOfSaleList.css'
import { useQuery } from '@apollo/react-hooks';
import {GETALLSTORES} from '../../../API/stores/stores';
import { FaSyncAlt, FaHome} from 'react-icons/fa';


const PosList = () => {
  const { data, error, loading} = useQuery(GETALLSTORES);

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
      <div className="containerStoresList" >
        {data.getStores.map((pos, index) => (
          <Container  fluid className="posListItemContainer">
              <Row style={{height : "100%"}}>
                <Col xs={12} md={2} className="colListStorePic">
                  <FaHome className="storesIcons"/>
                </Col>
                <Col xs={12} md={8} className="infosStoresCol">
                    <div className="posItemTitle"><strong>Nom : </strong>{pos.name}</div>
                    <div className="posItemTitle"> {pos.location !== null ? <div><strong>Adresse : </strong>{pos.location.adress1} {pos.location.postcode} {pos.location.city}</div> : <div><strong>Adresse : </strong>Pas d'adresses enregistrée pour ce magasin.</div> }</div>
                    <div className="posItemTitle"><strong>Marque : </strong>{pos.brand.name}</div>
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
        <p>Vous n'avez aucuns magasins enregistrés.</p>
      </div>
    )
  }
};

class PointOfSale extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container fluid className="posList shadow">
        <PosList/>
        </Container>
    );
  }
}




export default PointOfSale;