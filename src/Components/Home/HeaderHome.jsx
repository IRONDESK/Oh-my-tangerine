import React from "react";
import styled from "styled-components";

const HeaderHome = () => {
  return (
    <Container>
      <div>감귤마켓 피드</div>
      <img src="./image/icon/icon-search.png" alt="검색아이콘" />
    </Container>
  );
};

const Container = styled.header`
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid #dbdbdb;
  padding: 13px 21px 13px 16px;
  background-color: #fff;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  div {
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
  }

  img {
    cursor: pointer;
  }
`;

export default HeaderHome;
