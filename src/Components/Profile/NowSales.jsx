import React, { memo, useEffect, useState } from "react";
import styled from 'styled-components';
import store from "../../Store";
import axios from 'axios';
import { Link } from 'react-router-dom';

import SalesProductInfo from "./SalesProductInfo";

const NowSales = memo(({ accountname }) => {
    const [productList, setProductList] = useState([]);

    async function getProductList() {
        const url = 'http://146.56.183.55:5050';
        const token = store.getLocalStorage().token;
        const response = await axios(`${url}/product/${accountname}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json',
            },
        });
        setProductList(response.data.product)
    }

    useEffect(() => {
        getProductList();
    }, [accountname]);
    return (
    <Container>
        <Title>판매 중인 상품</Title>
        <ProductContainer>
            {productList.map((product) => (
                <a href={product.link}>
                    <SalesProductInfo
                        itemImgLink={product.itemImage}
                        itemName={product.itemName}
                        itemPrice={product.price}
                    />
                </a>
            ))}
        </ProductContainer>
    </Container>
);
});

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