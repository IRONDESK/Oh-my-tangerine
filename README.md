<div align="center">
  <h1>🍊 oh-my-tangerine</h1>
  <p>멋쟁이사자처럼 프론트엔드 스쿨 SNS 웹 어플리케이션 팀 프로젝트</p>
</div>

> 감귤마켓 서비스는 자신의 스토어에서 판매하고 있는 상품(감귤)을 등록하여 홍보할 수 있는 SNS 입니다. <br> 상품을 등록하지 않아도, 글과 사진과 함께 게시물을 작성하여 자신의 일상을 공유할 수 있습니다. <br> 다른 사용자를 팔로우하면 유저가 올린 게시물을 홈 피드에서 소식을 확인할 수 있습니다. <br> 피드에서 마음에 드는 게시물을 발견했다면 좋아요를 누를 수 있고 댓글을 남길 수도 있습니다.
 
## Deploy

### Client
- 배포 예정 입니다.
### BackEnd
- 제주코딩베이스캠프에서 제공하는 API를 사용했습니다. 


## 👩‍💻 Developers
|이름|담당|
|:---:|:---:|
|김진권|FrontEnd|
|손수철|FrontEnd|
|양서윤|FrontEnd|

## 💻 Skills
 * HTML/CSS(Styled Component)
 * React

## Collaboration Tool 
- github 이용하여 현재 상황 점검 및 소통, 코드 리뷰
- 디스코드 미팅

## Features
- 로그인 및 회원가입
- 유저 포스트 확인 
- 포스트 작성 및 댓글 작성
- 상품 업로드 
- 프로필 설정 및 수정
- 채팅

## Roles

### 김진권
- Mark-up 작업
- API 연결

### 손수철
- Mark-up 작업
- API 연결

### 양서윤
- Mark-up 작업

## 💼 How we worked
### 기획 및 디자인
- 기획과 디자인은 제주코딩베이스캠프에서 제공해주셨습니다.
- 디자인은 피그마로 전달되어 Mark-up 작업했습니다.

### 프로젝트 작업 과정
- Mark-up 할 영역을 3명이 분담하였습니다. React 프레임워크로 작업했습니다.
- API 연결은 2명(김진권, 손수철)이 분담하였습니다. Node.js 모듈인 Axios를 활용했습니다.
- 

