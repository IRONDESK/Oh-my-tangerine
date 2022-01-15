import React, { useState } from "react";
import styles from "./SettingProfileEdit.module.css";



const Profile = () => {

  return(
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
  );
};

export default Profile;
