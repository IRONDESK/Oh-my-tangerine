import React from 'react';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';

const Header = ({ role, hasData }) => {
  let history = useHistory();
  const onClickButton = (e) => {
    if (hasData) return;
    else {
      e.preventDefault();
      alert('내용이 없습니다!');
      return;
    }
  };

  return (
    <HeaderWrap>
      <PrevButton type="button" onClick={ () => {history.goBack()} }>
        <Img src="./image/icon/icon-arrow-left.png" alt="" />
      </PrevButton>
      {
      hasData ?
      <ClickButton type="submit" style={{ backgroundColor: '#F26E22' }}>{role}</ClickButton> :
      <ClickButton type="submit" onClick={onClickButton}>{role}</ClickButton>
      }
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

const PrevButton = styled.button`
  width: 22px;
  height: 22px;
`;

const ClickButton = styled.button`
  padding: 7px 25px;
  background-color: #FFC7A7;
  border-radius: 32px;
  font-weight: 700;
  color: #FFFFFF;
  font-size: 14px;
  line-height: 18px;
  &:active {
    opacity: 50%;
  }
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

export default Header;