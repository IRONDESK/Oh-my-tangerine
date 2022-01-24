import React, { useState } from "react";
import styled from "styled-components";

const ProductContent = ({ hasData }) => {
  const [imgSrc, setImgSrc] = useState([]);
  const [previewImg, setPreviewImg] = useState([]);

  if (previewImg.length == 0) {
    setPreviewImg(['']);
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
      hasData(true);
    };
  };

  function onChangeValue(e) {
    if (e.target.value !== 0) {
      hasData(true);
    }
  }


  return(
    <EditContainer>
      <Form action="">
          <label htmlFor="ProductImgUpload">이미지 등록</label>
          <input
            id="ProductImgUpload"
            type="file"
            accept='img/*'
            onChange={onLoadImage}
            style={{ display:"none" }}
          />
          <ImgButton htmlFor="ProductImgUpload">
            <ImgPreview
              src={previewImg[0]}
              alt="상품 이미지"
            />
          </ImgButton>
          <br />
          <label htmlFor="ProductName">상품명</label>
          <input
            type="text"
            id="ProductName"
            placeholder="2~15자 이내여야 합니다."
            onChange={onChangeValue}
          />
          <label htmlFor="ProductPrice">가격</label>
          <input
            type="number"
            id="ProductPrice"
            placeholder="숫자만 입력 가능합니다."
            onChange={onChangeValue}
          />
          <label htmlFor="ProductLink">판매 링크</label>
          <input
            type="text"
            id="ProductLink"
            placeholder="URL을 입력해 주세요."
            onChange={onChangeValue}
          />
        </Form>
    </EditContainer>
  );
};

const EditContainer = styled.section`
    margin: 30px 35px;
`;
const Form = styled.form`
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

const ImgPreview = styled.img`
  width: 320px;
  height: 200px;
  object-fit: cover;
`;
const ImgButton = styled.label`
    cursor: pointer;
    display: block;
    position: relative;
    width: 320px;
    height: 200px;
    border-radius: 10px;
    background-color: #F2F2F2;
    border: 1px solid #BDBDBD;
    overflow: hidden;

    &:after {
    position: absolute;
    display: block;
    content: '';
    bottom: 15px;
    right: 15px;
    width: 36px;
    height: 36px;
    background-image: url('/image/icon/icon-upload.svg');
    background-repeat: no-repeat;
    background-position: center center;
    background-color: #C4C4C4;
    border-radius: 100%;
    }
`;


export default ProductContent;
