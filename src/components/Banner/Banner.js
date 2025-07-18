import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FiArrowLeft,FiArrowRight } from "react-icons/fi";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Banner.css';

const slides = [
  { id: 1, label: 'Image 1' },
  { id: 2, label: 'Image 2' },
  { id: 3, label: 'Image 3' }
];

const Banner = () => {
  return (
    <Container  className=" pt-2 pb-4">
   
      <div className="d-flex align-items-center justify-content-center main-title">
        <div className="line-top"></div>
        <div className="banner-title">WELCOME</div>
        <div className="line-bottom"></div>
      </div>
      <Row className="g-3 flex-lg-row align-items-center banner-row">
      <Col xs={12} lg={9}>
          <div className="banner-main-image d-flex flex-column align-items-center justify-content-center">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              }}
              pagination={{ clickable: true }}
              spaceBetween={30}
              slidesPerView={1}
              className="banner-swiper"
            >
              {slides.map(slide => (
                <SwiperSlide key={slide.id}>
                  <svg width="120" height="120" viewBox="0 0 60 60" fill="none">
                    <rect width="60" height="60" rx="10" fill="#eaeaea" />
                    <polygon points="30,15 40,35 20,35" fill="#bdbdbd" />
                    <rect x="18" y="40" width="10" height="8" fill="#bdbdbd" />
                    <circle cx="42" cy="44" r="4" fill="#bdbdbd" />
                  </svg>
                </SwiperSlide>
              ))}
              <div className='controls'>
                <div className="swiper-button-prev custom-swiper-nav"><FiArrowLeft /></div>
                <div className="swiper-button-next custom-swiper-nav"><FiArrowRight /></div>
              </div>
            </Swiper>
          </div>
        </Col>
        <Col xs={12} lg={3} className=" mb-md-0">
          <div className="banner-frame d-flex flex-column align-items-center justify-content-center">
            <svg width="120" height="120" viewBox="0 0 60 60" fill="none">
              <rect width="60" height="60" rx="10" fill="#eaeaea" />
              <polygon points="30,15 40,35 20,35" fill="#bdbdbd" />
              <rect x="18" y="40" width="10" height="8" fill="#bdbdbd" />
              <circle cx="42" cy="44" r="4" fill="#bdbdbd" />
            </svg>
          </div>
        </Col>
     
      </Row>
    </Container>
  );
};

export default Banner; 