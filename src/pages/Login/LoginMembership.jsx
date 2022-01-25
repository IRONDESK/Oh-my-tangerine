import React from "react";
import styled from "styled-components";
import styles from "./LoginMembership.module.css";

import axios from "axios";
import store from "../../Store";

const LoginMembership = () => {
  function getJoin(e) {
    e.preventDefault();
    const data = {
      "user" : {
      "email" : e.target.setEmail.value,
      "password" : e.target.setPwd.value
      }
    };
    const emailValidData = {
      "user" : {
      "email" : e.target.setEmail.value,
      }
    };

    const url = "http://146.56.183.55:5050";
    // 회원가입
    axios.post(url + '/user', data)
      .then(res => {
        console.log('결과', res);
        store.setLocalStorage(res.data.user);
        if (res.data.user == undefined) {
          alert(res.data.message);
        }
      })
      .catch(err => {
        console.log('에러', err);
      })
    
    // 이메일 검증 
    axios.post(url + '/user/emailvalid', emailValidData)
      .then(res => {
        console.log('결과', res);
      })
      .catch(err => {
        console.log('에러', err);
      })
  };

  return (
    <div>
      <h2 className={styles.title}> 이메일로 회원가입</h2>
        <div className={styles.join}>
          <form action="" className={styles.joinForm} onSubmit={getJoin}>
              <label htmlFor="setEmail">이메일</label>
              <input
                type="text"
                id="setEmail"
                placeholder="이메일 주소를 입력해 주세요."
              />
              <label htmlFor="setPwd">비밀번호</label>
              <input
                type="password"
                id="setPwd"
                placeholder="비밀번호를 설정해 주세요."
              />
            <button type="submit" className={styles.btn}>
              다음
            </button>
          </form>
        </div>
    </div>
  ); 
};


export default LoginMembership;