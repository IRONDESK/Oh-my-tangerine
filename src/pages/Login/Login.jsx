import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import styles from "./Login.module.css";
// import { LoginButton } from "./LoginButton";

const Login = () => {

  return (

    <MainWrap>
      <img className={styles.logo} src="./image/symbol-logo-W.png" alt=""/>
      <div className={styles.loginbox}>
        
          <button type="button" className={styles.btnKa}>
            <img src="./image/message-circle.png" alt=""/>
            카카오톡 계정으로 로그인
          </button>
          
          <button type="button" className={styles.btnGo}><img src="./image/google.png" alt=""/>구글 계정으로 로그인</button>
          <button type="button" className={styles.btnFa}><img src="./image/facebook.png" alt=""/>페이스북 계정으로 로그인</button>
          {/* <button onClick={sayFacebook} name="나는 페이스북 버튼" id="나는 페이스북 아이디">페이스북</button> */}
          
        <div className={styles.link}>
          <Link className={styles.eLogin} to="/login/email">이메일로 로그인</Link>
          <Link className={styles.eJoin}to="/login/membership">회원가입</Link>
        </div>
      </div>
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