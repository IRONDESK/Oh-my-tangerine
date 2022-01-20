import React from "react";
import styled from 'styled-components';

const ChatMsgMe = ({
    orderMsg,
    UserMsg,
    MsgTime}) => {
    return (
    <MsgTemplate data-order={orderMsg}>
        <UserMsgBallon>
            {UserMsg}
        </UserMsgBallon>
        <MsgTimeText>{MsgTime}</MsgTimeText>
    </MsgTemplate>
);
};

const MsgTemplate = styled.article`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 5px;
`;
const UserMsgBallon = styled.p`
    order: 2;
    width: 230px;
    padding: 12px;
    font-size: 15px;
    color: #fff;
    line-height: 20px;
    word-break: keep-all;
    background-color: ${(props) => props.theme.mainColor2};
    border: 1px solid ${(props) => props.theme.mainColor2};
    border-start-start-radius: 15px;
    border-end-start-radius: 15px;
    border-end-end-radius: 15px;
`;
const MsgTimeText = styled.span`
    order: 1;
    display: inline-block;
    font-size: 12px;
    color: #767676;
`;

export default ChatMsgMe;