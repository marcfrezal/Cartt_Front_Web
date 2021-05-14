import React from "react";
import { useQuery } from '@apollo/react-hooks';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CardsList.css';
import {FaSyncAlt} from "react-icons/fa";

//IMPORT API CALL
import { GETMYCARDS } from "../../../API/cards/cards";

//CARDS DATA MODEL
const cardModel = [{id : 1, amount : 100, amountRemainding : 50, allowedBrands : [{ name : "LaarajVie", stores : [{ name : "Store dePaulo"}, { name : "Store de MArco"}]}, { name : "Jul"}] },
                   {id : 1, amount : 100, amountRemainding : 50, allowedBrands : [{ name : "LaarajVie", stores : [{ name : "Store dePaulo"}, { name : "Store de MArco"}]}] },
                   {id : 1, amount : 100, amountRemainding : 50, allowedBrands : [{ name : "LaarajVie", stores : [{ name : "Store dePaulo"}, { name : "Store de MArco"}]}] },]


//FUNCTION TO RENDER BRANDS
const RenderAllowedsBrand = (props) => {
    return(
        <div style={{display : "flex", flexDirection : "row", marginLeft : "1vh"}}>
            {props.allowedBrands.map((item, index) => (
                <div style={{ marginLeft : "1vh"}}>{item.name}</div>
            ))}
        </div>
    )
}

//FUNCTION TO RENDER ARRAY OF CARDS
const RenderCards = () => {

//   const { data, error, loading} = useQuery(GETMYCARDS);

//   if (loading) {
//     return (
//       <div >
//         <FaSyncAlt className="loadContainer"/>
//       </div>
//     )
//   } else if (error) {
//     return (
//       <div className="errorContainer">
//         <p>Une erreur s'est produite lors du chargement des données.</p>
//       </div>
//     )
//   } else  {
//     return (
//         <div>hy</div>
//     )
//   }
    return (
        <div>
            {cardModel.map((item, index) => (
                <Container fluid className="cardObject shadow">
                    <Row className="cardObjectRow">
                        <Col md={4}>
                            <div className="cardImage"></div>
                        </Col>
                        <Col>
                            <Container className="cardObjectContainer" fluid>
                                <Row className="cardObjectContainerRow">
                                    <div><strong>ID :</strong> {item.id}</div>
                                </Row>
                                <Row className="cardObjectContainerRow">
                                    <div><strong>MONTANT DISP : </strong> {item.amountRemainding}/{item.amount}</div>
                                </Row>
                                <Row className="cardObjectContainerRow">
                                    <div style={{display : "flex", flexDirection : "row"}}><strong>MARQUES : </strong><RenderAllowedsBrand allowedBrands={item.allowedBrands}/> </div>
                                </Row>
                                {/* <Row className="cardObjectContainerRow">
                                    <div><strong>MAGASINS UTILSABLES : </strong> </div>
                                </Row> */}
                            </Container>
                        </Col>
                    </Row>
                </Container>
            ))}
        </div>
    )
}

//MAIN CARD LIST COMPONENT
export default function CardsList() {

    return(
        <Col className="cardsListContainer">
            <Container fluid className="cardsListCard shadow">
                <Row className="cardsListRow">
                    <RenderCards/>
                </Row>
            </Container>
        </Col>
    )
};