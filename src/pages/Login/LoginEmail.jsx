import React from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";

import axios from "axios";
import store from "../../Store";
import styles from "./LoginEmail.module.css";

const LoginEmail = () => {
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
        };
      })
      .catch(err => {
        console.log('에러', err);
      })
  };

  return (
    <div>
      <h2 className={styles.title}>로그인</h2>
      <div className={styles.join}>
        <form action="" className={styles.joinForm} onSubmit={getLogin}>
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
          <button type="submit" className={styles.btn}>
            로그인
          </button>
        </form>
        <Link className={styles.eJoin} to="/login/membership">
          이메일로 회원가입
        </Link>
      </div>
    </div>
  );
};
export default LoginEmail;
