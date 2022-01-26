import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import HeaderSearch from "../../Components/Header/HeaderWithSearch";
import NavBottom from "../../Components/NavBottom";
import UserInfo from "../../Components/Search/SearchUserInfo";
import store from "../../Store";

const Search = () => {
  const url = 'http://146.56.183.55:5050';
  const token = store.getLocalStorage().token;
  const [text, setText] = useState('');
  const [datas, setDatas] = useState('');

  const filterUser = (typedText) => {
    if (!typedText) {
      return;
    }
    axios.get(`${url}/user/searchuser/?keyword=${text}`, {
      headers: {
        "Authorization" : `Bearer ${token}`,
        "Content-type" : 'application/json',
      },
    })
      .then((res) => {
        const datas = res.data;
        const result = datas.map((user, i) => {
          const { accountname, image, username } = user;
          return (
            <UserInfo
              key={username}
              matchedText={typedText}
              avatar={image}
              name={username}
              email={accountname}
              test={user}
            />
          );
        });
        setDatas(result);
        return result;
      })
      .catch(err => {
        console.log('에러', err);
      })
  }

  useEffect(() => {
    if (!text) setDatas(null);
    filterUser(text);
    return () => {

    }
  }, [text]);

  return (
    <Container>
      <HeaderSearch text={setText} />
      <UserList>
        {/* {filterUser(text)} */}
        {datas ? datas : null}
      </UserList>
      <NavBottom place='home'/>
    </Container>
  );
};

const Container = styled.section`
`;
const UserList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 9px;
  height: 730px;
  padding: 20px 16px;
  overflow-y: auto;
`;

export default Search;