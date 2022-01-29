import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import ModalOption from "../Components/ModalOption";
import store from "../Store";
import axios from 'axios';

const UserInfo = ({ profileImgSrc, userName, userAccountId}) => {
  const user = store.getAccount();

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
      <ModalCheck type="checkbox" id="게시글 삭제와 수정" hidden />
      {user === userAccountId ? 
        <ModalOption
          nameArray={["삭제", "수정"]}
          clickArray={[() => {}, () => {}]}
          id='게시글 삭제와 수정'
        /> :
        <ModalOption
          nameArray={["신고하기"]}
          clickArray={[() => {}]}
          id='게시글 삭제와 수정'
        />
    }
      <MoreButton htmlFor="게시글 삭제와 수정">
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
