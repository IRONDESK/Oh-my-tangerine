import React from "react";
import styled from 'styled-components';

import SalesProductInfo from "./SalesProductInfo";

const NowSales = () => {
    return (
    <Container>
        <Title>판매 중인 상품</Title>
        <ProductContainer>
            <SalesProductInfo
                itemImgLink = "/image/product/product-img-1.png"
                itemName = "애월읍 노지 감귤"
                itemPrice = "35000"
            />
            <SalesProductInfo
                itemImgLink = "/image/product/product-img-2.jpg"
                itemName = "애월읍 한라봉 10kg BOX"
                itemPrice = "45000"
            />
            <SalesProductInfo
                itemImgLink = "/image/product/product-img-3.jpg"
                itemName = "감귤 파치"
                itemPrice = "25000"
            />
        </ProductContainer>
    </Container>
);
};

const Container = styled.article`
    display: flex;
    flex-direction: column;
    padding: 20px 0 10px 0;
    height: 235px;
    background-color: #fff;
    gap: 6px;
    border-top: 0.5px solid #DBDBDB;
    border-bottom: 0.5px solid #DBDBDB;
`;
const Title = styled.h3`
    padding: 0 20px;
    font-size: 18px;
    font-weight: 800;
    line-height: 20px;
`;
const ProductContainer = styled.article`
    display: flex;
    flex-wrap: nowrap;
    padding: 0 20px 10px 20px;
    height: 100%;
    gap: 10px;
    overflow-x: auto;
    overflow-y: hidden;
    &::-webkit-scrollbar {
        height: 10px;
    }
    &::-webkit-scrollbar-thumb {
        margin: 0 5px;
        background-color: #e4e4e4;
        border: 1px solid #fff;
        box-sizing: border-box;
        border-radius: 20px;
    }
`;

export default NowSales;