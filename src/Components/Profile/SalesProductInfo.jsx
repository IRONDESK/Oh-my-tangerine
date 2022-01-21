import React from "react";
import styled from 'styled-components';

const SalesProductInfo = ({itemImgLink, itemName, itemPrice}) => {
    const ConvertedPrice = itemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return (
    <Container>
        <ItemImg src={itemImgLink} />
        <ItemName>{itemName}</ItemName>
        <ItemPrice>{ConvertedPrice}원</ItemPrice>
    </Container>
);
};

const Container = styled.article`
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 13px;
`;
const ItemImg = styled.img`
    width: 140px;
    height: 90px;
    border-radius: 8px;
    object-fit: cover;
`;
const ItemName = styled.span`
    display: inline-block;
    width: 140px;
    height: 18px;
    margin-top: 3px;
    font-size: 15px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;
const ItemPrice = styled.span`
    font-size: 14px;
    font-weight: 700;
    color: ${(props) => props.theme.mainColor2};
`;

export default SalesProductInfo;