## 🌳 Tree
```js
📦Oh-my-tangerine
 ┣ 📂public
 ┃ ┣ 📂image
 ┃ ┃ ┣ 📂icon
 ┃ ┃ ┣ 📂product
 ┃ ┣ 📜.DS_Store
 ┃ ┣ 📜favicon.ico
 ┃ ┗ 📜index.html
 ┣ 📂src
 ┃ ┣ 📂Components
 ┃ ┃ ┣ 📂Chat
 ┃ ┃ ┃ ┣ 📜ChatMsgMe.jsx
 ┃ ┃ ┃ ┗ 📜ChatMsgOther.jsx
 ┃ ┃ ┣ 📂Header
 ┃ ┃ ┃ ┣ 📜HeaderFollowers.jsx
 ┃ ┃ ┃ ┣ 📜HeaderWithClickBtn.jsx
 ┃ ┃ ┃ ┣ 📜HeaderWithMoreBtn.jsx
 ┃ ┃ ┃ ┗ 📜HeaderWithSearch.jsx
 ┃ ┃ ┣ 📂Home
 ┃ ┃ ┃ ┗ 📜HeaderHome.jsx
 ┃ ┃ ┣ 📂Post
 ┃ ┃ ┃ ┣ 📜Comment.jsx
 ┃ ┃ ┃ ┗ 📜InputComment.jsx
 ┃ ┃ ┣ 📂Profile
 ┃ ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┃ ┣ 📜HeadRightButton.jsx
 ┃ ┃ ┃ ┣ 📜NowSales.jsx
 ┃ ┃ ┃ ┣ 📜ProfileInfo.jsx
 ┃ ┃ ┃ ┣ 📜SalesProductInfo.jsx
 ┃ ┃ ┃ ┣ 📜UserBtnCircle.jsx
 ┃ ┃ ┃ ┗ 📜UserButton.jsx
 ┃ ┃ ┣ 📂Search
 ┃ ┃ ┃ ┗ 📜SearchUserInfo.jsx
 ┃ ┃ ┣ 📂Upload
 ┃ ┃ ┃ ┣ 📜UploadContent.jsx
 ┃ ┃ ┃ ┗ 📜UploadContentRework.jsx
 ┃ ┃ ┣ 📜.DS_Store
 ┃ ┃ ┣ 📜Feed.jsx
 ┃ ┃ ┣ 📜Follower.jsx
 ┃ ┃ ┣ 📜ModalOption.jsx
 ┃ ┃ ┣ 📜NavBottom.jsx
 ┃ ┃ ┗ 📜UserInfo.jsx
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂Chat
 ┃ ┃ ┃ ┣ 📜Chat.jsx
 ┃ ┃ ┃ ┣ 📜ChatMsg.jsx
 ┃ ┃ ┃ ┣ 📜ChatRoom.jsx
 ┃ ┃ ┃ ┗ 📜ChatTemplate.jsx
 ┃ ┃ ┣ 📂Follow
 ┃ ┃ ┃ ┣ 📜Followers.jsx
 ┃ ┃ ┃ ┗ 📜Followings.jsx
 ┃ ┃ ┣ 📂Home
 ┃ ┃ ┃ ┗ 📜Home.jsx
 ┃ ┃ ┣ 📂Login
 ┃ ┃ ┃ ┣ 📜Login.jsx
 ┃ ┃ ┃ ┣ 📜LoginEmail.jsx
 ┃ ┃ ┃ ┣ 📜LoginMembership.jsx
 ┃ ┃ ┃ ┣ 📜LoginProfile.jsx
 ┃ ┃ ┃ ┗ 📜Splash.jsx
 ┃ ┃ ┣ 📂Modification
 ┃ ┃ ┃ ┣ 📜Modification.jsx
 ┃ ┃ ┃ ┗ 📜ProductContent.jsx
 ┃ ┃ ┣ 📂Post
 ┃ ┃ ┃ ┗ 📜Post.jsx
 ┃ ┃ ┣ 📂Profile
 ┃ ┃ ┃ ┣ 📜Profile.jsx
 ┃ ┃ ┃ ┣ 📜Setting.jsx
 ┃ ┃ ┃ ┗ 📜SettingProfileEdit.jsx
 ┃ ┃ ┣ 📂Registration
 ┃ ┃ ┃ ┗ 📜Registration.jsx
 ┃ ┃ ┣ 📂Search
 ┃ ┃ ┃ ┗ 📜Search.jsx
 ┃ ┃ ┣ 📂Upload
 ┃ ┃ ┃ ┣ 📜Upload.jsx
 ┃ ┃ ┃ ┗ 📜UploadRework.jsx
 ┃ ┃ ┗ 📜.DS_Store
 ┃ ┣ 📂styles
 ┃ ┃ ┣ 📜GlobalStyle.js
 ┃ ┃ ┗ 📜theme.js
 ┃ ┣ 📜.DS_Store
 ┃ ┣ 📜App.css
 ┃ ┣ 📜App.js
 ┃ ┣ 📜index.css
 ┃ ┣ 📜index.js
 ┃ ┣ 📜Routes.js
 ┃ ┗ 📜Store.js
 ┣ 📜.DS_Store
 ┣ 📜.gitattributes
 ┣ 📜.gitignore
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┗ 📜yarn.lock
```

## 💥 Challenges

### 👨🏻‍💻 김진권
-  #### 어려웠던거 주제
- 블라블라 

### 👨🏻‍💻 손수철
-  #### 어려웠던거 주제
- 블라블라 

### 👩‍💻 양서윤
-  #### 어려웠던거 주제
- 블라블라 

## ✍️ Improvements
블라블라 내용
- 개선해야할 점

