import React from "react";
import styled from 'styled-components';
import store from "../../Store";

import Header from "../../Components/Header/HeaderWithMoreBtn";
import ProfileInfo from "../../Components/Profile/ProfileInfo";
import NowSales from "../../Components/Profile/NowSales";
import Feed from "../../Components/Feed";
import NavBottom from "../../Components/NavBottom";

const Profile = ({ location }) => {
  let accountname = store.getLocalStorage().accountname;
  if (location.state) {
    accountname = location.state.accountname;
  }

  return(
    <div>
      <Header value="dropmenu" />
      <MainContainer>
        <ProfileInfo accountname={accountname} />
        <NowSales />
        <FeedWrap>
          <Feed />
          <Feed />
          <Feed />
        </FeedWrap>
      </MainContainer>
      { location.state ? <NavBottom place="home"/> : <NavBottom place="profile"/> }
    </div>
  );
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 735px;
  background-color: #F1F1F1;
  gap: 6px;
  overflow-y: auto;
  &::-webkit-scrollbar {
      width: 10px;
      background-color: #F3F3F3;
  }
  &::-webkit-scrollbar-thumb {
      margin: 0 5px;
      background-color: #e4e4e4;
      box-sizing: border-box;
      border-radius: 25px;
  }
`;

const FeedWrap = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-top: 0.5px solid #DBDBDB;
  border-bottom: 0.5px solid #DBDBDB;
`;

export default Profile;