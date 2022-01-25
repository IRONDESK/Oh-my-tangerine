import React from "react";
import styled from "styled-components";
import styles from "./Login/Splash";

const Splash = () => {

  return (

    <SplashWrap>
      <img className={styles.logo} src="./image/symbol-logo-W.png" alt=""/>
    </SplashWrap>
  );
};

const SplashWrap = styled.Splash`
  ${(props) => props.theme.setFlex("center", "center", "column")};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.mainColor};
`;


export default Splash;