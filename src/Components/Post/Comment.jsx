import React, { useState } from "react";
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import ModalOption from "../ModalOption";

import axios from "axios";
import store from "../../Store";

const Comment = ({ id, avatar, name, time, content, commentRender, setCommentRender }) => {
  const history = useHistory();
  const RecentPath = useLocation();
  const herePostId = RecentPath.pathname.split("/")[2];

  function onClick() {
    console.log("그냥 실행됨");
  };

  function DeleteComment() {
    const url = 'http://146.56.183.55:5050';
    const token = store.getLocalStorage().token;
    const confirmValue = window.confirm("삭제하시겠습니까?");
    if (confirmValue == true) {
      axios.delete(`${url}/post/${herePostId}/comments/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
        },
      })
      .then(res => {
        console.log('결과', res);
      })
      .catch(err => {
        console.log('에러', err);
      });
    } else {
      return;
    }
    setCommentRender(!commentRender);
  };

  return (
    <CommentWarp>
      <UserInfoWrap>
        <UserInfo>
          <Avatar src={avatar} />
          <Name>{name}</Name>
          <Time>{time}</Time>
        </UserInfo>
        <ModalCheck type="checkbox" id="comment" hidden />
        <ModalOption
          nameArray={["삭제"]}
          clickArray={[DeleteComment]}
          id='comment'
        />
        <MoreButton htmlFor="comment">
          <img src="/image/icon/icon-more-vertical.png" alt="" />
        </MoreButton>
      </UserInfoWrap>
      <Content>
        {content}
      </Content>
    </CommentWarp>
  )
};

const CommentWarp = styled.li`
  margin-bottom: 16px;
`;

const UserInfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UserInfo = styled.div`
  display: flex;
`;

const Avatar = styled.img`
  margin-right: 12px;
  width: 36px;
  height: 36px;
  border-radius: 100%;
  cursor: pointer;
`;
  
const Name = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  margin-right: 6px;
  padding-top: 8px;
`;

const Time = styled.div`
  font-size: 10px;
  line-height: 13px;
  padding-top: 10px;
  color: ${(props) => props.theme.subFontColor2};
`;

const ModalCheck = styled.input`
  &:checked + section {
    transform: translateY(0%);
  }
`;

const MoreButton = styled.label`
  cursor: pointer;
  margin-top: 6px;
  width: 20px;
  height: 20px;
  img {
    width: 20px;
    height: 20px;
  }
`;

const Content = styled.div`
  padding-top: 6px;
  padding-left: 48px;
  font-size: 14px;
  line-height: 18px;
  color: #333333;
`;

export default Comment;