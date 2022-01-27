import styled from "styled-components";
import HeadRightButton from "../../Components/Profile/HeadRightButton";
import { useHistory } from 'react-router-dom';

function Header({ value, checkValue }) {
    let history = useHistory();

    return (
    <HeadMenu>
        <BackButton alt="뒤로"onClick={ () => {history.goBack()} } />
        <HeadRightButton type={value} checkValue={checkValue} />
    </HeadMenu>
    );
}

const HeadMenu = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 48px;
    padding: 0 20px;
    border-bottom: 1px solid #DBDBDB;
`;

const BackButton = styled.a`
    display: inline-block;
    width: 22px;
    height: 22px;
    background-image: url(/image/icon/icon-arrow-left.png);
`;

export default Header;
