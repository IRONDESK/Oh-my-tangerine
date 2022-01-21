import React, { useState } from 'react'
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import NavBottom from '../../Components/NavBottom';
import Follower from '../../Components/Follower';
import Header from '../../Components/Header/HeaderFollowers';

const Followers = () => {
  let history = useHistory();
  return (
    <Container>
      <Header title={'Followers'}></Header>
      <ul className='followers-list'>
        <Follower
          imgLink={'./image/Ellipse 1.png'}
          name={'애월읍 한라봉 최고 맛집'}
          desc={'정성을 다해 농사짓는 한라봉'}
          follow={false}
        />
        <Follower
          imgLink={'./image/Ellipse 1 (1).png'}
          name={'감귤의 품격 - 애월읍'}
          desc={'제주 노지귤, 하우스 한라봉 판매합니다.'}
          follow={false}
        />
        <Follower
          imgLink={'./image/Ellipse 1 (6).png'}
          name={'한라봉의 신'}
          desc={'30년의 노하우로 정성스럽게 농사지은 감귤'}
          follow={true}
        />
        <Follower
          imgLink={'./image/Ellipse 1 (2).png'}
          name={'나 감귤 좋아하네'}
          desc={'감귤농장 컬렉터 i love mandarin'}
          follow={true}
        />
        <Follower
          imgLink={'./image/Ellipse 1 (3).png'}
          name={'애월읍 한라봉 최고 맛집'}
          desc={'제주 노지귤, 하우스 한라봉 판매합니다.'}
          follow={false}
        />
        <Follower
          imgLink={'./image/Ellipse 1 (4).png'}
          name={'제주 키위, 한라봉 판매'}
          desc={'키위, 한라봉'}
          follow={true}
        />
        <Follower
          imgLink={'./image/Ellipse 1 (5).png'}
          name={'싱싱한 제주 한라봉'}
          desc={''}
          follow={false}
        />
      </ul>
      <NavBottom />
    </Container>
  )
}

const Container = styled.section`
  .followers-list {
    padding: 24px 16px;
  }
`;

export default Followers;
