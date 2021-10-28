import React , { useRef } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './BrandListAndManagement.css';
import { GETALLBRANDS, SUPPBRAND, UPDATEBRAND, UPLOADIMG } from '../../../API/brands/brands';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { FaSyncAlt, FaPen, FaTrash,  } from "react-icons/fa";
import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

function ValidateSuppBrand(props)  {
  const [ suppBrand, {data, error : mutationError, loading : mutationLoading} ] = useMutation(SUPPBRAND);

  if (mutationLoading) {
    return (
      <div className="errorLogin">
        <div className="btnCol">
          <Button className="saveModalBtnAdmin">Patientez...</Button>
        </div>
      </div>
    )
  }
  if (mutationError) {
    console.log(mutationError)
    return (
      <div className="errorLogin">
        <div className="btnCol">
          <Button className="saveModalBtnAdmin" onClick={() => suppBrand({variables : { idBrand : props.brand._id}}).catch(err => console.log(err))}>Valider</Button>
        </div>
        <p className="errorMess">Erreur.</p>
      </div>
    )
  }
  if (data) {
    window.location.reload();
  }
  return (
    <Button className="saveModalBtnAdmin" onClick={() => suppBrand({variables : { idBrand: props.brand._id}}).catch(err => console.log(err))}>Valider</Button>
  )
}

const SuppBrandModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <FaTrash className="updateBrandInfoIconAdm"  onClick={handleShow}/>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Supression de la marque {props.brand.name}.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Souhaitez-vous vraiment supprimer la marque <strong> {props.brand.name} </strong> ?
        </Modal.Body>
        <Modal.Footer>
          <Button className="closeModalBtnAdmin" onClick={props.handleClose}>
            Fermer
          </Button>
          <ValidateSuppBrand brand={props.brand} />
        </Modal.Footer>
      </Modal>
    </div>
  );
}

function ValidateUpdBrand(props)  {
  console.log(props.img)
  const [ updBrand, {data, error : mutationError, loading : mutationLoading} ] = useMutation(UPDATEBRAND);

  if (mutationLoading) {
    return (
      <div className="errorLogin">
        <div className="btnCol">
          <Button className="saveModalBtnAdmin">Patientez...</Button>
        </div>
      </div>
    )
  }
  if (mutationError) {
    console.log(mutationError)
    return (
      <div className="errorLogin">
        <div className="btnCol">
          <Button className="saveModalBtnAdmin" onClick={() => updBrand({variables : {myBrand : {_id : props.id, name : props.name, description : props.desc, status : props.status}}}).catch(err => console.log(err))}>Valider</Button>
        </div>
        <p className="errorMess">Erreur.</p>
      </div>
    )
  }
  if (data) {
    window.location.reload();
  }
  return (
    <Button className="saveModalBtnAdmin" onClick={() => updBrand({variables : {myBrand : {_id : props.id, name : props.name, description : props.desc, status : props.status}}}).catch(err => console.log(err))}>Valider</Button>
  )
}

// function UploadImageBrand(props)  {
//   const [ updBrand, {data, error : mutationError, loading : mutationLoading} ] = useMutation(UPLOADIMG);
//   const inputRef = useRef();

//   const getImg = e => {
//     inputRef.current?.click();
//   }

//   const getImgTrue = e => {
//     console.log(e.target.files)
//   }

//   if (mutationLoading) {
//     return (
//       <div>lol</div>
//       // <div className="errorLogin">
//       //   <div className="btnCol">
//       //     <Button className="saveModalBtnAdmin">Patientez...</Button>
//       //   </div>
//       // </div>
//     )
//   }
//   if (mutationError) {
//     console.log(mutationError)
//     return (
//       <div>lol</div>
//       // <div className="errorLogin">
//       //   <div className="btnCol">
//       //     <Button className="saveModalBtnAdmin" onClick={() => updBrand({variables : {myBrand : {_id : props.id, name : props.name, description : props.desc, status : props.status}}}).catch(err => console.log(err))}>Valider</Button>
//       //   </div>
//       //   <p className="errorMess">Erreur.</p>
//       // </div>
//     )
//   }
//   if (data) {
//     window.location.reload();
//   }
//   return (
//     <div className="uploadImgArea" onClick={getImg}>
//       <input ref={inputRef} type="file" style={{display : 'none'}} onChange={getImgTrue}></input>
//       Cliquez pour upload une image
//     </div>
//     // <Button className="saveModalBtnAdmin" onClick={() => updBrand({variables : {myBrand : {_id : props.id, name : props.name, description : props.desc, status : props.status}}}).catch(err => console.log(err))}>Valider</Button>
//   )
// }

