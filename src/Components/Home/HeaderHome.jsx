import React from 'react';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';

const Header = ({title = null}) => {
  let history = useHistory();
  return (
    <HeaderWrap>
      <LeftContainer>
        <PageTitle>
          { title ? title : !title }
        </PageTitle>
      </LeftContainer>
      <SearchButton type="button">
        <Img src="./image/icon/icon-search.png" alt="검색아이콘" />
      </SearchButton>
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
const PageTitle = styled.p`
  height: 22px;
  font-weight: 700;
  line-height: 22px;
`;

const SearchButton = styled.button`
  width: 24px;
  height: 24px;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

export default Header;
