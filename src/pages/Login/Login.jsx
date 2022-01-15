import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <MainWrap>
      <img src="./image/full-logo.png" alt="" />
      <button>카카오</button>
      <button>구글</button>
      <button>페이스북</button>
      <a href="">이메일로 로그인</a>
      <a href="">회원가입</a>
    </MainWrap>
  );
};

const MainWrap = styled.main`
  ${(props) => props.theme.setFlex("center", "center", "column")};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.mainColor};
`;

export default Login;
