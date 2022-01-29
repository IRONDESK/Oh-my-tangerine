import React, {useState} from "react";
import styled from "styled-components";
import UserInfo from "./UserInfo";
import { Link } from "react-router-dom";
import store from "../Store";
import axios from 'axios';

function Feed({
  postLink = "Contents",
  profileImgSrc = "/image/basic-profile-img.png",
  userName,
  userAccountId,
  text,
  imgLink = "/image/post-img-example.png",
  likeNum = "0",
  chatNum = "0",
  date = "Date Loading",
  isHeart = 'false',
}) {
  const [heart, setHeart] = useState(isHeart);
  const [heartCount, setHeartCount] = useState(likeNum);
  const [moveValue, setMoveValue] = useState(0);

  function MoveImg(e) {
    setMoveValue(e.target.dataset.order);
  }

  function getImgPostLink(postLink) {
    if (postLink !== "") {
      return "/post/" + postLink;
    } else {
      return "#";
    }
  }

  async function cancelHeart() {
    const url = 'http://146.56.183.55:5050';
    const token = store.getLocalStorage().token;
    const response = await axios.delete(
      `${url}/post/${postLink}/unheart`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    setHeart(false);
    setHeartCount(prev => prev - 1);
  }

  async function giveHeart() {
    const url = 'http://146.56.183.55:5050';
    const token = store.getLocalStorage().token;
    const response = await axios(`${url}/post/${postLink}/heart`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    setHeart(true);
    setHeartCount(prev => prev + 1);
  }

  return (
    <Container>
      <UserInfo
        postLink={postLink}
        profileImgSrc={profileImgSrc}
        userName={userName}
        userAccountId={userAccountId}
      />
      <FeedContents>
        <FeedText>{text}</FeedText>
        {imgLink !== "" ? (
          <FeedImgWrap to={getImgPostLink(postLink)}>
            <ImgWrap style={{ transform: "translateX(-"+290 * moveValue+"px)", transition: ".5s all"}}>
              {imgLink.split(",").map((value) => (
                <FeedImg src={value} alt="게시물 이미지" />
              ))}
            </ImgWrap>
          </FeedImgWrap>
        ) : null}
<BtnWrap>
  <ImagesBtnCont>
          {imgLink.split(",").length > 1 ? (
            <>
              {imgLink.split(",").map((value, index) => (
                <>
                { index == 0 ?
                  <MoveInputButton type="radio" name={postLink} id={value} data-order={index} onChange={MoveImg} defaultChecked/>:
                  <MoveInputButton type="radio" name={postLink} id={value} data-order={index} onChange={MoveImg} />
                }
                <MoveLabelButton for={value}/>
                </>
              ))}
            </>
          ) : null}
  </ImagesBtnCont>
</BtnWrap>
        <FeedLikeAndChat>
          <LikeButton>
            { heart ? 
              <LikeImg src="/image/icon/icon-heart-active.png" alt="좋아요" onClick={cancelHeart} /> : 
              <LikeImg src="/image/icon/icon-heart.png" alt="좋아요" onClick={giveHeart} />
            }
            
            <LikeCount>{heartCount}</LikeCount>
          </LikeButton>
          <ChatButton to={getImgPostLink(postLink)}>
            <ChatImg src="/image/icon/icon-message-circle.png" alt="댓글" />
            <ChatCount>{chatNum}</ChatCount>
          </ChatButton>
        </FeedLikeAndChat>
        <FeedDate>{date}</FeedDate>
      </FeedContents>
    </Container>
  );
}

const Container = styled.section`
  padding: 0 16px;
  padding-top: 20px;
  padding-bottom: 24px;
`;

const FeedContents = styled.article`
  margin-left: 54px;
`;

const FeedText = styled.article`
  font-size: 14px;
  line-height: 17.53px;
  margin-bottom: 16px;
`;

const FeedImgWrap = styled(Link)`
  cursor: pointer;
  display: block;
  margin-bottom: 12px;
  width: 290px;
  max-height: 300px;
  border-radius: 15px;
  overflow: hidden;
`;
const BtnWrap = styled.article`
  position: relative;
  width: 60px;
  left: 50%;
  transform: translateX(-50%);

`;
const ImagesBtnCont = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  height: 32px;
  bottom: 13px;
  text-align: center;
`;
const MoveInputButton = styled.input`
  display: none;
  &:checked + label {
    background-color: ${(props) => props.theme.mainColor2};
  }
`;
const MoveLabelButton = styled.label`
  cursor: pointer;
  display: inline-block;
  margin: 0 5px;
  width: 10px;
  height: 10px;
  border: #fff;
  border-radius: 100%;
  box-shadow: 0 0 4px 1px #0000002a;
  background-color: #fff;
`;

const ImgWrap = styled.article`
  display: flex;
`;
const FeedImg = styled.img`
  width: 290px;
`;

const FeedLikeAndChat = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const LikeButton = styled.button`
  display: flex;
  align-items: center;
`;

const ChatButton = styled(Link)`
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
  font-size: 11px;
  color: ${(props) => props.theme.subFontColor2};
`;

export default Feed;
