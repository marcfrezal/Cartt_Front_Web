import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Chart.css';
import { FaSyncAlt } from "react-icons/fa";
import ReactApexChart from "react-apexcharts";


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

function amountGlobal( listCard ) {

    var amountGlobal = 0;

    if ( listCard !== undefined ) {
        for (var i = 0; i !== listCard.getCards.length; i++) {
            amountGlobal += listCard.getCards[i].amount
        }
        return (amountGlobal);
    }

    return (amountGlobal);
}

function amountGlobalRemaining( listCard ) {
    var amountGlobal = 0;

    if ( listCard !== undefined ) {

        for (var i = 0; i !== listCard.getCards.length; i++) {
            amountGlobal += listCard.getCards[i].amountRemainding
        }

        return (amountGlobal);
    }
    return (amountGlobal);
}

// const = ApexChart extends React.Component {
//     constructor(props) {
//       super(props);

//       this.state = {
      
//         series: [44, 55, 41, 17, 15],
//         options: {
//           chart: {
//             type: 'donut',
//           },
//           responsive: [{
//             breakpoint: 480,
//             options: {
//               chart: {
//                 width: 200
//               },
//               legend: {
//                 position: 'bottom'
//               }
//             }
//           }]
//         },
//       };
//     }

//     render() {
//       return (
//         <div id="chart">
//         </div>
//       );
//     }
//   }


//FUNCTION TO RENDER ARRAY OF CARDS
const ChartsInfos = () => {

  const { data, error, loading} = useQuery(GETMYCARDS);

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
  } else if(data && data.getCards.length !== 0) {
    const series = [amountGlobal(data), amountGlobal(data) - amountGlobalRemaining(data)]
    const options = {
              chart: {
                  type: 'donut',
              },
              responsive: [{
                  breakpoint: 480,
                  options: {
                      chart: {
                          width: 300
                      },
                      legend: {
                          position: 'top'
                      }
                  }
              }],
              colors : [ "#183D76", "#BAC9FF" ],
              dataLabels: {
                  enabled: true,
                  dropShadow: false
              },
              legend: {
                  show: false,
              },
              labels : [ "Montant global", "Montant dépensé"]
              
  
      }
    return (
            <Container style={{ display : "flex", justifyContent : "center", alignItems : "center", flexDirection : "column"}}>
                <Row>
                    <ReactApexChart options={options} series={series}  type="donut" />
                </Row>
                <Row>
                    <div style={{height : "2vh", width : "2vh", backgroundColor : "#183D76", marginRight : "2vh", borderRadius : "1vh"}}/>
                    <div style={{ fontSize : "2vh"}}>Montant global</div>
                </Row>
                <Row>
                    <div style={{height : "2vh", width : "2vh", backgroundColor : "#BAC9FF", marginRight : "2vh", borderRadius : "1vh"}}/>
                    <div style={{ fontSize : "2vh"}}>Montant dépensé</div>
                </Row>
            </Container>
        )
    }
    return(
        <div>Pas de cartes disponibles pour cette marque.</div>
    )
}

//MAIN CARD LIST COMPONENT
export default function Chart() {

    return(
        <Col >
            <Container style={{ display : "flex", justifyContent : "center", alignItems : "center"}} fluid>
                <Row className="colChart shadow">
                    <ChartsInfos/>
                </Row>
            </Container>
        </Col>
    )
};