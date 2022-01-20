import React from "react";
import styled from 'styled-components';

const ChatMsgOther = ({
    orderMsg,
    profileImg = '/image/basic-profile-img.png',
    UserMsg,
    MsgTime}) => {
    return (
    <MsgTemplate data-order={orderMsg}>
        <MsgContainer>
            <UserImg src={profileImg}></UserImg>
            <UserMsgBallon>
                {UserMsg}
            </UserMsgBallon>
        </MsgContainer>
        <MsgTimeText>{MsgTime}</MsgTimeText>
    </MsgTemplate>
);
};

const MsgTemplate = styled.article`
    display: flex;
    align-items: flex-end;
    gap: 5px;
`;
const MsgContainer = styled.article`
    display: flex;
    justify-content: flex-start;
    gap: 12px;
`;
const UserImg = styled.img`
    width : 45px;
    height : 45px;
    object-fit: cover;
    border-radius: 100%;
    border: 1px solid ${(props) => props.theme.borderColor};
`;
const UserMsgBallon = styled.p`
    width: 230px;
    padding: 12px;
    font-size: 15px;
    line-height: 20px;
    word-break: keep-all;
    background-color: #fff;
    border: 1px solid #c4c4c4;
    border-start-end-radius: 15px;
    border-end-start-radius: 15px;
    border-end-end-radius: 15px;
`;
const MsgTimeText = styled.span`
    display: inline-block;
    font-size: 12px;
    color: #767676;
`;

export default ChatMsgOther;