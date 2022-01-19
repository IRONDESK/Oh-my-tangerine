import React from "react";
import styled from "styled-components";

const UserBtnCircle = ({value}) => {

    const UserButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 34px;
    height: 34px;
    background-color: #fff;
    border: 1px solid #DBDBDB;
    box-sizing: border-box;
    border-radius: 30px;
`;
    const imageLink = {
        chat : ["/image/icon/icon-message-circle.svg", "대화"],
        share : ["/image/icon/icon-share.svg", "공유"],
    };
    
    return (
    <UserButton>
        <img
            width="18px"
            src={imageLink[`${value}`][0]}
            alt={imageLink[`${value}`][1]}
        />
    </UserButton>
    )
};



export default UserBtnCircle;