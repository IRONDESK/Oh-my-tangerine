import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import NavBottom from '../../Components/NavBottom';
import Follower from '../../Components/Follower';
import Header from '../../Components/Header/HeaderFollowers';
import store from "../../Store";
import axios from 'axios';

const Followings = ({ location }) => {
  const user = store.getLocalStorage().accountname;
  const accountname = location.state.accountname;
  let history = useHistory();
  const [followerList, setFollowerList] = useState([]);

  async function getFollower() {
    const url = 'http://146.56.183.55:5050';
    const token = store.getLocalStorage().token;
    const response = await axios.get(
      `${url}/profile/${accountname}/following/?limit=10000`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    console.log(response.data);
    setFollowerList(response.data);
  }

  useEffect(() => {
    getFollower();
  }, []);

  return (
    <Container>
      <Header title={'Followers'}></Header>
      <ul className='followers-list'>
        {followerList.map((follower) => (
          <Follower
            key={follower.accountname}
            imgLink={follower.image}
            name={follower.username}
            intro={follower.intro}
            isFollow={follower.isfollow}
            accountName={follower.accountname}
          />
        ))}
      </ul>
      { user === accountname ? <NavBottom place='profile'/> : <NavBottom place='home'/> }
    </Container>
  )
}

const Container = styled.section`
  .followers-list {
    padding: 24px 16px;
  }
`;

export default Followings;
