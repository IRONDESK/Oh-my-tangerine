import React, { useState, useRef } from 'react'
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';

import axios from "axios";
import store from "../../Store";

const InputChat = ({inputText}) => {
  const InputRef = useRef(null);
  const ButtonRef = useRef(null);
  const formRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
    const input = InputRef.current;
    const button = ButtonRef.current;
    if (input.value) button.classList.add('on');
    else button.classList.remove('on')
  };

  function hasInputCheck() {
    inputText(inputValue);
  }
  hasInputCheck();

  const onSubmitChat = (e) => {
    const input = InputRef.current;
    if (!input.value) {
      e.preventDefault();
      alert('내용이 없습니다!');
      return;
    } else {
      postComment(input.value);
    };
  };

  const RecentPath = useLocation();
  const herePostId = RecentPath.pathname.split("/")[2];

  function postComment(input) {
    const data = {
      "comment": {
          "content": input
      }
  };
    const url = 'http://146.56.183.55:5050';
    const token = store.getLocalStorage().token;
    axios.post(`${url}/post/${herePostId}/comments`, data, {
      headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
      },
    })
    .then(res => {
      console.log('결과', res);
    })
    .catch(err => {
      console.log('에러', err);
    });
  }

  return (
    <InputChatWrap ref={formRef} onSubmit={onSubmitChat}>
      <Avatar src={store.getLocalStorage().image} />
      <input
        ref={InputRef}
        type="text"
        placeholder='댓글 입력하기...'
        onChange={onChangeInput}
        value={inputValue}
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
  border-radius: 100%;
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
