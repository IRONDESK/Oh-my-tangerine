import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { useLocation, useHistory } from 'react-router-dom';

import ModalOption from "../ModalOption";

import axios from "axios";
import store from "../../Store";

const Comment = ({ id, avatar, name, time, content, accountname, commentReRender, setCommentReRender }) => {
  const RecentPath = useLocation();
  const history = useHistory();
  const herePostId = RecentPath.pathname.split("/")[2];
  const [checkIdPermission, setCheckIdPermission] = useState(false);

  async function DeleteComment() {
    const url = 'http://146.56.183.55:5050';
    const token = store.getLocalStorage().token;
    const confirmValue = window.confirm("삭제하시겠습니까?");
    if (confirmValue == true) {
      await axios.delete(`${url}/post/${herePostId}/comments/${id}`, {
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
    window.location.reload();
  };

  function CheckCommentAuthor() {
    const getLoginId = store.getLocalStorage().accountname;
    if (getLoginId == accountname) {
      setCheckIdPermission(true);
    }
  };
  useEffect(() => {
    CheckCommentAuthor();
  }, []);
  
  function RedirectProfile() {
    history.push({
      pathname: `/profile/${accountname}`,
      state: {
        accountname: accountname,
      },
    });
  };

  return (
    <CommentWarp>
      <UserInfoWrap>
        <UserInfo>
          <Avatar src={avatar} onClick={RedirectProfile} />
          <Name>{name}</Name>
          <Time>{time}</Time>
        </UserInfo>
        <ModalCheck type="checkbox" id="comment" hidden />
        {checkIdPermission ? 
        <ModalOption
          nameArray={["삭제"]}
          clickArray={[DeleteComment]}
          id='comment'
        />
        :
        <ModalOption
        nameArray={["프로필 보기"]}
        clickArray={[RedirectProfile]}
        id='comment'
        />
        }
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

const UserInfo = styled.section`
  display: flex;
  align-items: center;
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
`;

const Time = styled.div`
  font-size: 11px;
  line-height: 13px;
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