import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	text-decoration: none;
	color: inherit;
	vertical-align: baseline;
	font-family: 'Pretendard';
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}

* {
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
}

body {
	background: #888;
}

.AppBody {
  position: absolute;
  background: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 390px;
  height: 844px;
  border-radius: 10px;
  box-shadow: 0 0 14px #555;
  line-height: 1;
  overflow: hidden;
}

ol, ul, li {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
button {
  outline: none;
  background: inherit;
  border: none;
  cursor: pointer;
  padding: 0;
}
a {
  cursor: pointer;
}
input {
  outline: none;
  border: none;
}

`;

export default GlobalStyle;
