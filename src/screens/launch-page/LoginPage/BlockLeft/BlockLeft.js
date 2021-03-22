import React from "react";
import './BlockLeft.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useMutation, useLazyQuery } from '@apollo/react-hooks';
import { Redirect} from "react-router-dom";
import { LOGIN } from "./ApiBlockLeft";


class BlockLeft extends React.Component {

  state = {
    username : "",
    password : "",
  }

  _handleUsername = (e) => {
      this.setState({username : e.target.value})
    }

  _handlePassword = (e) => {
      this.setState({password : e.target.value})
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
             <Row>
               <Col/>
                <Col md={8}>
                 <Form.Group className="userNamePassword">
                   <Form.Control className="test" onChange={this._handlePassword} type="password" placeholder="Mot de passe" />
                 </Form.Group>
                </Col>
               <Col/>
             </Row>
             <Row >
               <Col/>
               <Col md={8} >
                 <LogMe username={this.state.username} password={this.state.password}/>
               </Col>
               <Col/>
             </Row>
             <Row>
               <Col/>
               <Col md={8} className="signInCol forgetCol" >
                 Mot de passe oublié?
               </Col>
               <Col/>
             </Row>
          </Container>
      );
    }
  }


  function LogMe(props) {

    const [ updateLogin, {data, error : mutationError, loading : mutationLoading} ] = useMutation(LOGIN);
    
    if (mutationLoading) {
      return (
        <div className="errorLogin">
          <div className="btnCol">
            <Button className="loginBtn">Patientez...</Button>
          </div>
        </div>
      )
    }
    if (mutationError) {
      return (
        <div className="errorLogin">
          <div className="btnCol">
            <Button onClick={() => updateLogin({variables : {login : {email : props.username , password : props.password}}}).catch(err => console.log(err))} className="loginBtn">connexion</Button>
          </div>
          <p className="errorMess">Erreur. Mauvais username/e-mail ou mot de passe.</p>
        </div>
      )
    }
    if (data && data.login.role === "SELLER") {
      return <Redirect to='/dashboard'/>;
    }

    return (
      <div className="btnCol">
        <Button onClick={() => updateLogin({variables : {login : {email : props.username , password : props.password}}}).catch(err => console.log(err))} className="loginBtn">connexion</Button>
      </div>
    )
  }


export default BlockLeft;
