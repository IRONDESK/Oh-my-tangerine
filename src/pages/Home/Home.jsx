import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Feed from "../../Components/Feed";
import HeaderHome from "../../Components/Home/HeaderHome";
import NavBottom from "../../Components/NavBottom";
import { Link } from 'react-router-dom';

import axios from "axios";
import store from "../../Store";

function Home() {
  const [hasFeed, sethasFeed] = useState(false);
  const [getFeedArray, setGetFeedArray] = useState([]);

  function getFeed() {
    const url = 'http://146.56.183.55:5050';
    const token = store.getLocalStorage().token;
    axios.get(`${url}/post/feed`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
        },
    })
    .then(res => {
      setGetFeedArray(res.data.posts);
      if (res.data.posts.length > 0) {
        console.log(getFeedArray)
        sethasFeed(true);
      } else {
        sethasFeed(false);
      }
    })
    .catch(err => {
      console.log('에러', err);
    });
  }

  useEffect(() => {
    getFeed();
  }, []);

  const showFeed = () => {
    return (
      <FeedWrap>
        { hasFeed ? 
          getFeedArray.map( (value) => (
            <Feed
            profileImgSrc = {value.author.image}
            userName = {value.author.username}
            userAccountId = {value.author.accountname}
            text = {value.content}
            imgLink = {value.image}
            likeNum = {value.heartCount}
            chatNum = {value.commentCount}
            date = {(value.createdAt).slice(0,10).replace("-", "년 ").replace("-", "월 ")+"일"}
          />
          ))
          :
          null
        }
      </FeedWrap>
    );
  };

  const showLogo = () => {
    return (
      <LogoContainer>
        <LogoImg src="./image/symbol-logo.png" alt="앱 로고" />
        <p>유저를 검색해 팔로우 해보세요!</p>
        <Link to="/search">
          <button>
            검색하기
          </button>
        </Link>
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
