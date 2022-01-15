import React, { useState, useRef } from 'react';
import styled from "styled-components";

const UploadContent = ({ hasData }) => {
  const [imgSrc, setImgSrc] = useState([]);
  const [previewImg, setPreviewImg] = useState([]);
  const textareaRef = useRef(null);
  const deleteButtonRef = useRef(null);
  const imgAreaRef = useRef(null);

  const onInputTextarea = () => {
    const textarea = textareaRef.current;
    textarea.style.height = '1px';
    textarea.style.height = textarea.scrollHeight + 'px';

    if (textareaRef.current.value || imgSrc.length) hasData(true);
    else hasData(false);
  };

  const onLoadImage = (e)=> {
    const fileReader = new FileReader();
    const imgTarget = e.target.files[0];

    if (imgTarget) {
      fileReader.readAsDataURL(imgTarget);
      setImgSrc([...imgSrc, imgTarget]);
    }

    fileReader.onloadend = () => {
      const previewImgUrl = fileReader.result;
      if (previewImgUrl) {
        setPreviewImg([...previewImg, previewImgUrl]);
      }
    };
  };

  const deleteImg = (i) => {
    const imgArr = imgSrc.filter((v, idx) => idx !== i);
    const imgNameArr = previewImg.filter((v, idx) => idx !== i);

    setImgSrc([...imgArr]);
    setPreviewImg([...imgNameArr]);

    onImgNumberChange(imgSrc);
    console.log(textareaRef.current.value);
    console.log(imgSrc.length);
    if (textareaRef.current.value || imgSrc.length - 1) hasData(true);
    else hasData(false);
  }

  const preview = () => {
    if (imgSrc === null || imgSrc.length === 0) return null;
    else {
      onImgNumberChange(imgSrc);
      if (textareaRef.current.value || imgSrc.length) hasData(true);
      else hasData(false);

      return imgSrc.map((v, i) => {
        return (
          <div className='img-box' key={i}>
            <img className='img' alt="" src={previewImg[i]} />
            <button
              ref={deleteButtonRef}
              type='button'
              className='delete-button'
              onClick={() => deleteImg(i)}
            >
              <img src="./image/icon/icon-delete.png" alt="" />
            </button>
          </div>
        );
      });
    }
  };

  const onImgNumberChange = (imgSrc) => {
    console.log(imgAreaRef.current.classList);
    if (imgSrc.length >= 2) imgAreaRef.current.classList.add('multi');
    else imgAreaRef.current.classList.remove('multi');
  };

  return (
    <UploadContentContainer>
      <Avatar src="./image/basic-profile-img.png"></Avatar>
      <Content>
        <label htmlFor="텍스트 입력"></label>
        <textarea
          className='텍스트 입력'
          ref={textareaRef}
          onInput={onInputTextarea}
          name="textarea"
          placeholder='게시글 입력하기...'
        >
        </textarea>
        <div ref={imgAreaRef} className='img-area'>
          { preview() }
        </div>
        <label htmlFor="이미지 삽입" className='input-image-button'></label>
        <input
          id='이미지 삽입'
          type="file"
          accept='img/*'
          style={{ display:"none" }}
          onChange={onLoadImage}
        />
      </Content>
    </UploadContentContainer>
  )
}

const UploadContentContainer = styled.section`
  display: flex;
  padding: 0 16px;
  padding-top: 68px;
`;

const Avatar = styled.img`
  width: 42px;
  height: 42px;
  margin-right: 13px;
`;

const Content = styled.div`
  width: 303px;
  margin-top: 12px;
  textarea {
    width: 100%;
    max-height: 450px;
    outline: none;
    border: none;
    overflow: visible;
    resize: none;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 10px;
    &::placeholder {
      color: #C4C4C4;
    }
  }
  .input-image-button {
    position: fixed;
    z-index: 20;
    right: 16px;
    bottom: 16px;
    display: inline-block;
    background: url('./image/upload-file.png');
    background-size: contain;
    background-repeat: no-repeat;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
  .img-area {
    .img-box {
      position: relative;
      width: 304px;
      height: 228px;
      .img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        bacground-size: contain;
        background-repeat: no-repeat;
      }
      .delete-button {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 20px;
        height: 20px;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    &.multi {
      position: relative;
      z-index: 10;
      width: 1000px;
      .img-box {
        display: inline-block;
        width: 168px;
        height: 126px;
        margin-right: 8px;
      }
    }
  }
`;

export default UploadContent;
