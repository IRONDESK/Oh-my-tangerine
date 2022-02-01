import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import axios from "axios";
import LoginProfile from "./LoginProfile";

const LoginMembership = () => {
  const history = useHistory();
  const [ClickNext, setClickNext] = useState(true);
  const [EmailValidReq, setEmailValidReq] = useState("");
  const [pwdValidReq, setPwdValidReq] = useState(true);

  const [emailValue, setEmailValue] = useState("");
  const [pwdValue, setPwdValue] = useState("");

  const [hasData, setHasData] = useState(false);
  const getHasData = (hasData) => {
    setHasData(hasData);
  }

  const url = "http://146.56.183.55:5050";

  function getJoin(e) {
    e.preventDefault();
    const data = {
      "user" : {
      "username": e.target.setName.value,
      "email" : e.target.setEmail.value,
      "password" : e.target.setPwd.value,
      "accountname": e.target.setAccountId.value,
      "intro": e.target.setIntroMsg.value,
      "image": e.target.setProfileImg.value,
      }
    };

    // 회원가입
    axios.post(url + '/user', data)
      .then(res => {
        console.log('결과', res);
        history.push("/login/email");
      })
      .catch(err => {
        console.log('에러', err);
      })
    
  };

  function NextButtonClick(e) {
    if (
      EmailValidReq.message === "사용 가능한 이메일 입니다." &&
      pwdValidReq
      ) {
      setClickNext(false);
    } else {
      return 
    };
  };

  function checkEmail() {
    const emailValidData = {
      "user" : {
      "email" : emailValue,
      }
    };

    // 이메일 검증 
    axios.post(url + '/user/emailvalid', emailValidData)
    .then(res => {
      setEmailValidReq(res.data);

      if (pwdValue.length > 5) {
        setPwdValidReq(true);
      } else {
        setPwdValidReq(false);
      }
    })
    .catch(err => {
      console.log('에러', err);
    });
  };

  function emailOnChange(e) {
    setEmailValue(e.target.value);
  }
  function pwdOnChange(e) {
    setPwdValue(e.target.value);
  }

  useEffect(() => {
    checkEmail();
  }, [emailValue, pwdValue]);
  

  return (
    <div>
      <Title>{ ClickNext ? "이메일로 회원가입" : "프로필 설정" }</Title>
        <FormContainer>
          <FormJoin action="" onSubmit={getJoin}>
<SectionForm
  style={
    ClickNext ?
    { display: "flex" } :
    { display: "none"}
    }>
                  <label htmlFor="setEmail">이메일</label>
                  <input
                    type="text"
                    id="setEmail"
                    placeholder="이메일 주소를 입력해 주세요."
                    onChange = {emailOnChange}
                    value = {emailValue}
                    style = {
                      EmailValidReq.message == "잘못된 접근입니다." ?
                      {  } :
                      { borderBottom: "1px solid #EB5757" }
                    }
                  />
                  <WarningMsg>{
                    EmailValidReq.message == "잘못된 접근입니다." ?
                    null : 
                    EmailValidReq.message }</WarningMsg>
                  <label htmlFor="setPwd">비밀번호</label>
                  <input
                    type="password"
                    id="setPwd"
                    placeholder="비밀번호를 설정해 주세요."
                    onChange = {pwdOnChange}
                    value = {pwdValue}
                    style = {
                      pwdValidReq ?
                      { } :
                      { borderBottom: "1px solid #EB5757" }
                    }
                  />
                  <WarningMsg>{
                      pwdValidReq ?
                      null  :
                      "비밀번호는 6자 이상이어야 합니다."
                    }</WarningMsg>
                  <ButtonOrange type="button" onClick={NextButtonClick}>
                    다음
                  </ButtonOrange>
</SectionForm>

<SectionForm
  style={
    ClickNext ?
    { display: "none" } :
    { display: "flex" }
    }>
                  <LoginProfile hasData={getHasData}/>
                  {hasData? 
                  <ButtonOrange
                    type="submit"
                    style={{backgroundColor: "#F26E22"}}
                  >
                  감귤마켓 시작하기
                  </ButtonOrange> :
                  <ButtonOrange
                    type="submit"
                    style={{ backgroundColor: "#FFC7A7" }}
                    >
                  감귤마켓 시작하기
                  </ButtonOrange>
                  }
</SectionForm>
          </FormJoin>
        </FormContainer>
    </div>
  ); 
};

const Title = styled.h2`
  text-align: center;
  margin: 45px 0;
  font-size: 24px;
  font-weight: 700;
`;
const FormContainer = styled.section`
  margin: 30px 35px;
`;

const SectionForm = styled.section`
  flex-direction: column;
  gap: 7px;
`;
const FormJoin = styled.form`
  & label:first-child {
    margin-top: 1px;
  }
  & label {
    margin-top: 23px;
    font-size: 13px;
    font-weight: 500;
    line-height: 12px;
    color: #767676;
  }
  & input {
    padding: 8px 1px;
    font-size: 14px;
    font-family: 'Pretendard';
    border: none;
    border-bottom: 1px solid #DBDBDB;
  }
  & input:focus {
    border-bottom: 1px solid #F26E22;
  }
  & input::placeholder {
    color: #DBDBDB;
  }
`;
const WarningMsg = styled.span`
  font-size: 12px;
  color: #EB5757;
`;
const ButtonOrange = styled.button`
  margin-top: 13px;
  height: 43px;
  background-color: #F26E22;
  font-size: 15px;
  font-weight: 500;
  font-family: 'Pretendard';
  color: #fff;
  border-radius: 40px;
`;


export default LoginMembership;