import { Link } from 'react-router-dom';
import styled from "styled-components";
import UserButton from "./UserButton";

const HeadRightButton = ({type, checkValue}) => {
    if (type === "submit") {
        return <UserButton text="저장" checkValue={checkValue} />;
    }
    else if (type === "dropmenu") {
        return (
            <div>
                <DropMenuButton
                    htmlFor="dropCheck"
                    className="dropButton"
                />
                <DropCheck
                    type="checkbox"
                    id="dropCheck"
                />
                {/* 설정 모달창 */}
                <ModalWindow className="ModalWindow">
                    <ModalBar
                        htmlFor="dropCheck"
                    ></ModalBar>
                    <ul>
                        <li><Link to="/profile/setting">설정 및 개인정보</Link></li>
                        <li><a href="#">로그아웃</a></li>
                    </ul>
                </ModalWindow>
            </div>
        );
    }
}


const DropMenuButton = styled.label`
    display: block;
    cursor: pointer;
    width: 24px;
    height: 24px;
    background-color: #fff;
    background-image: url(/image/icon/icon-more-vertical.png);
    border: none;
`;
const DropCheck = styled.input`
    display: none;
    &:checked + .ModalWindow {
    transform: translateY(0);
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
const ModalWindow = styled.section`
    background-color: #fff;
    width: 100%;
    height: 200px;
    display: block;
    position: absolute;
    border-radius: 10px;
    box-shadow: 0 0 8px #d6d6d6;
    bottom: -5px;
    left: 0;
    transform: translateY(100%);
    transition: transform .3s;
    & ul li a {
        display: block;
        padding: 14px 26px;
    }
    & ul li:hover {
        font-weight: 800;
    }
`;

export default HeadRightButton;
