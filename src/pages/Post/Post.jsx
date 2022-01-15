import React from "react";
import styled from 'styled-components';
import Header from "../../Components/Header/HeaderWithMoreBtn";
import Feed from "../../Components/Feed";
import Chat from "../../Components/Chat";
import InputChat from "../../Components/InputChat";

const Post = () => {
  return (
    <>
      <Header />
      <Feed />
      <ChatList>
        <Chat />
        <Chat />
      </ChatList>
      <InputChat />
    </>
  );
};

const ChatList = styled.ul`
  padding: 20px 16px;
  border-top: 1px solid ${(props) => props.theme.borderColor};
`;

export default Post;
