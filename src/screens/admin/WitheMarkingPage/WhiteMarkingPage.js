import { useLazyQuery, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, ThemeProvider } from "react-bootstrap";
import { GET_BRAND } from "../../../API/brands/brands";
import { ME } from "../../../API/users/users";
import SidebarAdm from "../../../components/common/SidebarAdmin/SidebarAdm";
import HeaderAdm from "./../../../components/admin/Header/HeaderAdm";
import { WhiteMarkingForm } from "./WhiteMarkingForm/WhiteMarkingForm";

export default function WhiteMarkingPage() {
  const [currentBrandId, setCurrentBrandId] = useState();
  // const [getBrand, { called, loading, data }] = useLazyQuery(GET_BRAND, {variables: { idBrand: 55}})
  const [
    getCurrentBrandId,
    { called: cbCalled, loading: cbLoading, data: cbData, error: cbError },
  ] = useLazyQuery(ME);
  // const [brand, setBrand] = useState();
  // const [getBrand, { called: gbCalled, loading: gbLoading, data: gbData }] =
  //   useLazyQuery(GET_BRAND, { variables: { idBrand: currentBrandId } });

  useEffect(() => {
    if (!currentBrandId) {
      if (!cbCalled )
          getCurrentBrandId();
      if (cbData) {
        console.log(cbData.me.currentBrand._id);
        setCurrentBrandId(cbData.me.currentBrand._id);
        // console.log(currentBrandId)
      }
    }
    // else if (currentBrandId && !brand) {
    //   getBrand();
    //   if (gbData) {
    //     setBrand(gbData);
    //   }
    // }
  });

  return (
    <Container fluid className="containerProfileInfosAdm">
      <SidebarAdm />
      <Row>
        <Col xs={1} lg={1} />
        <Col xs={11} lg={11}>
          <HeaderAdm
            title="Mon site vitrine"
            actionTitle="Éditer mon site vitrine"
            onPress={() => console.log("Header")}
          />
          {cbError && (
            <div style={{ paddingTop: "15%" }}>
              {" "}
              There was an error while loading the data.{" "}
            </div>
          )}
          {currentBrandId && <WhiteMarkingForm brandId={currentBrandId} />}
          {/* <Container fluid className="WMFormContainer shadow">
            <Row className="WMFormRow">
              <Col xs={6} lg={6} className="WMFormCol"> */}

          {/* //     </Col>
          //     <Col xs={6} lg={6} className="WMFormCol">
          //       <p>Hello I'm the preview!</p>
          //     </Col>
          //   </Row>
          // </Container> */}
        </Col>
      </Row>
    </Container>
  );
}

// function GetCurrentBrand(props) {
//   console.log("[GET CURRENT BRAND]");

//   const { data, error, loading } = useQuery(ME);

//   if (loading) {
//     return <div>En cours de chargement...</div>;
//   } else if (error) {
//     return (
//       <div>
//         <div>An error occured...</div>
//         <div>{error}</div>
//       </div>
//     );
//   } else if (data) {
//     const currentBrand = data?.me?.currentBrand;
//     props.setCurrentBrand(currentBrand);
//     console.log(currentBrand);

//     return <div />;
//   }
// }

// export default WhiteMarkingPage;
