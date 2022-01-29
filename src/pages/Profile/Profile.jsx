import React, { memo, useState, useEffect } from "react";
import styled from 'styled-components';
import store from "../../Store";
import axios from 'axios';

import Header from "../../Components/Header/HeaderWithMoreBtn";
import ProfileInfo from "../../Components/Profile/ProfileInfo";
import NowSales from "../../Components/Profile/NowSales";
import Feed from "../../Components/Feed";
import NavBottom from "../../Components/NavBottom";

const Profile = memo(({ location }) => {
  const user = store.getAccount();
  let accountname = store.getAccount();
  if (location.state) {
    accountname = location.state.accountname;
  }
  const [feedList, setFeedList] = useState([]);
  const [isModalOn, setIsModalOn] = useState(false);

  async function getFeedList() {
    const url = 'http://146.56.183.55:5050';
    const token = store.getLocalStorage().token;
    const response = await axios.get(
      `${url}/post/${accountname}/userpost`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    setFeedList(response.data.post);
  }

  useEffect(() => {
    getFeedList();
  }, [accountname]);

  return(
    <ProfileContainer>
      <Header />
      <MainContainer>
        <ProfileInfo accountname={accountname} />
        <NowSales accountname={accountname}/>
        <FeedWrap>
          {feedList.map((feed) => (
            <Feed
            postLink = {feed.id}
            profileImgSrc={feed.author.image}
            userName={feed.author.username}
            userAccountId={feed.author.accountname}
            text={feed.content}
            imgLink={feed.image}
            likeNum={feed.heartCount}
            chatNum={feed.comments.length}
            date={(feed.createdAt).slice(0,10).replace("-", "년 ").replace("-", "월 ")+"일"}
            isHeart={feed.hearted}
            />
          ))}
        </FeedWrap>
      </MainContainer>
      { user === accountname ? <NavBottom place="profile"/> : <NavBottom place="home"/> }
    </ProfileContainer>
  );
});

const ProfileContainer = styled.main`
`
const MainContainer = styled.section`
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