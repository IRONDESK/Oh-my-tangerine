import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../Components/Header/HeaderWithClickBtn";
import ProductContent from "./ProductContent";

const Modification = () => {
  const [hasData, setHasData] = useState(false);

  return (
  <>
    <UploadContainer encType='multipart/form-data'>
      <Header role={'업로드'} hasData={hasData}/>
      <ProductContent hasData={setHasData} />
    </UploadContainer>
  </>
  );
};

const UploadContainer = styled.form`
`;

export default Modification;
