import React from "react";
import Routes from "./Routes";
import ReactDOM from "react-dom";
import "./index.css";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <section className="AppBody">
      <Routes />
      <GlobalStyle />
    </section>
  </ThemeProvider>,
  document.getElementById("root")
);