const UpdBrandModal = (props) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(props.brand.name);
  const [desc, setDesc] = useState(props.brand.description);
  const [status, setStatus] = useState(props.brand.status);
  const [img, setImg ] = useState()
  const inputRef = useRef();


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const getImg = e => {
    inputRef.current?.click();
  }

  // const getImgTrue = e => {
  //   console.log(e.target.files)
  // }



  return (
    <div>
      <FaPen className="updateBrandInfoIconAdm"  onClick={handleShow}/>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifications des informations de la marque {props.brand.name}.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Nom</Form.Label>
            <Form.Control type="email" placeholder={props.brand.name}  onChange={e => setName(e.target.value)}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" type="email" placeholder={props.brand.description} onChange={e => setDesc(e.target.value)}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Status</Form.Label>
            <Form.Control onChange={e => setStatus(e.target.value)} as="select" defaultValue={props.brand.status}>
              <option value="AVAILABLE">PUBLIQUE</option>
              <option value="NOT_AVAILABLE">PRIVEE</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Image</Form.Label>
                <div className="uploadImgArea" onClick={getImg}>
                  <input ref={inputRef} type="file" style={{display : 'none'}} onChange={e => setImg(e.target.files[0])}></input>
                  Cliquez pour upload une image
                </div>
            {/* <UploadImageBrand/> */}
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button className="closeModalBtnAdmin" onClick={props.handleClose}>
            Fermer
          </Button>
          <ValidateUpdBrand name={name} desc={desc} id={props.brand._id} status={status} img={img}/>
        </Modal.Footer>
      </Modal>
    </div>
  );
}


const BrandList = (props) => {
  const { data, error, loading} = useQuery(GETALLBRANDS);

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
  } else if (data && data.getBrands.length !== 0) {
    console.log(data.getBrands)
    return (
      <div>
        {data.getBrands.map((pos, index) => (
          <Container className="containerBrandItem" fluid onClick={(e) => props.getMyStoreCallBack(pos)}>
            <Row style={{height : "100%"}}>
              <Col xs={12} md={2}>
              </Col>
              <Col xs={12} md={9}>
                <Row className="brandIdText">
                  <div>ID :&nbsp;</div>
                  <div className="brandInfos" >{pos._id}</div>
                  <img alt="imgBrand" style={{ height : "30px", width : "30px"}} src="https://api.dev.cartt.fr/brand/image/31"></img>
                </Row>
                <Row className="brandNameText">
                  <div>Nom :&nbsp;</div>
                  <div className="brandInfos" >{pos.name}</div>
                </Row>
                <Row className="brandDescriptionText">
                  <div>Description :&nbsp;</div>
                  <div className="brandInfosDesc" >{pos.description}</div>
                </Row>
                <Row className="brandNameText">
                  <div>Status :&nbsp;</div>
                  <div className="brandInfos" >{pos.status === "AVAILABLE" ? "PUBLIQUE" : "PRIVEE"}</div>
                </Row>
              </Col>
              <Col xs={12} md={1}>
                <Row style={{display : "flex", alignItems : "center", height : "50%"}}>
                  <UpdBrandModal brand={pos}/>
                </Row>
                <Row style={{display : "flex", alignItems : "center", height : "50%"}}>
                  <SuppBrandModal brand={pos}/>
                </Row>
              </Col>
            </Row>
          </Container>
        ))}
      </div>
    )
  }
  else {
    return (
      <div className="errorContainer">
        <p>Pas de marques enregistrées.</p>
      </div>
    )
  }
};

class BrandListAndManagement extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container fluid className="brandListAdmContainer shadow">
        <Row style={{width : "100%"}}>
          <Col>
            <BrandList getMyStoreCallBack={this.props.getMyStoreCallBack}/>
          </Col>
        </Row>
      </Container>
    );
  }
}




export default BrandListAndManagement;