import React from "react";
import styled from "styled-components";

const ChatTemplate = ({
    chatLink,
    chatWith,
    chatWithImg = '/image/basic-profile-img.png',
    chatLastMsg,
    chatLastDate,
    chatStatus = false}) => {
    return (
    <ChatUnit href={chatLink}>
        <ChatWithImgStatus status={chatStatus}>
            <ChatWithImgContainer>
                <ChatWithImg src={chatWithImg} />
            </ChatWithImgContainer>
        </ChatWithImgStatus>
        <ChatContents>
            <ChatWith>{chatWith}</ChatWith>
            <ChatLastMsg>{chatLastMsg}</ChatLastMsg>
        </ChatContents>
        <ChatLastDate>{chatLastDate}</ChatLastDate>
    </ChatUnit>
    )
};

const ChatUnit = styled.a`
    display: flex;
    align-items: flex-end;
`;
const ChatWithImgStatus = styled.div`
    position: relative;
    &::before {
    content: '';
    display: ${(props) => (props.chatStatus === true ? "block" : "none" )};
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${(props) => props.theme.mainColor2};
    width: 14px;
    height: 14px;
    border-radius: 100%;
    }
`;
const ChatWithImgContainer = styled.div`
    width: 45px;
    height: 45px;
    border: 1px solid #DBDBDB;
    border-radius: 100%;
    overflow: hidden;
`;

const ChatWithImg = styled.img`
    width: 45px;
    height: auto;
`;
const ChatContents = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 220px;
    margin: 0 10px 5px 10px;
`;
const ChatWith = styled.p`
    font-size: 15px;
    font-weight: 700;
`;
const ChatLastMsg = styled.span`
    display: block;
    font-size: 13px;
    font-weight: 400;
    color: #767676;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;
const ChatLastDate = styled.p`
    text-align: right;
    font-size: 12px;
    font-weight: 400;
    color: #dbdbdb;
    margin-bottom: 6px;
`;

export default ChatTemplate;