import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { useLocation, Link } from 'react-router-dom';

import Header from "../../Components/Header/HeaderWithMoreBtn";
import Feed from "../../Components/Feed";
import Comment from "../../Components/Post/Comment";
import InputComment from "../../Components/Post/InputComment";

import axios from "axios";
import store from "../../Store";

function Post() {
  const RecentPath = useLocation();
  const herePostId = RecentPath.pathname.split("/")[2];

  const [postDetail, setPostDetail] = useState({});
  const [commentDetail, setCommentDetail] = useState([]);
  
  const [postRender, setPostRender] = useState(false);
  const [commentRender, setCommentRender] = useState(false);
  const [commentReRender, setCommentReRender] = useState(false);

  const url = 'http://146.56.183.55:5050';
  const token = store.getLocalStorage().token;
  function getPost() {
    axios.get(`${url}/post/${herePostId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
        },
    })
    .then(res => {
      setPostDetail(res.data.post);
      setPostRender(true);
    })
    .catch(err => {
      console.log('에러', err);
    });
  }
  function getComment() {
    axios.get(`${url}/post/${herePostId}/comments`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
        },
    })
    .then(res => {
      setCommentDetail(res.data.comments);
      setCommentRender(true);
    })
    .catch(err => {
      console.log('에러', err);
    });
  }

  useEffect(() => {
    getPost();
    getComment();
  }, []);

  const [inputText, setInputText] = useState(false);
  const getHasData = (inputText) => {
    setInputText(inputText);
  }

  function convertLocalDate(value) {
    const now = new Date();
    const target = new Date(value);
    const timeDiff = (now-target)/(1000*60); // 분 단위 시간차

    if (timeDiff < 10) {
      return "방금";
    } else if (timeDiff < 60) {
      return Math.floor(timeDiff)+"분 전";
    } else if (timeDiff < 60 * 24) { 
      return Math.floor(timeDiff/60)+"시간 전";
    } else if (timeDiff < 60 * 24 * 3) {
      return Math.floor(timeDiff/(60*24))+"일 전";
    } else {
      return target.toLocaleString().split(".");
    }
  };

  return (
    <>
      <Header />
<ContentWrap>
        {
          postRender ?
          <Feed
          profileImgSrc = {postDetail.author.image}
          userName = {postDetail.author.username}
          userAccountId = {postDetail.author.accountname}
          text = {postDetail.content}
          imgLink = {postDetail.image}
          likeNum = {postDetail.heartCount}
          chatNum = {postDetail.commentCount}
          date = {convertLocalDate(postDetail.createdAt)}
        />
        :
        null
        }
        <CommentList>
          {
            commentRender ?
            commentDetail.map( (value) => (
              <Comment
              commentReRender={commentReRender}
              setCommentReRender={setCommentReRender}
              accountname={value.author.accountname}
              id={value.id}
              avatar={value.author.image}
              name={value.author.username}
              time={convertLocalDate(value.createdAt)}
              content={value.content}
              />
            ))
            :
            null
          }
        </CommentList>
</ContentWrap>
      <InputComment inputText={getHasData}/>
    </>
  );
};

const ContentWrap = styled.main`
  height: 734px;
  overflow-y: auto;
`;

const CommentList = styled.ul`
  padding: 20px 16px;
  border-top: 1px solid ${(props) => props.theme.borderColor};
`;

export default Post;
