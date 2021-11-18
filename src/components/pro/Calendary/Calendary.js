import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Calendary.css';


export default function Calendary() {
    let newDate = new Date()
    let day = newDate.getDay();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    let dayArray = ["INDEX", "LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI", "SAMEDI", "DIMANCHE"]
    let monthArray = ["INDEX", "JANVIER", "FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DECEMBRE"]

    let realMonth = monthArray[month];
    let realDay = dayArray[day];

    return(
        <Col className="calendaryContainer">
            <Container className="calendaryCard shadow">
                <Row className="calendaryRow">
                    <Col className="calendaryColDay">
                        {realDay}
                    </Col>
                </Row>
                <Row className="calendaryRow">
                    <Col className="calendaryColNumber">
                        {date}
                    </Col>
                </Row>
                <Row className="calendaryRow">{realMonth} {year}</Row>
            </Container>
        </Col>
    )
};