import React, { useState, useRef } from 'react'
import styled from 'styled-components';

const InputChat = () => {
  const InputRef = useRef(null);
  const ButtonRef = useRef(null);
  const formRef = useRef(null);

  const onChangeInput = (e) => {
    const input = InputRef.current;
    const button = ButtonRef.current;
    if (input.value) button.classList.add('on');
    else button.classList.remove('on')
  };

  const onSubmitChat = (e) => {
    const input = InputRef.current;
    console.log(input.value);
    if (!input.value) {
      e.preventDefault();
      alert('내용이 없습니다!');
      return;
    } else return;
  };

  return (
    <InputChatWrap ref={formRef} onSubmit={onSubmitChat}>
      <Avatar src='./image/basic-profile-img.png' />
      <input
        ref={InputRef}
        type="text"
        placeholder='댓글 입력하기...'
        onChange={onChangeInput}
      />
      <SubmitButton
        ref={ButtonRef}
        type="submit"
        onSubmit={onSubmitChat}
      >
        게시
      </SubmitButton>
    </InputChatWrap>
  );
};

const InputChatWrap = styled.form`
  width: 100%;
  height: 60.5px;
  padding: 13px 16px;
  position: fixed;
  z-index: 20;
  background: #FFFFFF;
  bottom: 0;
  display: flex;
  border-top: 1px solid ${(props) => props.theme.borderColor};
  input {
    &::placeholder {
      color: #C4C4C4;
    }
  }
`;

const Avatar = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 18px;
`;

const SubmitButton = styled.button`
  color: #C4C4C4;
  &:last-child {
    margin-left: auto;
  }
  &.on {
    color: #F26E22;
  }
`;

export default InputChat;
