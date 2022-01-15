import React, { useState } from "react";
import styles from "./ProfileInfo.module.css";

import UserBtnCircle from "./UserBtnCircle";
import UserButton from "./UserButton";

const ProfileInfo = ({userId="아이디", userName="이름", userMsg="test"}) => {

    const [followCheck, setFollowCheck] = useState(false)
    const followButton = (e) => {
        e.preventDefault();
        alert("팔로우 상태 변경");
        setFollowCheck(!followCheck);
    };


  return (
    <section className={styles.UserInfo}>
        <article className={styles.InfoHead}>
            <div className={styles.followCont}>
                <span id={styles.followersNum}>2950</span>
                <span className={styles.followTxt}>Followers</span>
            </div>
            <div className={styles.userImgCont}>
                <img src="/image/basic-profile-img.png" alt="프로필 이미지" className={styles.userImg} />
            </div>
            <div className={styles.followCont}>
                <span id={styles.followingsNum}>128</span>
                <span className={styles.followTxt}>Followings</span>
            </div>
        </article>

        <p className={styles.UserName}>{userName}</p>
        <p className={styles.UserId}>{"@" + userId}</p>
        <p className={styles.UserMsg}>{userMsg}</p>
        
        <article className={styles.InfoFoot}>
            <UserBtnCircle value="chat" />
            <UserButton text={followCheck ? "언팔로우" : "팔로우"} onClick={followButton} checkValue={followCheck} />
            <UserBtnCircle value="share" />
        </article>
    </section>
  );
};


export default ProfileInfo;
