
// import { withApollo, WithApolloClient } from '@apollo/react-hoc'
// import { createStyles, Grid, Theme, Typography, withStyles, WithStyles } from '@material-ui/core';
import { GraphQLError } from "graphql";
import React from "react";
import { Alert, Button, Col, Container, Form, Modal, ProgressBar, Row, Spinner } from 'react-bootstrap';
import { WithTranslation, withTranslation } from 'react-i18next';
import { FaPaperPlane } from 'react-icons/fa';
import { UserRequests } from "../../../apollo";
import './Block7.css';

// const styles = ({palette, spacing}: Theme) => createStyles({
// })

interface IState {
	mail?: string

	showModal: boolean;

	errorMessage?: string;

	progress: boolean;
}

interface IProps
	// extends
	// WithStyles<typeof styles>
	// , RouteComponentProps
	extends WithTranslation
{

}
class Block7 extends React.Component<IProps, IState> {

	constructor(props: IProps) {
		super(props);
		this.state = {
			showModal: false,
			progress: false
		}
	}

	render = () => {
		// const classes = this.props.classes;

		return (
			<Container className="blockContainer7" fluid>
				<Row className="row1-7">
				</Row>
				<Row className="row2-7">
					<Col className="col2-7">
					<div className="topTitle7">{this.props.t('On vous attends')}.</div>
					<div className="title7">Rejoignez-nous!</div>
					<div className="text7">Entrez votre adresse e-mail ci-dessous et nous vous recontacterons le plus rapidement possible! <br/> Ou alors échangeons directement sur vos besoins a l'adresse marcfrezal@epitech.eu</div>
					<Form.Group	className="form7" onClick={this.__onClickSend}>
						<Form.Control className="email7" type="email" placeholder="E-mail" onChange={(e) => this.setState({mail: e.target.value})}/>
						<div className="sendMail7"><FaPaperPlane className="mailIcon7"/></div>
					</Form.Group>
					{
						this.state.progress &&
						<Alert>
							<Spinner animation="border" variant="" />
						</Alert>
					}
					</Col>
				</Row>
				<Row className="row3-7">
					<Col className="col3-7">
					</Col>
					<Col className="col3-1-7">
					<div className="footerText">Cartt © 2021</div>
					</Col>
				</Row>
				<Modal show={this.state.showModal} onHide={this.__onCloseModal}>
					<Modal.Header closeButton>
					<Modal.Title>Félicitations</Modal.Title>
					</Modal.Header>
					<Modal.Body>Merci {this.state.mail}! Nous vous recontacterons le plus rapidement possible.</Modal.Body>
					<Modal.Footer>
					<Button variant="secondary" onClick={this.__onCloseModal}>
						Parfait!
					</Button>
					</Modal.Footer>
				</Modal>
				{
					this.state.errorMessage
					&&
					<Alert variant="error">
						{this.state.errorMessage}
					</Alert>
				}
			</Container>
		)
	}

	__onCloseModal = () => {
		this.setState({showModal: false, mail: undefined, errorMessage: undefined})
	}

	__onClickSend = () => {
		console.log(`this.state.mail: ${this.state.mail}`)
		if (this.state.mail && this.state.mail.length > 0) {
			this.setState({progress: true})

	
			UserRequests.addToNewsletter(this.state.mail)
			.then((mail: string) => {
				this.setState({showModal: true})
			}).catch((err: GraphQLError) => {
				this.setState({errorMessage: err.message})
			}).finally(() => this.setState({progress: false}))
		}
	}
}


export default withTranslation()(Block7);