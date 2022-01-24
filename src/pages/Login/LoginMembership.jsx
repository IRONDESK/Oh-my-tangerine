import React from "react";
import styled from "styled-components";
import styles from "./LoginMembership.module.css";



const LoginMembership = () => {
  return (
    <div>
      <h2 className={styles.title}> 이메일로 회원가입</h2>
        <div className={styles.join}>
          <form action="" className={styles.joinForm}>
              <label htmlFor="umail">이메일</label>
              <input
                type="text"
                id="umail"
                placeholder="이메일 주소를 입력해 주세요."
              />
              <label htmlFor="pwd">비밀번호</label>
              <input
                type="text"
                id="pwd"
                placeholder="비밀번호를 설정해 주세요."
              />
          </form>
          <button type="button" className={styles.btn}>
            다음
            </button>
        </div>
    </div>
  ); 
};


export default LoginMembership;