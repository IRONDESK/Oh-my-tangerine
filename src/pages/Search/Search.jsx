import React, { useState } from 'react';
import styled from "styled-components";
import HeaderSearch from "../../Components/Header/HeaderWithSearch";
import NavBottom from "../../Components/NavBottom";
import UserInfo from "../../Components/Search/SearchUserInfo";

const userList = [
  { name: "애월읍 위니브 감귤농장", email: "@ weniv_Mandarin", avatar: undefined },
  { name: "애월읍 한라봉 최고 맛집", email: "@ hanlabong", avatar: "./image/Ellipse 1 (7).png" },
  { name: "감귤의 품격 - 애월읍", email: "@ mandarin_king", avatar: "./image/Ellipse 1 (8).png" },
];

const Search = () => {
  const [text, setText] = useState('');

  const filterUser = (typedText) => {
    if (!typedText) return;
    const result = userList.map((user, i) => {
      if (user.name.includes(typedText)) return (
        <UserInfo
          key={user.name}
          matchedText={typedText}
          avatar={user.avatar}
          name={user.name}
          email={user.email}
        />
      );
    });
    return result;
  }

  return (
    <Container>
      <HeaderSearch text={setText} />
      <UserList>
        {filterUser(text)}
        {/* <UserInfo
          avatar={undefined}
          name="애월읍 위니브 감귤농장"
          email="@ weniv_Mandarin"
        />
        <UserInfo
          avatar="./image/Ellipse 1 (7).png"
          name="애월읍 한라봉 최고 맛집"
          email="@ hanlabong"
        />
        <UserInfo
          avatar="./image/Ellipse 1 (8).png"
          name="감귤의 품격 - 애월읍"
          email="@ mandarin_king"
        /> */}
      </UserList>
      <NavBottom place='home'/>
    </Container>
  );
};

const Container = styled.section`
`;
const UserList = styled.ul`
  padding: 20px 16px;
`;

export default Search;
