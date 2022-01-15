import React from "react";
import styled from "styled-components";
import Feed from "../../components/Feed";
import HeaderHome from "../../components/Home/HeaderHome";
import NavBottom from "./NavBottom";

const Home = () => {
  return (
    <>
      <HeaderHome />
      {/* 데이터 연결시 Map으로 */}
      <FeedWrap>
        <Feed />
        <Feed />
        <Feed />
      </FeedWrap>
      <NavBottom />
    </>
  );
};

const FeedWrap = styled.section`
  height: 734px;
  overflow: scroll;
`;

export default Home;
