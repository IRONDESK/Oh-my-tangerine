import React from 'react'
import styled from 'styled-components';

const UserInfo = ({ avatar="./image/basic-profile-img.png", name, email, matchedText }) => {
  return (
    <UserInfoWrap>
      <ProfileWrap>
        <Avatar>
          <Img src={avatar} alt="" />
        </Avatar>
        <Info>
          <Name>
            {name.slice(0, name.indexOf(matchedText))}
            <strong>{matchedText}</strong>
            {name.slice(name.indexOf(matchedText) + matchedText.length, name.length)}
          </Name>
          <Email>{email}</Email>
        </Info>
      </ProfileWrap>
    </UserInfoWrap>
  );
};

const UserInfoWrap = styled.li`
  display: flex;
  width: 100%;
  height: 42px;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const ProfileWrap = styled.div`
  display: flex;
`;

const Avatar = styled.a`
  width: 42px;
  height: 42px;
  margin-right: 12px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Info = styled.div`
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  height: 50%;
  font-weight: 700;
  font-size: 14px;
  strong {
    color: #F26E22;
  }
  `;
  
  const Email = styled.div`
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
