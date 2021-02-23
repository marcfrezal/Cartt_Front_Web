import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './SearchBar.css'
import { InputGroup, FormControl, Button } from "react-bootstrap";
import CategoryBar from "../CategoryBar/CategoryBar";

class SearchBar extends React.Component {

  render() {
    return (
      <Container fluid>
        <Row>
          <InputGroup>
            <FormControl placeholder="Search a shop or location.."/>
            <InputGroup.Append>
                <Button>Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </Row>
        <Row className="divider"/>
        <Row >
            <CategoryBar/>
        </Row>
      </Container>
    );
  }
}


export default SearchBar;