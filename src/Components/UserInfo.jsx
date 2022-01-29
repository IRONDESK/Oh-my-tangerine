import React from 'react'
import styled from 'styled-components';
import { Link, useHistory } from "react-router-dom";
import ModalOption from "../Components/ModalOption";
import store from "../Store";
import axios from 'axios';

const UserInfo = ({ profileImgSrc, userName, userAccountId, postLink }) => {
  const user = store.getAccount();
  const history = useHistory();

  const deleteFeed = async () => {
    const url = 'http://146.56.183.55:5050';
    const token = store.getLocalStorage().token;
    const confirmValue = window.confirm("삭제하시겠습니까?");
    if (confirmValue == true) {
      await axios.delete(`${url}/post/${postLink}`, {
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
  }

  const reworkFeed = async () => {
    const url = 'http://146.56.183.55:5050';
    const token = store.getLocalStorage().token;
    const res = await axios.get(`${url}/post/${postLink}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    console.log(res.data.post);
    history.push({
      pathname: '/uploadRework',
      state: {
        content: res.data.post.content,
        image: res.data.post.image,
        postLink: postLink,
      },
    });
  }

  const reportFeed = async () => {
    console.log(postLink);
    const url = 'http://146.56.183.55:5050';
    const token = store.getLocalStorage().token;
    const confirmValue = window.confirm("신고하시겠습니까?");
    if (confirmValue == true) {
      await axios.post(`${url}/post/${postLink}/report`, {
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
    window.alert('신고되었습니다.');
  }

  return (
    <>
    <UserInfoWrap>
      <ProfileWrap>
        <Avatar>
          <Link to={{
            pathname: `/profile/${userAccountId}`,
            state: {
                accountname: userAccountId,
              },
          }}>
            <Img src={profileImgSrc} alt="프로필 이미지" />
          </Link>
        </Avatar>
        <Info>
          <Name>{userName}</Name>
          <AccountId>@{userAccountId}</AccountId>
        </Info>
      </ProfileWrap>
      <ModalCheck type="checkbox" id={postLink} hidden />
      {user === userAccountId ? 
        <ModalOption
          nameArray={["삭제", "수정"]}
          clickArray={[deleteFeed, reworkFeed]}
          id={postLink}
        /> :
        <ModalOption
          nameArray={["신고하기"]}
          clickArray={[reportFeed]}
          id={postLink}
        />
    }
      <MoreButton htmlFor={postLink}>
        <Img src="/image/icon/icon-more-vertical.png" alt="" />
      </MoreButton>
    </UserInfoWrap>
    </>
  );
};

const UserInfoWrap = styled.article`
  display: flex;
  width: 100%;
  height: 42px;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const ProfileWrap = styled.article`
  display: flex;
`;

const Avatar = styled.a`
  width: 42px;
  height: 42px;
  border-radius: 100%;
  overflow: hidden;
  margin-right: 12px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Info = styled.article`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  height: 50%;
  font-weight: 700;
  font-size: 14px;
  `;
  
  const AccountId = styled.article`
  display: flex;
  align-items: center;
  height: 50%;
  font-size: 12px;
  color: ${(props) => props.theme.subFontColor2};
`;

const ModalCheck = styled.input`
  &:checked + section {
    transform: translateY(0%);
  }
`;

const MoreButton = styled.label`
  cursor: pointer;
  width: 18px;
  height: 18px;
`;

export default UserInfo;
