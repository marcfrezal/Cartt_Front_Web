import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ProfileInfos.css'

class ProfileInfos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container fluid className="profileInfosContainer" style={{ backgroundColor: "#f9fafd" }}>
        <Row>

          <Col xs={12} sm={5} md={4} lg={3} xl={2}
            className='profileInfosPictureCol'>
            <div className="profileInfosPicture">
              Bonjour tous le monde 
            </div>
          </Col>

          <Col xs={12} sm={7} md={8} lg={9} xl={10}
            className='profileInfosCol'>
          <div>Paul Vitry</div>
          <div>marc@test.com</div>
          <div>10/03/199</div>
          
          </Col>
        </Row>
      </Container>
    );
  }
}


export default ProfileInfos;
