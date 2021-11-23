import React from "react";
import './BlockLeft.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useLazyQuery } from '@apollo/client';
import { Link, Redirect} from "react-router-dom";
import { RESETPWD } from "../../../../API/authentication/authentication";


class BlockLeft extends React.Component {

  state = {
    username : "",
  }

  _handleUsername = (e) => {
      this.setState({username : e.target.value})
    }

    render() {
      return (
          <Container className="blockLeftContainer" fluid>
             <Row className="topRowLogin">
             </Row>
             <Row className="titleCol">
                <Col>Bonjour</Col>
             </Row>
             <Row>
               <Col/>
               <Col md={8} >
                <Form.Group className="userNameCol">
                  <Form.Control className="test" onChange={this._handleUsername} type="email" placeholder="Nom d'utilisateur ou E-mail" />
                </Form.Group>
               </Col>
               <Col/>
             </Row>
             <Row >
               <Col/>
               <Col md={8} >
                 <ResetPassword username={this.state.username}/>
               </Col>
               <Col/>
             </Row>
             <Row>
               <Col/>
               <Col md={8} className="signInCol forgetCol" >
                 <Link to='/login'>Retour au login</Link>
               </Col>
               <Col/>
             </Row>
          </Container>
      );
    }
  }

  function ResetPassword(props) {
    console.log(props)
    const [resetPwd, {data, error, loading}] = useLazyQuery(RESETPWD);
    
    if (loading) {
      return (
        <div className="errorLogin">
          <div className="btnCol">
            <Button className="loginBtn">Patientez...</Button>
          </div>
        </div>
      )
    }
    if (error) {
      return (
        <div className="errorLogin">
          <div className="btnCol">
            <Button onClick={() => resetPwd({variables : {email : props.username}})} className="loginBtn">Réinitialiser le mdp</Button>
          </div>
          <p className="errorMess">Erreur. Mauvais username/e-mail</p>
        </div>
      )
    }
    console.log(data)
    if (data) {
      return <Redirect to='/login'/>;
    }

    return (
      <div className="btnCol">
        <Button onClick={() => resetPwd({variables : {email : props.username}})} className="loginBtn">Réinitialiser le mdp</Button>
      </div>
    )
    
  }


export default BlockLeft;
