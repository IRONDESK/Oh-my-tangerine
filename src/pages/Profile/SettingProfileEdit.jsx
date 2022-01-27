import React, { useState } from "react";
import styled from "styled-components";
import store from "../../Store";
import axios from 'axios';

const SettingProfileEdit = ({ previewImg, setImgSrc, setPreviewImg, name, setName, id, setId, intro, setIntro, imageUpload }) => {
  if (previewImg.length == 0) {
    setPreviewImg(['/image/basic-profile-img.png']);
  }
  // 이미지
  const onLoadImage = (e) => {
    const fileReader = new FileReader();
    const imgTarget = e.target.files[0];

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

    imageUpload(imgTarget);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  }
  
  const onChangeId = (e) => {
    setId(e.target.value);
  }
  
  const onChangeIntro = (e) => {
    setIntro(e.target.value);
  }

  return(
    <EditContainer>
      <Profile action="">
          <UserImgCont>
              <input
                id="UserImgInput"
                type="file"
                accept='img/*'
                onChange={onLoadImage}
                style={{ display:"none" }}
              />
              <UserImgInputBtn htmlFor="UserImgInput">
                <UserImgPreview
                  src={previewImg[0]}
                  alt="프로필 이미지"
                />
              </UserImgInputBtn>
          </UserImgCont>
          <label htmlFor="UserNameInput">사용자 이름</label>
          <input
            type="text"
            id="UserNameInput"
            placeholder="2~10자 이내여야 합니다."
            value={name}
            onChange={onChangeName}
          />
          <label htmlFor="UserIdInput">계정 ID</label>
          <input
            type="text"
            id="UserIdInput"
            placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
            value={id}
            onChange={onChangeId}
          />
          <label htmlFor="UserIntroInput">소개</label>
          <input
            type="text"
            id="UserIntroInput"
            placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
            value={intro}
            onChange={onChangeIntro}
          />
        </Profile>
    </EditContainer>
  );
};

const EditContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin: 30px 35px;
`;
const Profile = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    & label {
    font-size: 14px;
    line-height: 15px;
    font-weight: 500;
    color: #767676;
    }
    & input {
    margin-bottom: 18px;
    padding: 8px 1px;
    border: none;
    border-bottom: 1px solid #DBDBDB;
    }
    & input::placeholder {
    color: #DBDBDB;
    }
`;
const UserImgCont = styled.article`
    margin: 6px 0 22px;
    text-align: center;
`;
const UserImgPreview = styled.img`
  width: 110px;
  height: 110px;
  object-fit: cover;
  border-radius: 100%;
`;
const UserImgInputBtn = styled.label`
    cursor: pointer;
    position: relative;
    &:after {
    position: absolute;
    display: block;
    content: '';
    bottom: 0;
    right: 0;
    width: 36px;
    height: 36px;
    background-image: url('/image/icon/icon-upload.svg');
    background-repeat: no-repeat;
    background-position: center center;
    background-color: #F26E22;
    border-radius: 100%;
    }
`;


export default SettingProfileEdit;
