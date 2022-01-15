import { css } from "styled-components";

const theme = {
  cardBackground: "#F4F4F4",
  fontColor: "#1D1D1D",
  subFontColor: "#CBCBCB",
  mainColor: "#EA7F42",
  borderColor: "#DBDBDB",
  subFontColor2: "#767676",

  setFlex: (
    justifyContent = "center",
    alignItem = "center",
    direction = "row"
  ) => css`
    display: flex;
    justify-content: ${justifyContent};
    align-items: ${alignItem};
    flex-direction: ${direction};
  `,
};

export default theme;
