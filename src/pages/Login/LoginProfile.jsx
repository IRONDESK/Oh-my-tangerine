import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

function LoginProfile({hasData})  {
  const [imgSrc, setImgSrc] = useState([]);
  const [previewImg, setPreviewImg] = useState([]);

  const [nameValue, setNameValue] = useState("");
  const [accountIdValue, setAccountIdValue] = useState("");
  const [introValue, setIntroValue] = useState("");
  const [accountIdValidReq, setAccountIdValidReq] = useState(false);

  function hasDataCheck() {
    if ( nameValue !== "" ||
    accountIdValue !== "" ||
    introValue !== "") {
      hasData(true);
    } else {
      hasData(false);
    }
  }
  hasDataCheck();

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

  function nameOnChange(e) {
    setNameValue((e.target.value).slice(0,10));
  }
  function introOnChange(e) {
    setIntroValue(e.target.value);
  }

  function accountIdOnChange(e) {
    setAccountIdValue((e.target.value).replace(/[^a-zA-Z0-9_.]*$/, ""));
    const idCheckData = {
      "user" : {
      "accountname" : (e.target.value).replace(/[^a-zA-Z0-9_.]*$/, ""),
      }
    };
  
    // 아이디 검증 
    const url = "http://146.56.183.55:5050";
    axios.post(url + '/user/accountnamevalid', idCheckData)
    .then(res => {
      if (res.data.message == "이미 가입된 계정ID 입니다."){
        setAccountIdValidReq(true);
      } else {
        setAccountIdValidReq(false);
      }
      
    })
    .catch(err => {
      console.log('에러', err);
    });
  }


  return (
    <>
      <UserImgCont>
        <input 
          id="setProfileImg"
          type="file"
          onChange={uploadImage}
          style={{ display:"none" }}
        />
        <UserImgInputBtn htmlFor="setProfileImg">
          <UserImg
            src={previewImg[0]}
            alt="프로필 이미지"
          />
        </UserImgInputBtn>
      </UserImgCont>   

        <label htmlFor="setName">사용자 이름</label>
        <input
          type="text"
          id="setName"
          placeholder="2~10자 이내여야 합니다."
          onChange = {nameOnChange}
          value = {nameValue}
        />
        <label htmlFor="setAccountId">계정 ID</label>
        <input
          type="text"
          id="setAccountId"
          placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
          onChange = {accountIdOnChange}
          value = {accountIdValue}
          style = {
            accountIdValidReq ?
            { borderBottom: "1px solid #EB5757" } :
            { }
          }
        />
        <WarningMsg>{
        accountIdValidReq ? "이미 가입된 계정ID 입니다." :
        null
                    }
        </WarningMsg>
        <label htmlFor="setIntroMsg">소개</label>
        <input
          type="text"
          id="setIntroMsg"
          placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
          onChange = {introOnChange}
          value = {introValue}
        />
    </>
  );
};

const UserImgCont = styled.article`
  position: relative;
  margin-bottom: 20px;
  text-align: center;
  cursor: pointer;
`;

const UserImg = styled.img`
  width: 110px;
  height: 110px;
  object-fit: cover;
  border-radius: 100%;
`;
const UserImgInputBtn = styled.label`
  position: relative;
  cursor: pointer;
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
const WarningMsg = styled.span`
  font-size: 12px;
  color: #EB5757;
`;
export default LoginProfile;