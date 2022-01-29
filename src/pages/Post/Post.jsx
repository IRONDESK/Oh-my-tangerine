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
          date = {(postDetail.createdAt).slice(0,10).replace("-", "년 ").replace("-", "월 ")+"일"}
        />
        :
        null
        }
        <CommentList>
          {
            commentRender ?
            commentDetail.map( (value) => (
              <Comment
              commentRender={commentRender}
              setCommentRender={setCommentRender}
              id={value.id}
              avatar={value.author.image}
              name={value.author.username}
              time={(value.createdAt).slice(0,10).replace("-", "년 ").replace("-", "월 ")+"일 "+
              (value.createdAt).slice(11,16)}
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
