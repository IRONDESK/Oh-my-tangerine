import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBottom = () => {
  return (
    <Container>
      <li>
        <Link to="/home">
          <IconWrap>
            <img src="./image/icon/icon-home-fill.png" alt="" />
            <span>홈</span>
          </IconWrap>
        </Link>
      </li>
      <li>
        <Link to="/chat">
          <IconWrap>
            <img src="./image/icon/icon-message-circle.png" alt="" />
            <span>채팅</span>
          </IconWrap>
        </Link>
      </li>
      <li>
        <Link to="/upload">
          <IconWrap>
            <img src="./image/icon/icon-edit.png" alt="" />
            <span>게시물 작성</span>
          </IconWrap>
        </Link>
      </li>
      <li>
        <Link to="/profile">
          <IconWrap>
            <img src="./image/icon/icon-user.png" alt="" />
            <span>프로필</span>
          </IconWrap>
        </Link>
      </li>
    </Container>
  );
};

const Container = styled.ul`
  ${(props) => props.theme.setFlex("space-between", "center")};
  width: 100%;
  height: 60px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 40px;
  border-top: 0.5px solid #dbdbdb;
`;

const IconWrap = styled.div`
  ${(props) => props.theme.setFlex("center", "center", "column")};

  img {
    width: 18px;
    height: 20px;
  }
  span {
    display: inline-block;
    margin-top: 6px;
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
    color: #767676;
  }
`;

export default NavBottom;
