import React, { useState } from 'react'
import styled from 'styled-components';

const Follower = ({ imgLink, name, desc, follow }) => {
  const [followState, setFollowState] = useState(follow);

  const onClickButton = () => {
    if (followState) setFollowState(false);
    else setFollowState(true);
  };

  return (
    <>
    <Container>
      <Avatar>
        <AvatarImg src={imgLink} alt="" />
      </Avatar>
      <FollowerInfo>
        <Name>{name}</Name>
        <Desc>{desc}</Desc>
      </FollowerInfo>
      { followState ?
      <CancelButton onClick={onClickButton}>취소</CancelButton> :
      <FollowButton onClick={onClickButton}>팔로우</FollowButton> }
    </Container>
    </>
  );
};

const Container = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-bottom: 16px;
`;

const Avatar = styled.a`
  width: 50px;
  height: 50px;
  margin-right: 12px;
`;

const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
`;

const FollowerInfo = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Name = styled.div`
  font-weight: 700;
  font-size: 14px;
  `;

  const Desc = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.subFontColor2};
`;

const FollowButton = styled.button`
  margin-left: auto;
  background-color: #F26E22;
  border-radius: 26px;
  padding: 7px 11px;
  font-size: 12px;
  line-height: 15px;
  color: #FFFFFF;
  width: 56px;
  height: 28px;
  .off {
    background: #FFFFFF;
    border: 1px solid #DBDBDB;
  }
`;

const CancelButton = styled.button`
  margin-left: auto;
  border-radius: 26px;
  padding: 7px 11px;
  font-size: 12px;
  line-height: 15px;
  width: 56px;
  height: 28px;
  background: #FFFFFF;
  border: 1px solid #DBDBDB;
`;

export default Follower;
