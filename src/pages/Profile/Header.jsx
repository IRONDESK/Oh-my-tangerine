import styled from "styled-components";
import styles from "./Header.module.css";
import UserButton from "./UserButton";

function Header({value, checkValue}) {
    // 상단 타입 선택
    const RightButton = ({type}) => {
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
                    <input
                        type="checkbox"
                        id="dropCheck"
                        className={styles.dropCheck}
                    />
                    {/* 설정 모달창 */}
                    <section className={styles.Modal}>
                        <label
                            htmlFor="dropCheck"
                            className={styles.ModalBar}
                        ></label>
                        <ul>
                            <li><a href="setting">설정 및 개인정보</a></li>
                            <li><a href="#">로그아웃</a></li>
                        </ul>
                    </section>
                </div>
            );
        }
    }

    // Return
    return (
    <HeadMenu>
        <BackButton href="./" alt="뒤로"/>
        <RightButton type={value} />
    </HeadMenu>
    );
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

const HeadMenu = styled.header`
    width: 100%;
    height: 48px;
    border-bottom: 1px solid #DBDBDB;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`;

const BackButton = styled.a`
    display: inline-block;
    width: 22px;
    height: 22px;
    background-image: url(/image/icon/icon-arrow-left.png);
`;

export default Header;
