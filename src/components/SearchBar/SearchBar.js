import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SearchBar.css'
import { InputGroup, FormControl, Button } from "react-bootstrap";

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
        <Row >
            category
        </Row>
      </Container>
    );
  }
}


export default SearchBar;