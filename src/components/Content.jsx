// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getInfo } from '../store/reducer';
import CardsContent from './CardsContent';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styled from 'styled-components';

const Div = styled.div`
  width:100%;
  // display:flex;
  // flex-direction:column;
  // justify-content:center;
  align-items:center;
  text-align:center;
  margin:2em auto;
  h1{
    color:#ff4f4f;
  }
  div{
    
    padding:2em;
  }
`;

const Content = () => {

  const { infos } = useSelector(state => state.info);

  const dispatch = useDispatch();


  const filtro = infos.filter(i=>i.category.find(i=>i.name==="infantil"))

  useEffect(() =>{
    dispatch(getInfo());
  },[]) 


  return (
    <Div>
      <h1>content</h1> 
      <div>
        <Swiper
          spaceBetween={0}
          slidesPerView={4}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          >

          {localStorage.role === "usermenor"?
            filtro.map(data => (<SwiperSlide key={"i.id"}><CardsContent props={data}/></SwiperSlide> )):
            infos.map(data => (<SwiperSlide key={"i.id"}> <CardsContent props={data}/></SwiperSlide>))
          }
                      
                      
        </Swiper>

      </div>
    </Div>
  )
}

export default Content
