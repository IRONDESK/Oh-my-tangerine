import React, { useState } from "react";
import styled from "styled-components";
import Feed from "../../Components/Feed";
import HeaderHome from "../../Components/Home/HeaderHome";
import NavBottom from "../../Components/NavBottom";

const Home = () => {
  const [hasFeed, sethasFeed] = useState(0);

  const showFeed = () => {
    return (
      <FeedWrap>
        <Feed />
        <Feed />
        <Feed />
      </FeedWrap>
    );
  };

  const showBlank = () => {
    return (
      <>
        <div></div>
      </>
    );
  };

  return (
    <>
      <HeaderHome />
      {/* 데이터 연결시 Map으로 */}
      {hasFeed ? showFeed() : showBlank()}
      <NavBottom place="home" />
    </>
  );
};

const FeedWrap = styled.section`
  height: 734px;
  overflow-y: scroll;
`;

export default Home;
