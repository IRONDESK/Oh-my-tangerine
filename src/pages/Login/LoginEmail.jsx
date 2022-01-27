import React, {useState} from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

import axios from "axios";
import store from "../../Store";

const LoginEmail = () => {
  const history = useHistory();
  const [hasData, setHasData] = useState(false);

  function getLogin(e) {
    e.preventDefault();
    const data = {
      "user" : {
      "email" : e.target.email.value,
      "password" : e.target.pwd.value
      }
    };
    
    axios.post('http://146.56.183.55:5050/user/login', data)
      .then(res => {
        console.log('결과', res);
        
        if (res.data.user == undefined) {
          alert(res.data.message);
        } else {
          store.setLocalStorage(res.data.user);
          store.setAccount(res.data.user.accountname);
          store.setUserName(res.data.user.username);
          store.setImage(res.data.user.image);
          store.setIntro(res.data.user.intro);
          history.push("/home");
        };
      })
      .catch(err => {
        console.log('에러', err);
      })
  };

  function ValueChange(e) {
    if ((e.target.value).length > 1) {
      setHasData(true);
      console.log(hasData);
    } else {
      setHasData(false);
    };
  };

  return (
    <>
      <Title>로그인</Title>
      <FormContainer>
        <FormLogin action="" onChange={ValueChange} onSubmit={getLogin}>
          <label htmlFor="email">이메일</label>
          <input
            type="text"
            id="email"
            placeholder="이메일 주소를 입력해 주세요."
          />
          <label htmlFor="pwd">비밀번호</label>
          <input
            type="password"
            id="pwd"
            placeholder="비밀번호를 설정해 주세요."
          />
          { hasData ?
          <ButtonSubmit
            type="submit"
            style={{ backgroundColor: '#F26E22' }}>
            로그인
          </ButtonSubmit>
          :
          <ButtonSubmit
          type="submit"
          style={{ backgroundColor: '#FFC7A7' }}>
          로그인
          </ButtonSubmit>
          }
        </FormLogin>
        <Link to="/login/membership">
          <JoinLink>이메일로 회원가입</JoinLink>
        </Link>
      </FormContainer>
    </>
  );
};

const Title = styled.h2`
  text-align: center;
  margin: 54px;
  font-size: 24px;
  font-weight: 700;
`;

const FormContainer = styled.section`
  margin: 30px 35px;
`;
const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  & label {
    margin-top: 1px;
    font-size: 13px;
    font-weight: 500;
    line-height: 12px;
    color: #767676;
  }
  & input {
    margin-bottom: 23px;
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
const ButtonSubmit = styled.button`
    height: 43px;
    border-radius: 40px;
    font-size: 15px;
    font-weight: 500;
    font-family: 'Pretendard';
    color: #fff;
`;
const JoinLink = styled.span`
    display: block;
    margin: 20px 0;
    font-size: 13px;
    color: #767676;
    text-align: center;
`;

export default LoginEmail;
