import React, { useState, useEffect } from "react";
import styled, { keyframes }  from "styled-components";
import { useHistory } from 'react-router-dom';

import store from "../../Store";

function Splash () {
  const history = useHistory();
  store.setLocalStorage({"token": undefined});

  function getTimeOver() {
    setTimeout(() => {
      RedirectPage();
    }, 2400);
  }
  
  function RedirectPage() {
    const token = store.getLocalStorage().token;
    if (token) {
      history.push('/home');
    } else {
      history.push('/login');
    }
  }

  useEffect(() => {
    getTimeOver()
  }, []);
  

  return (
    <SplashWrap>
      <img src="/image/full-logo.png" alt="감귤마켓 로고"/>
    </SplashWrap>
    
  );
};

const FadeStyle = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`

const SplashWrap = styled.article`
  ${(props) => props.theme.setFlex("center", "center", "column")};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  & img {
    animation: ${FadeStyle} 2.5s linear infinite;
  };
`;

export default Splash;