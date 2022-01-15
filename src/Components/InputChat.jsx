import React from 'react'
import styled from 'styled-components';

const InputChat = () => {
  return (
    <InputChatWrap>
      <Avatar src='./image/basic-profile-img.png' />
      <input type="text" placeholder='댓글 입력하기...' />
      <SubmitButton type="submit">게시</SubmitButton>
    </InputChatWrap>
  );
};

const InputChatWrap = styled.form`
  width: 100%;
  height: 60.5px;
  padding: 13px 16px;
  position: fixed;
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
`;

export default InputChat;
