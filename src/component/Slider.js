import Link from 'next/link';
import Image from 'next/image';
import { getStaticPaths } from 'next';
import { Container, Col, Row } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/CalltoAction.module.css'



// import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';
// import { Swiper, SwiperSlide } from 'swiper/react';
// SwiperCore.use([Navigation, Pagination, Autoplay]);

// import Style from '../styles/slide.module.css'
import img1 from 'public/images/slide1.webp'
import img2 from 'public/images/slide2.webp'
import img3 from 'public/images/slide3.webp'
import img4 from 'public/images/slide4.webp'
import img5 from 'public/images/slide5.webp'
import img6 from 'public/images/slide6.webp'
import img7 from 'public/images/slide7.webp'
import img8 from 'public/images/slide8.webp'
import img9 from 'public/images/slide9.webp'
import img10 from 'public/images/slide10.webp'
import img11 from 'public/images/slide11.webp'
// import { gsap } from 'gsap';
// import * as THREE from 'three';
// import styles from '../styles/CalltoAction.module.css'
// import Swiper from 'swiper';
// import 'swiper/swiper-bundle'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';



const Slider = () => {
  
    // useEffect(() => {
    //     const mySwiper = new Swiper('.swiper-container', {
    //       direction: 'horizontal',
    //       loop: true,
    //       slidesPerView: 3,
    //       navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //       },
    //       on: {
    //         init: () => {
    //           // Add wheel event listener to Swiper container
    //           const swiperContainer = document.querySelector('.swiper-container');
    //           swiperContainer.addEventListener('wheel', (e) => {
    //             if (e.deltaY > 0) {
    //               mySwiper.slideNext();
    //             } else {
    //               mySwiper.slidePrev();
    //             }
    //           });
    //         },
    //       },
    //     });
    //   }, []);
    
return (
      <>

<section className={`${styles.sectionback} pb-100`}>
<Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={3}
      navigation={{  nextEl: '.swiper-button-next',prevEl: '.swiper-button-prev' }}
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className="swiper-slide">
            <Image src={img1} width={400} height={400} alt="slide"/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className="swiper-slide">
              <Image src={img2} width={400} height={400} alt="slide"/>
          </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide">
            <Image src={img3} width={400} height={400} alt="slide"/>
         </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className="swiper-slide">
              <Image src={img5} width={400} height={400} alt="slide"/>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className="swiper-slide">
              <Image src={img6} width={400} height={400} alt="slide"/>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className="swiper-slide">
              <Image src={img7} width={400} height={400} alt="slide"/>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className="swiper-slide">
              <Image src={img8} width={400} height={400} alt="slide"/>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className="swiper-slide">
              <Image src={img9} width={400} height={400} alt="slide"/>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className="swiper-slide">
              <Image src={img10} width={400} height={400} alt="slide"/>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className="swiper-slide">
              <Image src={img11} width={400} height={400} alt="slide"/>
          </div>
      </SwiperSlide>
    </Swiper>
          
          
        </section>     
      </>
    );
  };
  
  export default Slider;