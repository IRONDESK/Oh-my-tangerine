import React from "react";
import styled from "styled-components";
import UserInfo from "./UserInfo";

const Feed = () => {
  return (
    <Container>
      <UserInfo />
      <FeedContents>
        <FeedText>
          옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
          이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게
          뛰노는 인생의 힘있다.
        </FeedText>
        <FeedImage src="./image/post-img-example.png" alt="피드 이미지" />
        <FeedLikeAndChat>
          <LikeButton>
            <LikeImg src="./image/icon/icon-heart.png" alt="피드 이미지" />
            <LikeCount>58</LikeCount>
          </LikeButton>
          <ChatButton>
            <ChatImg src="./image/icon/icon-message-circle.png" alt="" />
            <ChatCount>12</ChatCount>
          </ChatButton>
        </FeedLikeAndChat>
        <FeedDate>2020년 10월 21일</FeedDate>
      </FeedContents>
    </Container>
  );
};

const Container = styled.section`
  padding: 0 16px;
  padding-top: 20px;
  padding-bottom: 24px;
`;

const FeedContents = styled.article`
  padding-left: 54px;
`;

const FeedText = styled.div`
  font-size: 14px;
  line-height: 17.53px;
  margin-bottom: 16px;
`;

const FeedImage = styled.img`
  margin-bottom: 12px;
  cursor: pointer;
`;

const FeedLikeAndChat = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const LikeButton = styled.button`
  display: flex;
  align-items: center;
`;

const ChatButton = styled.button`
  display: flex;
  align-items: center;
`;

const LikeImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 6px;
`;

const ChatImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 6px;
`;

const LikeCount = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.subFontColor2};
  margin-right: 16px;
`;

const ChatCount = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.subFontColor2};
`;

const FeedDate = styled.div`
  font-size: 10px;
  color: ${(props) => props.theme.subFontColor2};
`;

export default Feed;
