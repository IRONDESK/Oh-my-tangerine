import React, { useState } from "react";
import styled from "styled-components";
import Feed from "../../Components/Feed";
import HeaderHome from "../../Components/Home/HeaderHome";
import NavBottom from "../../Components/NavBottom";

const Home = () => {
  // const [hasFeed, sethasFeed] = useState(true);
  const [hasFeed, sethasFeed] = useState(false);

  const showFeed = () => {
    return (
      <FeedWrap>
        <Feed />
        <Feed />
        <Feed />
      </FeedWrap>
    );
  };

  const showLogo = () => {
    return (
      <LogoContainer>
        <LogoImg src="./image/symbol-logo.png" alt="앱 로고" />
        <p>유저를 검색해 팔로우 해보세요!</p>
        <button>검색하기</button>
      </LogoContainer>
    );
  };

  return (
    <>
      <HeaderHome title={'감귤마켓 피드'}/>
      {/* 데이터 연결시 Map으로 */}
      {hasFeed ? showFeed() : showLogo()}
      <NavBottom place="home" />
    </>
  );
};

const FeedWrap = styled.section`
  height: 734px;
  overflow-y: scroll;
`;
const LogoContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 712px;
  p {
    font-size: 14px;
    line-height: 14px;
    color: #767676;
    margin-bottom: 20px;
  }
  button {
    background: #F26E22;
    border-radius: 44px;
    color: #FFFFFF;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    padding: 13px 33px;
  }
`;
const LogoImg = styled.img`
  width: 74px;
  height: 89px;
  margin-bottom: 25px;
`;

export default Home;
