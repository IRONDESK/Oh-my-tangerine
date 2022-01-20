import React from "react";
import styled from 'styled-components';

import HeaderWithMoreBtn from "../../Components/Header/HeaderWithMoreBtn";
import NavBottom from '../../Components/NavBottom';
import ChatTemplate from './ChatTemplate';


const Chat = () => {
  return (
  <div>
    <HeaderWithMoreBtn />
    <MainContainer>
      <ChatTemplate
      chatLink = 'chat/1'
      chatWith = '애월읍 위니브 감귤농장'
      chatLastMsg = '감귤 잘 받아보셨나요? 다음에도 또 이용해주세요 고객님!'
      chatLastDate = '2022-01-11'
      chatStatus = {true}
      />
      <ChatTemplate
      chatLink = 'chat/2'
      chatWith = '제주최고농장'
      chatLastMsg = '감귤 잘 받아보셨나요? 다음에도 또 이용해주세요 고객님!'
      chatLastDate = '2022-01-11'
      chatStatus = {true}
      />
      <ChatTemplate
      chatLink = 'chat/3'
      chatWith = '친환경 한라봉 농장 제일감귤밭'
      chatWithImg = '/image/chat-exapmle.png'
      chatLastMsg = '한라봉 수확 체험 행사가 진행 중입니다. 지금 바로 확인하세요'
      chatLastDate = '2021-12-30'
      chatStatus = {false}
      />

    </MainContainer>
    <NavBottom place="chat"/>
  </div>
  );
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  margin: 24px 10px;
  padding: 5px;
`;

export default Chat;
