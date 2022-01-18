import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBottom = ({place=""}) => {
  const iconArray = {
    "" : ["home.png", "message-circle.png", "edit.png", "user.png"],
    "home" : ["home-fill.png", "message-circle.png", "edit.png", "user.png"],
    "chat" : ["home.png", "message-circle-fill.png", "edit.png", "user.png"],
    "upload" : ["home.png", "message-circle.png", "edit-fill.svg", "user.png"],
    "profile" : ["home.png", "message-circle.png", "edit.png", "user-fill.png"],
  }

  const iconLink = iconArray[`${place}`].map((i) => '/image/icon/icon-' + i );

  return (
    <Container>
      <ItemContLi>
        <Link to="/home">
          <IconWrap>
            <img src={iconLink[0]} alt="" />
            <span>홈</span>
          </IconWrap>
        </Link>
      </ItemContLi>
      <ItemContLi>
        <Link to="/chat">
          <IconWrap>
            <img src={iconLink[1]} alt="" />
            <span>채팅</span>
          </IconWrap>
        </Link>
      </ItemContLi>
      <ItemContLi>
        <Link to="/upload">
          <IconWrap>
            <img src={iconLink[2]} alt="" />
            <span>게시물 작성</span>
          </IconWrap>
        </Link>
      </ItemContLi>
      <ItemContLi>
        <Link to="/profile">
          <IconWrap>
            <img src={iconLink[3]} alt="" />
            <span>프로필</span>
          </IconWrap>
        </Link>
      </ItemContLi>
    </Container>
  );
};

const Container = styled.ul`
  ${(props) => props.theme.setFlex("space-between", "center")};
  width: 100%;
  height: 65px;
  position: absolute;
  bottom: 0;
  padding: 0 12px;
  background-color: #fff;
  border-top: 0.5px solid #dbdbdb;
`;

const ItemContLi = styled.li`
  flex: 1;
`;
const IconWrap = styled.div`
  ${(props) => props.theme.setFlex("center", "center", "column")};

  img {
    width: 21px;
    height: auto;
  }
  span {
    display: inline-block;
    margin-top: 3px;
    font-size: 11px;
    font-weight: 400;
    line-height: 14px;
    color: #767676;
  }
`;

export default NavBottom;
