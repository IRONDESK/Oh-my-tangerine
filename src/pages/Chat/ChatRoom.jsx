import React, { useState } from "react";
import styled from 'styled-components';

import HeaderWithMoreBtn from "../../Components/Header/HeaderWithMoreBtn";
import ChatMsg from "./ChatMsg";

const ChatRoom = ({chatWith}) => {
    const [TextChange, setTextChange] = useState("");
    function onChangeText(e) {
        setTextChange(e.target.value);
        if (e.target.value == "") {
            return
        }
    };
    const ChatSubmitButton = styled.button`
    flex: 1;
    font-family: 'Pretendard';
    font-size: 14px;
    font-weight: 600;
    color: ${( TextChange ? "#F26E22" : "#c4c4c4")};
    line-height: 16px;
    `;

    const ChatHistory = [
        ['me', '지금 감귤 보내드렸어요. 확인해주세요.', "14:01"],
        ['other', '주소는 서울시 강남구 테헤란로 120 3층입니다', "13:34"],
        ['other', '좋은 귤로 보내주세요', "13:32"],
        ['me', '지금 이 대화는 예시입니다.', '12:00'],
    ];

    const [ChatArray, setChatArray] = useState(ChatHistory);
    function onSubmitMsg(e) {
        e.preventDefault();
        if (TextChange === "") {
            return;
        }
        const today = new Date();   
        const nowtime = `${('0' + today.getHours()).slice(-2)}:${('0' + today.getMinutes()).slice(-2)}`;
        setChatArray( (current) => [['me', TextChange, nowtime], ...current  ]);
        setTextChange("");
    };

    return (
    <div>
    <HeaderWithMoreBtn title={chatWith}/>
    <ChatContentContainer onChange="">
        { ChatArray.map( (item, index) => 
            {   return (
                <ChatMsg
                orderMsg = {index}
                Role = {item[0]}
                UserMsg = {item[1]}
                MsgTime = {item[2]}
                />
            );
            }
        )}

    </ChatContentContainer>
    <ChatMsgForm onSubmit={onSubmitMsg} autocomplete="off">
        <input
            id="ChatImgInput"
            type="file"
            accept='img/*'
            // onChange={onLoadImage}
            style={{ display:"none" }}
        />
        <ChatImgButton htmlFor="ChatImgInput" />
        <ChatTextInputBox
            id="ChatTextInput"
            placeholder="메시지 입력하기..."
            onChange={onChangeText}
            value={TextChange}
        />
        <ChatSubmitButton
            id="ChatSubmitBtn"
            htmlFor="ChatTextInput"
        >전송</ChatSubmitButton>
    </ChatMsgForm>
    </div>
    );
};

const ChatContentContainer = styled.main`
    display: flex;
    flex-wrap: nowrap;
    height: 730px;
    flex-direction: column-reverse;
    padding: 20px 16px;
    background-color: #f2f2f2;
    gap: 10px;
    overflow-y: auto;
`;
const ChatMsgForm = styled.form`
    display: flex;
    padding: 13px 15px; 
    height: auto;
    border-top: 1px solid ${(props) => props.theme.borderColor};
    gap: 10px;
`;

const ChatImgButton = styled.label`
    cursor: pointer;
    width: 37px;
    height: 37px;
    border-radius: 100%;
    background-color: #c4c4c4;
    background-image: url('/image/icon/icon-upload.svg');
    background-repeat: no-repeat;
    background-position: center center;
`;
const ChatTextInputBox = styled.input`
    flex: 5;
    font-family: 'Pretendard';
    font-size: 14px;
    line-height: 16px;
`;


export default ChatRoom;