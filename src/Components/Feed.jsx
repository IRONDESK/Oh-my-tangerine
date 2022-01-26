import React from "react";
import styled from "styled-components";
import UserInfo from "./UserInfo";
import { Link } from 'react-router-dom';

function Feed ({
  profileImgSrc = "./image/basic-profile-img.png",
  userName,
  userAccountId,
  text,
  imgLink="./image/post-img-example.png",
  likeNum="0",
  chatNum="0",
  date="Date Loading"
}) {
  return (
    <Container>
      <UserInfo
        profileImgSrc = {profileImgSrc}
        userName = {userName}
        userAccountId = {userAccountId}
      />
      <FeedContents>
        <FeedText>
          {text}
        </FeedText>
        { imgLink !== "" ?
          <FeedImgWrap>
            { imgLink.split(",").length > 1 ? 
              <AmountTag>
                +{imgLink.split(",").length - 1}
              </AmountTag>
            : null }
            <FeedImg
              src = {imgLink.split(",")[0]}
              alt = "게시물 이미지"
              />
          </FeedImgWrap>
            :
          null
        }
        <FeedLikeAndChat>
          <LikeButton>
            <LikeImg src="./image/icon/icon-heart.png" alt="좋아요" />
            <LikeCount>{likeNum}</LikeCount>
          </LikeButton>
          <ChatButton>
            <ChatImg src="./image/icon/icon-message-circle.png" alt="댓글" />
            <ChatCount>{chatNum}</ChatCount>
          </ChatButton>
        </FeedLikeAndChat>
        <FeedDate>{date}</FeedDate>
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

const FeedImgWrap = styled(Link)`
  cursor: pointer;
  display: block;
  position: relative;
  margin-bottom: 12px;
  width: 280px;
  max-height: 300px;
  border-radius: 15px;
  overflow: hidden;
`;
const AmountTag = styled.span`
  display: block;
  position: absolute;
  bottom: 13px;
  right: 13px;
  width: 26px;
  height: 26px;
  color: #fff;
  text-align: center;
  line-height: 26px;
  font-size: 13px;
  background-color: #0000006c;
  border-radius: 15px;
`;
const FeedImg = styled.img`
  width: calc(100% + 15px);
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
