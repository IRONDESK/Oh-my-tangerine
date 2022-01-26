import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <MainWrap>
      <LogoImg src="./image/symbol-logo-W.png" alt="감귤마켓 로고"/>
      <LoginBox>
        
          <ButtonSns
            type="button"
            snsValue = "kakao">
            <SnsImage
              src="./image/message-circle.png"
              alt="카카오톡 계정으로 로그인"/>
            카카오톡 계정으로 로그인
          </ButtonSns>
  
          <ButtonSns
            type="button"
            snsValue = "google">
            <SnsImage
              src="./image/google.png"
              alt="구글 계정으로 로그인"/>
              구글 계정으로 로그인
          </ButtonSns>

          <ButtonSns
            type="button"
            snsValue = "facebook">
            <SnsImage
              src="./image/facebook.png"
              alt="페이스북 계정으로 로그인"/>
              페이스북 계정으로 로그인
          </ButtonSns>

          
        <OptionWrap>
          <StyledLink to="/login/email">
            이메일로 로그인
          </StyledLink>
          <StyledLink to="/login/membership">
            회원가입
          </StyledLink>
        </OptionWrap>
      </LoginBox>
      </MainWrap>
  );
};

const MainWrap = styled.main`
  ${(props) => props.theme.setFlex("center", "center", "column")};
  height: 100%;
  background-color: ${(props) => props.theme.mainColor};
`;
const LogoImg = styled.img`
  transform: translateY(-50%);
`;
const LoginBox = styled.section`
  ${(props) => props.theme.setFlex("flex-start", "center", "column")};
  position: absolute;
  gap: 10px;
  height: 320px;
  bottom: 0;
  padding: 50px 34px 0 34px;
  border-radius: 20px 20px 0px 0px;
  background: #fff;
`;

const ButtonSns = styled.button`
  position: relative; 
  border: ${(props) =>
    ( props.snsValue == "kakao" ?
      "1px solid #F2C94C" :
      (props.snsValue == "facebook" ? 
      "1px solid #2D9CDB" :
      "1px solid #767676")
    )};
  padding: 13px 0;
  line-height: 18px;
  width: 322px;
  height: 44px;
  border-radius: 44px;
  font-family: 'Pretendard';
  color: #5a5a5a;
  font-size: 14px 400;
`;
const StyledLink = styled(Link)`
  &:last-child::before {
    content: '|';
    padding: 0 7px;
  };
`;
const OptionWrap = styled.section`
  margin: 8px 0;
  font-size: 13px;
  color: #767676;
`;
const SnsImage = styled.img`
  position: absolute;
  left: 13px;
  top: 25%;
`;

export default Login;