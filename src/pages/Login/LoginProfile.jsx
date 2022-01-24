import React from "react";
import styled from "styled-components";
import styles from "./LoginProfile.module.css";


const LoginProfile = () => {
  return (
    <div>
      <h2 className={styles.title}>프로필 설정</h2>
      <section className={styles.EditContainer}>
        <form action="" className={styles.ProfileForm}>
            <div className={styles.UserImgCont}>
                <input
                  id="UserImgInput"
                  type="file"
                  className={styles.UserImgInput}
                />
                <label htmlFor="UserImgInput" className={styles.UserImgInputBtn}>
                  <img src="/image/basic-profile-img.png" alt="프로필 이미지" />
                </label>
            </div>
            <label htmlFor="UserNameInput">사용자 이름</label>
            <input
              type="text"
              id="UserNameInput"
              placeholder="2~10자 이내여야 합니다."
            />
            <label htmlFor="UserIdInput">계정 ID</label>
            <input
              type="text"
              id="UserIdInput"
              placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
            />
            <label htmlFor="UserIntroInput">소개</label>
            <input
              type="text"
              id="UserIntroInput"
              placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
            />
          </form>
      </section>

        <button type="button" className={styles.btn}>
          로그인
        </button>
    </div>
  );
};

export default LoginProfile;