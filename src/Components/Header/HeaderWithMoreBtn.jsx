import React, { memo, useState, useRef } from 'react';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';
import ModalOption from "../ModalOption";

const Header = memo(({title = null}) => {
  let history = useHistory();

  const logout = () => {
    localStorage.clear();
  }

  return (
    <HeaderWrap>
      <LeftContainer>
        <PrevButton type="button" onClick={ () => {history.goBack()} }>
          <Img src="/image/icon/icon-arrow-left.png" alt="뒤로가기" />
        </PrevButton>
        <PageTitle>
          { title ? title : !title }
        </PageTitle>
      </LeftContainer>
      <ModalCheck type="checkbox" id="dropCheck" hidden />
      <ModalOption
        nameArray={["설정 및 개인정보", "로그아웃"]}
        linkArray={["/profile", "/"]}
        clickArray={[() => {}, logout]}
      />
      <MoreButton type="button" htmlFor="dropCheck">
        <Img src="/image/icon/icon-more-vertical.png" alt="" />
      </MoreButton>
    </HeaderWrap>
  );
});

const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 0 20px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
`;

const LeftContainer = styled.article`
  display: flex;
  height: 22px;
`;
const PrevButton = styled.button`
  width: 22px;
  height: 22px;
`;
const PageTitle = styled.p`
  height: 22px;
  font-weight: 700;
  line-height: 22px;
  margin-left: 11px;
`;

const ModalCheck = styled.input`
  &:checked + section {
    transform: translateY(0%);
  }
`;


const MoreButton = styled.label`
  width: 24px;
  height: 24px;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

export default Header;