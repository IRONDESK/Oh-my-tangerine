import React from 'react'
import styled from 'styled-components';

const Chat = () => {
  return (
    <ChatWarp>
      <UserInfoWrap>
        <UserInfo>
          <Avatar src='./image/Ellipse 4.png' />
          <Name>서귀포시 무슨 농장</Name>
          <Time>5분 전</Time>
        </UserInfo>
        <MoreButton>
          <img src="./image/icon/icon-more-vertical.png" alt="" />
        </MoreButton>
      </UserInfoWrap>
      <Content>
        게시글 답글 ~~ !! 최고최고
      </Content>
    </ChatWarp>
  )
};

const ChatWarp = styled.li`
  margin-bottom: 16px;
`;

const UserInfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UserInfo = styled.div`
  display: flex;
`;

const Avatar = styled.img`
  margin-right: 12px;
  cursor: pointer;
  `;
  
  const Name = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  margin-right: 6px;
  padding-top: 8px;
  `;
  
  const Time = styled.div`
  font-size: 10px;
  line-height: 13px;
  padding-top: 10px;
  color: ${(props) => props.theme.subFontColor2};
`;

const MoreButton = styled.button`
  margin-top: 6px;
  width: 20px;
  height: 20px;
  img {
    width: 20px;
    height: 20px;
  }
`;

const Content = styled.div`
  padding-top: 6px;
  padding-left: 48px;
  font-size: 14px;
  line-height: 18px;
  color: #333333;
`;

export default Chat;