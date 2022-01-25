import React from "react";
import styled from "styled-components";
import styles from "./LoginProfile.module.css";
import {useState} from "react";


const LoginProfile = () => {

  const [imgSrc, setImgSrc] = useState([]);
  const [previewImg, setPreviewImg] = useState([]);

  if (previewImg.length === 0) {
    setPreviewImg(['/image/basic-profile-img.png']);
  }


  const uploadImage = (uploadEvent)=>{
    
    const fileReader = new FileReader();
    const imgTarget = uploadEvent.target.files[0];

    if (imgTarget) {
      fileReader.readAsDataURL(imgTarget);
      setImgSrc([imgTarget]);
    }

    fileReader.onloadend = () => {
      const previewImgUrl = fileReader.result;
      if (previewImgUrl) {
        setPreviewImg([previewImgUrl]);
      }
    };
  }



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
              onChange={uploadImage}
              style={{ display:"none" }}
            />
            <label htmlFor="UserImgInput" className={styles.UserImgInputBtn}>
              <img src={previewImg[0]} style={{width:"110px",height:"110px",objectFit:"cover","borderRadius":"100%"}} alt="프로필 이미지" />
            </label>
            </div>   

            <label htmlFor="UserNameInput">사용자 이름</label>
            <input
              name=""
              type="text"
              id="UserNameInput"
              placeholder="2~10자 이내여야 합니다."
            />

            <label htmlFor="UserIdInput">계정 ID</label>
            <input
              name=""
              type="text"
              id="UserIdInput"
              placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
            />

            <label htmlFor="UserIntroInput">소개</label>
            <input
              name=""
              type="text"
              id="UserIntroInput"
              placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
            />
          </form>
          <button type="button" className={styles.btn}>
            감귤마켓 시작하기
          </button>
          </section>
    </div>
  );
};

export default LoginProfile;