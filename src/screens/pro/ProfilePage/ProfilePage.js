import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ProfilePage.css'
import Header from '../../../components/pro/Header/Header'
import Sidebar from "../../../components/common/Sidebar/Sidebar";
import ProfileInfos from "./ProfileInfos/ProfileInfos";
import InfosStoreEnseigne from "./InfosStoreEnseigne/InfosStoreEnseigne";

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container fluid style={{ backgroundColor: "#f9fafd" }}>
        <Sidebar />
        <Row>
          <Col xs={1} lg={1}/>
          <Col xs={11} lg={11}>

            <Header
              title='Profile'
              actionTitle='Modifier mon mot de passe' />
            <div style={{height: 20}}/>
            <ProfileInfos/>
            <InfosStoreEnseigne/>

          </Col>
        </Row>

      </Container>
    );
  }
}


export default Profile;
