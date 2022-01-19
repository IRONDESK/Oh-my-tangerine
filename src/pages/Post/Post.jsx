import React from "react";
import styled from 'styled-components';
import Header from "../../Components/Header/HeaderWithMoreBtn";
import Feed from "../../Components/Feed";
import Chat from "../../Components/Chat";
import InputChat from "../../Components/InputChat";

const Post = () => {
  return (
    <PostContainer>
      <Header />
      <Feed />
      <ChatList>
        <Chat
          avatar={'./image/Ellipse 4.png'}
          name={'서귀포시 무슨 농장'} time={'5분 전'}
          content={'게시글 답글 ~~ !! 최고최고'}
        />
        <Chat
          avatar={'./image/Ellipse 4 (1).png'}
          name={'감귤러버'}
          time={'15분 전'}
          content={'안녕하세요. 사진이 너무 멋있어요. 한라봉 언제 먹을 수 있나요? 기다리기 지쳤어요 땡뻘땡뻘...'}
        />
      </ChatList>
      <InputChat />
    </PostContainer>
  );
};

const PostContainer = styled.ul`
  section {
    margin-top: 48px;
  }
`;

const ChatList = styled.ul`
  padding: 20px 16px;
  border-top: 1px solid ${(props) => props.theme.borderColor};
`;

export default Post;
