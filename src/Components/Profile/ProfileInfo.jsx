import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UserBtnCircle from "../../Components/Profile/UserBtnCircle";
import UserButton from "../../Components/Profile/UserButton";

function ProfileInfo ({userName="애월읍 위니브 감귤농장", userId="weniv_Mandarin", userMsg="애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장"}) {
    const [followCheck, setFollowCheck] = useState(false)
    const followButton = (e) => {
        e.preventDefault();
        alert("팔로우 상태 변경");
        setFollowCheck(!followCheck);
    };

    return (
    <UserInfoContainer>
        <HeadWrap>
            <Link to="/followers">
                <FollowAmoutWrap 
                    amount = "2950"
                    type = "Followers"
                />
            </Link>
            <ProfileImgWrap>
                <ProfileImg src="/image/basic-profile-img.png" alt="프로필 이미지" />
            </ProfileImgWrap>
            <FollowAmoutWrap 
                amount = "128"
                type = "Followings"
            />
        </HeadWrap>

        <UserName>{userName}</UserName>
        <UserId>{"@" + userId}</UserId>
        <UserMsg>{userMsg}</UserMsg>
        
        <FooterWrap>
            <UserBtnCircle value="chat" />
            <UserButton
                text={followCheck ? "언팔로우" : "팔로우"}
                onClick={followButton}
                checkValue={followCheck}
            />
            <UserBtnCircle value="share" />
        </FooterWrap>
    </UserInfoContainer>
  );
};

function FollowAmoutWrap ({amount, type}) {
    const FollowWrap = styled.article`
        text-align: center;
    `;
    const AmountWrap = styled.span`
        display: block;
        font-size: 18px;
        line-height: 23px;
        font-weight: 700;
    `;
    const TypeWrap = styled.span`
        display: block;
        font-size: 13px;
        line-height: 16px;
        color: #767676;
        letter-spacing: -.5px;
    `;

    return (
        <FollowWrap>
            <AmountWrap id={type + 'Amount'}>{amount}</AmountWrap>
            <TypeWrap>{type}</TypeWrap>
        </FollowWrap>
    );
}



const UserInfoContainer = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 25px 0;
    border-bottom: 0.5px solid #DBDBDB;
`;

const HeadWrap = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 40px;
`;
const FooterWrap = styled.footer`
    display: flex;
    gap: 10px;
    justify-content: center;
`;

const ProfileImgWrap = styled.div`
    width: 110px;
    height: 110px;
    border-radius: 100%;
    border: 1px solid #DBDBDB;
    box-sizing: border-box;
    overflow: hidden;
`;
const ProfileImg = styled.img`
    width: 110px;
    height: auto;
`;
const UserName = styled.p`
    margin: 6px 0;
    text-align: center;
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
`;
const UserId = styled.p`
    text-align: center;
    font-size: 13px;
    color: #767676;
`;
const UserMsg = styled.p`
    text-align: center;
    margin: 16px 0;
    color: #767676;
    font-size: 15px;
    line-height: 17px;
`;



export default ProfileInfo;
