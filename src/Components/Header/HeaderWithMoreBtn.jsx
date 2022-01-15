import React from 'react';
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrap>
      <PrevButton>
        <Img src="./image/icon/icon-arrow-left.png" alt="" />
      </PrevButton>
      <MoreButton type="button">
        <Img src="./image/icon/icon-more-vertical.png" alt="" />
      </MoreButton>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  position: fixed;
  top:0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  padding: 12px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
`;

const PrevButton = styled.button`
  width: 22px;
  height: 22px;
`;

const MoreButton = styled.button`
  width: 24px;
  height: 24px;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

export default Header;