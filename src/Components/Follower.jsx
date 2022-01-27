import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import store from "../Store";
import axios from 'axios';

const Follower = ({ imgLink, name, intro, isFollow, accountName }) => {
  const user = store.getAccount();
  const [followState, setFollowState] = useState(isFollow);

  async function addFollow() {
    const url = 'http://146.56.183.55:5050';
    const token = store.getLocalStorage().token;
    const response = await axios(`${url}/profile/${accountName}/follow`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
        },
    });
    setFollowState(true);
  }

  async function removeFollow() {
      const url = 'http://146.56.183.55:5050';
      const token = store.getLocalStorage().token;
      const response = await axios(`${url}/profile/${accountName}/unfollow`, {
          method: 'DELETE',
          headers: {
              Authorization: `Bearer ${token}`,
              'Content-type': 'application/json',
          },
      });
      setFollowState(false);
  }

  const onClickButton = () => {
    if (followState) removeFollow();
    else addFollow();
  };

  const showButton = () => {
    if (user === accountName) return null;
    else {
      if (followState) return <CancelButton onClick={onClickButton}>취소</CancelButton>;
      else return <FollowButton onClick={onClickButton}>팔로우</FollowButton>
    }
  }

  return (
    <Container>
      <Link to={{
        pathname: `/profile/${accountName}`,
        state: {
            accountname: accountName,
          },
        }}>
        <ClickWrap>
          <Avatar>
            <AvatarImg src={imgLink} alt="" />
          </Avatar>
          <FollowerInfo>
            <Name>{name}</Name>
            <Desc>{intro}</Desc>
          </FollowerInfo>
        </ClickWrap>
      </Link>
      { showButton() }
    </Container>
  );
};

const Container = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-bottom: 16px;
`;

const ClickWrap = styled.div`
  display: flex;
  height: 50px;
  width: 280px;
`;

const Avatar = styled.a`
  width: 50px;
  height: 50px;
  margin-right: 12px;
`;

const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
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
  width: 58px;
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
  width: 58px;
  height: 28px;
  background: #FFFFFF;
  border: 1px solid #DBDBDB;
`;

export default Follower;

