import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";

function UserInfo({
  profileImgSrc,
  userName,
  userAccountId
}) {
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
      <MoreButton>
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

const MoreButton = styled.button`
  width: 18px;
  height: 18px;
`;

export default UserInfo;
