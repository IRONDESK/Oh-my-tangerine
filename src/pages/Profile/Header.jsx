import styled from "styled-components";
import HeadRightButton from "../../Components/Profile/HeadRightButton";

function Header({value, checkValue}) {
    return (
    <HeadMenu>
        <BackButton href="./" alt="뒤로"/>
        <HeadRightButton type={value} checkValue={checkValue}/>
    </HeadMenu>
    );
}

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
