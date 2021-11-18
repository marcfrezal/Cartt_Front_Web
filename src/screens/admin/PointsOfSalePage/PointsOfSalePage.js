import React, { useRef } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PointsOfSalePageAdm.css';
import SidebarAdm from '../../../components/common/SidebarAdmin/SidebarAdm';
import { Modal, Button, Form } from "react-bootstrap";
import HeaderAdm from '../../../components/admin/Header/HeaderAdm';
import BrandListAndManagement from '../../../components/admin/BrandListAndManagement/BrandListAndManagement';
import StoreListAndManagement from '../../../components/admin/StoreListAndManagement/StoreListAndManagement';
import { useState } from "react";
import { CREATEBRAND, GETALLBRANDS } from '../../../API/brands/brands';
import { CREATESTORE, SETSTORELOCATION } from '../../../API/stores/stores';
import { useQuery, useMutation } from '@apollo/react-hooks';


class PointsOfSaleAdm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stores : []
    }
    this.getBrand = this.getBrand.bind(this);
  }

  getBrand = (props) => {
    this.setState({
      stores : props.stores
    })
  }

  render() {
    return (
      <Container fluid style={{ height : "100vh", backgroundColor: "#fff7f7" }}>
        <SidebarAdm />
        <Row style={{ height : "100%", backgroundColor: "red"}}>
          <Col xs={1} lg={1} style={{height : "100%", backgroundColor: "#fff7f7"}}></Col>
          <Col xs={11} lg={11} style={{ height : "100%", backgroundColor: "#fff7f7"}}>
            <HeaderAdm title="Points de ventes et marques"/>
            <Container fluid style={{ height : "90%", backgroundColor: "#fff7f7"}}>
              <Row style={{ height : "100%", backgroundColor: "#fff7f7"}}>
                <Col style={{ height : "100%", padding : "5vh", display : "flex", alignItems : "center", flexDirection : "column", backgroundColor: "#fff7f7"}}>
                  <CreateBrand/>
                  <BrandListAndManagement getMyStoreCallBack={this.getBrand}/>
                </Col>
                <Col style={{ height : "100%", padding : "5vh", display : "flex", alignItems : "center", flexDirection : "column", backgroundColor: "#fff7f7"}}>
                  <CreateStore/>
                  <StoreListAndManagement stores={this.state.stores}/>
                </Col>
              </Row>
            </Container> 
          </Col>
        </Row>
      </Container>
    );
  }
}


function ValidateCreaBrand(props)  {
  const [ creaBrand, {data, error : mutationError, loading : mutationLoading} ] = useMutation(CREATEBRAND);

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
    return (
      <div className="errorLogin">
        <div className="btnCol">
          <Button className="saveModalBtnAdmin" onClick={() => creaBrand({variables : {myImg : props.img, myBrand : {name : props.name, description : props.desc, categories : props.cat}}}).catch(err => console.log(err))}>Valider</Button>
        </div>
        <p className="errorMess">Erreur.</p>
      </div>
    )
  }
  if (data) {
    window.location.reload();
  }

  return (
    <Button className="saveModalBtnAdmin" onClick={() => creaBrand({variables : {myImg : props.img, myBrand : {name : props.name, description : props.desc, categories : props.cat}}}).catch(err => console.log(err))}>Valider</Button>
  )
}

