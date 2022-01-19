import React, { useState, useRef } from 'react'
import styled from "styled-components";
import Header from '../../Components/Header/HeaderWithClickBtn';

function inputNumberFormat(obj) {
  obj = comma(uncomma(obj));
  return obj;
}

function comma(str) {
  str = String(str);
  return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

function uncomma(str) {
  str = String(str);
  return str.replace(/[^\d]+/g, '');
}

const Resistration = () => {
  const [hasData, setHasData] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);
  const nameRef = useRef(null);
  const priceRef = useRef(null);
  const linkRef = useRef(null);

  const onLoadImage = (e)=> {
    const fileReader = new FileReader();
    const imgTarget = e.target.files[0];

    if (imgTarget) {
      fileReader.readAsDataURL(imgTarget);
      setImgSrc(imgTarget);
      if (nameRef.current.value && priceRef.current.value && linkRef.current.value && imgTarget) setHasData(true);
      else setHasData(false);
    }

    fileReader.onloadend = () => {
      const previewImgUrl = fileReader.result;
      if (previewImgUrl) setPreviewImg(previewImgUrl);
    };
  };

  const preview = () => {
    if (imgSrc === null) return null;
    else {
      return <img className='img' alt="" src={previewImg} />;
    }
  };

  const checkHasData = () => {
    if (nameRef.current.value && priceRef.current.value && linkRef.current.value && imgSrc) setHasData(true);
    else setHasData(false);
  };

  return (
    <ResistrationContainer>
      <Header role={'저장'} hasData={hasData} />
      <fieldset>
        <legend className='sr-only'>add production</legend>
        <div className='이미지등록 목록'>
          <label>이미지 등록</label>
          <UploadImageContainer>
            <div className='img-preview-container'>
              { preview() }
            </div>
            <div className='img-insert-button'>
              <label htmlFor="이미지삽입" className='input-image-button'></label>
              <input
                id='이미지삽입'
                type="file"
                accept='img/*'
                style={{ display:"none" }}
                onChange={onLoadImage}
              />
            </div>
          </UploadImageContainer>
        </div>
        <div className='상품명 목록'>
          <label htmlFor='product-name'>상품명</label>
          <input
            ref={nameRef}
            id='product-name'
            type="text"
            placeholder='2~15자 이내여야 합니다.'
            minLength={2}
            maxLength={15}
            onInput={checkHasData}
          />
        </div>
        <div className='가격 목록'>
          <label htmlFor='price'>가격</label>
          <input
            ref={priceRef}
            id='price'
            type="text"
            placeholder='숫자만 입력 가능합니다.'
            onInput={checkHasData}
            onKeyUp={ (e) => {
              const num = inputNumberFormat(e.target.value);
              e.target.value = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            }}
          />
        </div>
        <div className='판매링크 목록'>
          <label htmlFor='link'>판매 링크</label>
          <input
            ref={linkRef}
            id='link'
            type="text"
            placeholder='URL을 입력해 주세요.'
            onInput={checkHasData}
          />
        </div>
      </fieldset>
    </ResistrationContainer>
  );
};

const ResistrationContainer = styled.form`
  fieldset {
    margin-top: 48px;
    padding: 30px 34px;
    .목록 {
      > label {
        display: block;
        font-size: 12px;
        line-height: 14px;
        color: #767676;
        margin-bottom: 2px;
      }
      > input {
        width: 100%;
        padding: 8px 0;
        border-bottom: 1px solid #DBDBDB;
        margin-bottom: 16px;
        &::placeholder {
          color: #DBDBDB;
          font-size: 14px;
          line-height: 14px;
        }
      }
      &.이미지등록 {
        margin-bottom: 30px;
        > label {
          margin-bottom: 18px;
        }
      }
    }
  }
`;

const UploadImageContainer = styled.div`
  position: relative;
  .img-preview-container {
    width: 322px;
    height: 202px;
    background: #F2F2F2;
    border: 0.5px solid #DBDBDB;
    border-radius: 10px;
    .img {
      width: 100%;
      height: 100%;
    }
    overflow: hidden;
  }
  .img-insert-button {
    .input-image-button {
      position: absolute;
      z-index: 20;
      right: 12px;
      bottom: 12px;
      display: inline-block;
      background: url('./image/img-button.png');
      background-size: contain;
      background-repeat: no-repeat;
      width: 50px;
      height: 50px;
      cursor: pointer;
    }
  }
`;

export default Resistration;
