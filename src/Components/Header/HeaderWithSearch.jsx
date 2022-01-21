import React from 'react';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';

const HeaderSearch = () => {
  let history = useHistory();
  return (
    <HeaderWrap>
      <LeftContainer>
        <PrevButton onClick={ () => {history.goBack()} }>
          <Img src="/image/icon/icon-arrow-left.png" alt="뒤로가기" />
        </PrevButton>
      </LeftContainer>
      <SearchInput type="text" placeholder='계정 검색' />
    </HeaderWrap>
  );
};

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

const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

const SearchInput = styled.input`
  width: 316px;
  height: 32px;
  background: #F2F2F2;
  border-radius: 32px;
  padding: 7px 16px;
  &::placeholder {
    font-size: 14px;
    line-height: 18px;
    color: #C4C4C4;
  }
`;

export default HeaderSearch;