function CreateBrand(props){
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [img, setImg] = useState('');
  const [cat, setCat] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const inputRef = useRef();

  const getImg = e => {
    inputRef.current?.click();
  }

  return (
    <Row className="addFunctionBrandAdmContainer" >
      <div style={{width : "100%", height : "100%", display : "flex", alignItems : "center" , justifyContent : "center"}} onClick={handleShow}>
        Créer une marque
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Créer une nouvelle marque.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Nom</Form.Label>
            <Form.Control type="email" placeholder="Nom de la marque"  onChange={e => setName(e.target.value)}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" type="email" placeholder="Description de la marque" onChange={e => setDesc(e.target.value)}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Image</Form.Label>
              {
                img ? 
                <div>
                  {img.name}
                </div> 
                :
                <div className="uploadImgArea" onClick={getImg}>
                  <input ref={inputRef} type="file" style={{display : 'none'}} onChange={e => setImg(e.target.files[0])}></input>
                  Cliquez pour upload une image
                </div> 
              }
          </Form.Group>
          <Form.Group>
            <Form.Label>Catégorie</Form.Label>
            <Form.Control  as="select" onChange={e => setCat([...cat, e.target.value])}>
              <option>--</option>
              <option value={"SPORT"}>SPORT</option>
              <option value={"MODE"}>MODE</option>
              <option value={"TECH"}>TECH</option>
              <option value={"DECO"}>DECO</option>
            </Form.Control>
          </Form.Group>
          {cat.map((pos, index) => (
          <div>{pos}</div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button className="closeModalBtnAdmin" onClick={handleClose}>
            Fermer
          </Button>
          <ValidateCreaBrand name={name} desc={desc} img={img} cat={cat}/>
        </Modal.Footer>
      </Modal>
    </Row>
  );

};

const SelectBrand = (props) => {
  const { data, error, loading} = useQuery(GETALLBRANDS);

  if (loading) {
    return (
      <div >
        Patientez...
      </div>
    )
  } else if (error) {
    return (
      <div className="errorContainer">
        <p>Une erreur s'est produite lors du chargement des données.</p>
      </div>
    )
  } else if (data && data.getBrands.length !== 0) {
    props.selectBrandIfNull(data.getBrands[0]._id);
    return (
      <Form.Control as="select" onChange={e => props.selectBrand(e.target.value)}>
        {data.getBrands.map((pos, index) => (
          <option value={pos._id}>{pos.name}</option>
        ))}
      </Form.Control>
    )
  }
  else {
    return (
      <div className="errorContainer">
        <option>Pas de marques enregistrées.</option>
      </div>
    )
  }
};


function ValidateCreaStore(props)  {
  const [ creaStore, {data, error : mutationError, loading : mutationLoading} ] = useMutation(CREATESTORE);

  var idBrand = 0;

  if (props.idBrand === undefined) {
    idBrand =  parseFloat(props.idBrandIfNull)
  } else {
    idBrand =  parseFloat(props.idBrand)
  }
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
          <Button className="saveModalBtnAdmin" onClick={() => creaStore({variables : {mystore : {name : props.name, idBrand : props.idBrand}}}).catch(err => console.log(err))}>Valider</Button>
        </div>
        <p className="errorMess">Erreur.</p>
      </div>
    )
  }
  if (data) {
    window.location.reload();
  }
  return (
    <Button className="saveModalBtnAdmin" onClick={() => creaStore({variables : {mystore : {name : props.name, idBrand : idBrand}}}).catch(err => console.log(err))}>Valider</Button>
  )
}


function CreateStore(){

  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [brandId, setBrandId] = useState();
  const [brandIdIfNull, setBrandIdIfNull] = useState();


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Row className="addFunctionBrandAdmContainer " >
      <div style={{width : "100%", height : "100%", display : "flex", alignItems : "center" , justifyContent : "center"}} onClick={handleShow}>
        Créer un magasin
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Créez votre magasin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Nom</Form.Label>
            <Form.Control type="email" onChange={e => setName(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Marque associée</Form.Label>
            <SelectBrand selectBrand={setBrandId} selectBrandIfNull={setBrandIdIfNull} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
        <Button className="closeModalBtnAdmin" onClick={handleClose}>
            Fermer
          </Button>
        <ValidateCreaStore name={name} idBrand={brandId} idBrandIfNull={brandIdIfNull} handleShow={handleClose}/>
        </Modal.Footer>
      </Modal>
    </Row>
  )
};


export default PointsOfSaleAdm;
