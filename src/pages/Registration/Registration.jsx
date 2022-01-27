import React, { useState, useRef } from 'react'
import styled from "styled-components";
import Header from '../../Components/Header/HeaderWithClickBtn';
import store from "../../Store";
import axios from 'axios';
import { useHistory } from "react-router-dom";

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

const Registration = () => {
  const history = useHistory();
  const [hasData, setHasData] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);
  const [title, setTitle] = useState(null);
  const [price, setPrice] = useState(null);
  const [link, setLink] = useState(null);
  const nameRef = useRef(null);
  const priceRef = useRef(null);
  const linkRef = useRef(null);

  async function imageUpload(file) {
    const url = 'http://146.56.183.55:5050';
    const formData = new FormData();
    formData.append('image', file);
    const response = await axios.post(`${url}/image/uploadfile`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const productImgName = response.data.filename;
    setImgSrc(productImgName);
  }

  async function registProduct(e) {
    e.preventDefault();
    const url = 'http://146.56.183.55:5050';
    const token = store.getLocalStorage().token;
    const dataProduct = {
      product: {
        "itemName": title,
        "price": price,
        "link": link,
        "itemImage": `${url}/${imgSrc}`,
      }
    }
    const response = await axios.post(`${url}/product`, dataProduct, {
      // method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      // data: {
      //   "product": {
      //     "itemName": title,
      //     "price": price,
      //     "link": link,
      //     "itemImage": `${url}/${imgSrc}`,
      //   }
      // },
    });
    history.push("/profile");
  }

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
    imageUpload(imgTarget);
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

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  }

  const onChangePrice = (e) => {
    setPrice(e.target.value);
  }

  const onChangeLink = (e) => {
    setLink(e.target.value);
  }

  return (
    <ResistrationContainer onSubmit={registProduct}>
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
            onChange={onChangeTitle}
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
            onChange={onChangePrice}
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
            onChange={onChangeLink}
          />
        </div>
      </fieldset>
    </ResistrationContainer>
  );
};

const ResistrationContainer = styled.form`
  fieldset {
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

export default Registration;
