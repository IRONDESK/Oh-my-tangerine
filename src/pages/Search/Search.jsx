import React from 'react';
import styled from "styled-components";
import HeaderSearch from "../../Components/Header/HeaderWithSearch";
import NavBottom from "../../Components/NavBottom";

const Search = () => {
  return (
    <Container>
      <HeaderSearch />
      <NavBottom place='home'/>
    </Container>
  );
};

const Container = styled.section`
`;

export default Search;
