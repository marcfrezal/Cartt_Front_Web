import { useMutation } from "@apollo/react-hooks";
import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import {
  GET_BRAND,
  SET_BRAND_THEME,
  UPDATEBRAND,
  UPLOADIMG,
} from "../../../../API/brands/brands";
import "./WhiteMarkingForm.css";
import { useLazyQuery } from "@apollo/react-hooks";
import { ME } from "../../../../API/users/users";
import { resultKeyNameFromField } from "apollo-utilities";
import { apiUrl } from "../../../../App";
import axios from "axios";

const placeholders = {
  description:
    "Un magazin de vélo indépendant. Créer en 2021 notre abjectif est de reduire l’usage de la voiture dans le millieu urbain. Nous engageons pour vous fournir les meilleur vélo au meilleur prix. Et bien évidement nous vou garentissons l’entretient à vie!",
  shops:
    "Narbonnes 34000, 3 allée des jonquilles\nNarbonnes 34000, 3 allée des jonquilles\nNarbonnes 34000, 3 allée des jonquilles",
  openHours:
    "lundi - vendredi: 9h-12h, 14h-18h\nsamedi: 9h-12h, 12h-19h\ndimanche: 9h-12h, 14h-18h",
};

export const WhiteMarkingForm = (props) => {
  console.log("============= props => ", props);
  // const [brand, setBrand] = useState();
  const [getBrand, { called: gbCalled, loading: gbLoading, data: gbData }] =
    useLazyQuery(GET_BRAND, { variables: { idBrand: props.brandId } });

  const [form, setForm] = useState(undefined);
  const inputLogoRef = useRef();
  const backgroundRef = useRef();
  const image1Ref = useRef();
  const image2Ref = useRef();
  const image3Ref = useRef();

  const [imgChanged, setImgChanged] = useState(false);

  // const toBase64 = (file) =>
  //   new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => resolve(reader.result);
  //     reader.onerror = (error) => reject(error);
  //   });

  // const [
  //   setBrandTheme,
  //   { data, error: mutationError, loading: mutationLoading },
  // ] = useMutation(SET_BRAND_THEME);
  const [
    updateBrand,
    { data, error: mutationError, loading: mutationLoading },
  ] = useMutation(UPDATEBRAND);
  const [
    uploadBrandImage,
    { data: uiData, error: uiError, loading: uiLoading },
  ] = useMutation(UPLOADIMG);

  const submitForm = async () => {
    console.log("[SUBMIT FORM] form ====>", form);
    const theme = {
      colorPrimary: form.colorPrimary,
      colorSecondary: form.colorSecondary,
      colorSecondaryLight: form.colorSecondaryLight,
      colorBackground: form.colorBackground,
      // logo: form.logo,
      // background: form.background,
      // image1: form.image1,
      // image2: form.image2,
      // image3: form.image3,
      openHours: form.openHours,
    };
    console.log("[SUBMIT FORM] theme ====>", theme);
    await updateBrand({
      variables: {
        myBrand: {
          _id: props.brandId,
          name: form.name,
          description: form.description,
          theme: theme,
          domain: form.domain,
        },
      },
    });
    console.log(data, mutationError);
    console.log("[APLOADING IMG]");
    console.log("brand id = ", props.brandId);
    if (imgChanged) {
      await uploadBrandImage({
        variables: { content: form.background, idBrand: props.brandId },
      });
      console.log("[IMG UPLOADED]");
    }
  };

  const renderImgInput = (inputRef, img, setImg, logo = false) => {
    const getImg = (e) => {
      inputRef.current?.click();
    };
    console.log("image input", img);
    return (
      <div onClick={getImg}>
        <img
          alt="Clicker pour upload"
          className={logo ? "uploadLogoArea" : "uploadImgArea"}
          src={img ? (!imgChanged ? img : URL.createObjectURL(img)) : undefined}
        />
        <input
          ref={inputRef}
          type="file"
          style={{ display: "none" }}
          onChange={async (e) => {
            const file = e.target.files[0];
            // console.log(file);
            // const obj = await toBase64(file);
            // console.log(obj);

            setImg(file);
            setImgChanged(true);
          }}
        ></input>
      </div>
    );
  };

  const renderColorInput = (color, setColor, name, title) => {
    // colorRef.addEventListener("input", updateFirst, false);
    //
    return (
      <div>
        <input
          type="color"
          id={name}
          name={name}
          defaultValue={color}
          onChange={(value) => {
            setColor(value.target.value);
          }}
        />
        <label>{title}</label>
      </div>
    );
  };

  const renderColorsInputs = () => {
    return (
      <div>
        <h4>Choisisser les couleur de vote site</h4>
        {renderColorInput(
          form.colorPrimary,
          (value) => setForm({ ...form, colorPrimary: value }),
          "primary",
          "Couleur principale"
        )}
        {renderColorInput(
          form.colorSecondary,
          (value) => setForm({ ...form, colorSecondary: value }),
          "secondary",
          "Couleur des texts"
        )}
        {renderColorInput(
          form.colorBackground,
          (value) => setForm({ ...form, colorBackground: value }),
          "background",
          "Couleur de fond (1)"
        )}
        {renderColorInput(
          form.colorSecondaryLight,
          (value) => setForm({ ...form, colorSecondaryLight: value }),
          "secondary",
          "Couleur de fond (2)"
        )}
        <div className="space" />
      </div>
    );
  };

  const renderForm = () => {
    return (
      <Form className="WMFormFrom">
        <div className="space" />
        <h4>Importer votre logo</h4>
        {renderImgInput(
          inputLogoRef,
          form?.logo,
          (value) => setForm({ ...form, logo: value }),
          true
        )}
        <div className="space" />
        <h4> Choississez un domain</h4>
        <Form.Group>
          <Form.Label>Nom de domain</Form.Label>
          <Form.Control
            placeholder="Nom de domain"
            defaultValue={form?.domain}
            onChange={(e) => setForm({ ...form, domain: e.target.value })}
          />
        </Form.Group>
        <div className="space" />

        {renderColorsInputs()}

        <h4>PremièrePage</h4>
        <Form.Group>
          <Form.Label>Nom de ma boutique</Form.Label>
          <Form.Control
            placeholder="Nom de la boutique"
            defaultValue={form?.name}
            onChange={(value) => setForm({ ...form, name: value.target.value })}
          />
        </Form.Group>
        <div>Image de fond</div>
        {renderImgInput(backgroundRef, form.background, (value) =>
          setForm({ ...form, background: value })
        )}
        <div className="space" />
        <h4>Qui sommes nous?</h4>
        {renderImgInput(image1Ref, form.image1, (value) =>
          setForm({ ...form, image1: value })
        )}
        {renderImgInput(image2Ref, form.image2, (value) =>
          setForm({ ...form, image2: value })
        )}
        <Form.Group>
          <Form.Label>Décrivez votre boutiques et vos valeurs</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder={placeholders.description}
            defaultValue={form.description}
            onChange={(value) =>
              setForm({ ...form, description: value.target.value })
            }
          />
        </Form.Group>
        <div className="space" />
        <h4>Où dépenser ma carte Cadeaux?</h4>
        {renderImgInput(image3Ref, form.image3, (value) =>
          setForm({ ...form, image3: value })
        )}
        {/* <Form.Group>
          <Form.Label>Nos Magazins:</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder={placeholders.shops}
            defaultValue={form.shops}
            onChange={(value) => setForm({ ...form, shops: value })}
          />
        </Form.Group> */}
        <Form.Group>
          <Form.Label>Horraires:</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder={placeholders.openHours}
            defaultValue={form.openHours}
            onChange={(value) =>
              setForm({ ...form, openHours: value.target.value })
            }
          />
        </Form.Group>
        <div className="space" />
        {/* <h4>Choisir une Carte Cadeaux?</h4> */}
        <Button
          // type="submit"
          className="WMFSubmitBtn"
          onClick={submitForm}
        >
          Enregister
        </Button>
      </Form>
    );
  };

  if (gbCalled && gbLoading) {
    return (
      <Container fluid className="WMFormContainer shadow">
        <Row className="WMFormRow">
          <div>Loading...</div>
        </Row>
      </Container>
    );
  }
  if (!gbCalled) {
    getBrand();
    return (
      <Container fluid className="WMFormContainer shadow">
        <Row className="WMFormRow">
          <div>fetching..</div>
        </Row>
      </Container>
    );
  }
  if (gbData && !form) {
    // axios
    //   .get(apiUrl + `brand/image/${props.brandId}`)
    //   .then((response) => setForm({ ...form, background: response.data }))
    //   .catch((e) => console.log(e));

    // if (response) {
    //   console.log("Response data exist");
    //   console.log("response.Data = ", response?.data);
    // }
    console.log("should set form");
    const theme = JSON.parse(gbData?.getBrand.theme);
    console.log("fetched theme = ", theme);
    console.log("gbData", gbData);
    console.log("theme open hours = ", theme.openHours);
    setForm({
      ...form,
      logo: gbData?.getBrand.logo || "",
      domain: gbData?.getBrand.domain || "",
      background: apiUrl + `brand/image/${props.brandId}` || "",
      image1: "",
      image2: "",
      image3: "",
      name: gbData?.getBrand.name || "",
      description: gbData?.getBrand.description || "",
      openHours: theme?.openHours || "",
      colorPrimary: theme?.colorPrimary || "#50ADB2",
      colorSecondary: theme?.colorSecondary || "#A3A3A3",
      colorSecondaryLight: theme?.colorSecondaryLight || "#F2F2F2",
      colorBackground: theme?.colorBackground || "#FFFFFF",
    });
  }
  console.log("form = ", form);
  if (!form) {
    return <div>Filling Form...</div>;
  }

  console.log(gbData);
  return (
    <Container fluid className="WMFormContainer shadow">
      <Row className="WMFormRow">
        <Col xs={6} lg={6} className="WMFormCol">
          {renderForm()}
        </Col>
        <Col xs={6} lg={6} className="WMFormCol">
          <p>Hello I'm the preview!</p>
        </Col>
      </Row>
    </Container>
  );
};
