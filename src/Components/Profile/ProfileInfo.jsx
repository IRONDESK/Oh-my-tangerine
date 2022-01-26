import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UserBtnCircle from "../../Components/Profile/UserBtnCircle";
import UserButton from "../../Components/Profile/UserButton";
import store from "../../Store";
import axios from 'axios';

function ProfileInfo ({ accountname }) {
    const [followCheck, setFollowCheck] = useState(false);
    const [followers, setFollowers] = useState(2950);
    const [followings, setFollowings] = useState(128);
    const [name, setName] = useState('애월읍 위니브 감귤농장');
    const [id, setId] = useState(accountname);
    const [msg, setMsg] = useState('대한민국 감귤 전국 배송, 귤따기 체험, 감귤 농장');
    const [imgUrl, setImgUrl] = useState('/image/basic-profile-img.png');

    async function getProfileInfo() {
        const url = 'http://146.56.183.55:5050';
        const token = store.getLocalStorage().token;
        const response = await axios.get(`${url}/profile/${accountname}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json',
            },
        });
        setFollowCheck(response.data.profile.isfollow);
        setFollowers(response.data.profile.followerCount);
        setFollowings(response.data.profile.followingCount);
        setName(response.data.profile.username);
        setId(response.data.profile.accountname);
        setMsg(response.data.profile.intro);
        setImgUrl(response.data.profile.image);
    }

    async function addFollow() {
        const url = 'http://146.56.183.55:5050';
        const token = store.getLocalStorage().token;
        const response = await axios(`${url}/profile/${accountname}/follow`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json',
            },
        });
        setFollowCheck(true);
        setFollowers((current) => current + 1);
    }

    async function removeFollow() {
        const url = 'http://146.56.183.55:5050';
        const token = store.getLocalStorage().token;
        const response = await axios(`${url}/profile/${accountname}/unfollow`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json',
            },
        });
        setFollowCheck(false);
        setFollowers((current) => current - 1);
    }

    const followButton = (e) => {
        if (!followCheck) addFollow();
        else removeFollow();
    };

    useEffect(() => {
        getProfileInfo();
    }, [accountname]);

    return (
    <UserInfoContainer>
        <HeadWrap>
            <Link to={{
                pathname: `/followers/${accountname}`,
                state: {
                    accountname: accountname,
                },
            }}>
                <FollowAmoutWrap
                    amount = {followers}
                    type = "Followers"
                />
            </Link>
            <ProfileImgWrap>
                <ProfileImg src={imgUrl} alt="프로필 이미지" />
            </ProfileImgWrap>
            <Link to={{
                pathname: `/followings/${accountname}`,
                state: {
                    accountname: accountname,
                },
            }}>
                <FollowAmoutWrap
                    amount = {followings}
                    type = "followings"
                />
            </Link>

        </HeadWrap>

        <UserName>{name}</UserName>
        <UserId>{`@ ${id}`}</UserId>
        <UserMsg>{msg}</UserMsg>

        <FooterWrap>
            <UserBtnCircle value="chat" />
            <UserButton
                text={followCheck ? "언팔로우" : "팔로우"}
                onClick={followButton}
                checkValue={followCheck}
                type='button'
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
