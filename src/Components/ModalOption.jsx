import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

// 이 모달을 사용할 때,
// input:checkbox에 id="dropCheck"로 버튼을 만들어야 함.
// 그리고 해당 input에는 아래와 같이 checked 되었을 때의 CSS를 설정해야 함.
// const BUTTON = styled.input`
//   &:checked + section {
//     transform: translateY(0%);
//   }
// `;

function ModalOption ({
    nameArray = [],
    clickArray = [],
    id = '' }) {

    return (
        <ModalWindow>
            <ModalBar htmlFor={id} />
            <ul>
                { nameArray.map( (value, index) => (
                    <li>
                    <OptionBtn htmlFor={id} onClick={ clickArray[index] }>
                        { value }
                    </OptionBtn>
                    </li>
                )) }
            </ul>
        </ModalWindow>
    );
}

const ModalWindow = styled.section`
    z-index: 10;
    position: absolute;
    padding-bottom: 12px;
    width: 100%;
    min-height: 100px;
    bottom: 55px;
    left: 0;
    background-color: #fff;
    box-shadow: 0 0 8px #d6d6d6;
    border-radius: 10px;
    transform: translateY(100%);
    transition: transform .3s;
    & ul li {
        width: 100%;
    }
`;
const OptionBtn = styled.label`
    cursor: pointer;
    display: block;
    padding: 14px 26px;
    width: 100%;
    font-size: 15px;
    text-align: left;
    &:hover {
        font-weight: 700;
    }
`;

const ModalBar = styled.label`
    cursor: pointer;
    display: block;
    margin: 14px auto;
    width: 50px;
    height: 4px;
    background-color: #DBDBDB;
    border-radius: 10px;
`;

export default ModalOption;
