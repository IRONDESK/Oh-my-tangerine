import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import styles from "./LoginEmail.module.css";


const LoginEmail = () => {

  return (
    <div>
      <h2 className={styles.title}>로그인</h2>
        <div className={styles.join}>
          <form className={styles.joinForm}>
              <label htmlFor="umail">이메일</label>
              <input
                name="userId"
                type="text"
                id="umail"
                placeholder="이메일 주소를 입력해 주세요."
              />
              <label htmlFor="pwd">비밀번호</label>
              <input
                name="userPassword"
                type="text"
                id="pwd"
                placeholder="비밀번호를 설정해 주세요."
              />
          </form>
          <button type="button" className={styles.btn}>
            다음
            </button>
            <Link className={styles.joinLink}to="/login/membership">이메일로 회원가입
            </Link>
        </div>
    </div>
  ); 
}
export default LoginEmail;