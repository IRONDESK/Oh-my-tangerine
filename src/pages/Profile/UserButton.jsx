import React from "react";
import styled from "styled-components";

function UserButton ({text, onClick, checkValue}) {
    const MainButton = styled.button`
    cursor: pointer;
    padding: 7px 20px;
    height: 33px;
    background: ${(props) => (props.checkedStyle === false ? "#F26E22" : "#fff")};
    border: ${(props) => (props.checkedStyle === false ? "none" : "1px solid #DBDBDB")};
    color: ${(props) => (props.checkedStyle === false ? "#fff" : "#777")};
    font-size: 14px;
    font-weight: 500;
    border-radius: 30px;
    `;

    return (
        <MainButton onClick={onClick} checkedStyle={checkValue}>
            {text}
        </MainButton>
    );
}

export default UserButton;