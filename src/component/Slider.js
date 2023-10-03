import Link from 'next/link';
import Image from 'next/image';
import { getStaticPaths } from 'next';
import { Container, Col, Row } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/CalltoAction.module.css'
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
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const CalltoAction = () => {
  
    useEffect(() => {
        const mySwiper = new Swiper('.swiper-container', {
          direction: 'horizontal',
          loop: true,
          slidesPerView: 3,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          on: {
            init: () => {
              // Add wheel event listener to Swiper container
              const swiperContainer = document.querySelector('.swiper-container');
              swiperContainer.addEventListener('wheel', (e) => {
                if (e.deltaY > 0) {
                  mySwiper.slideNext();
                } else {
                  mySwiper.slidePrev();
                }
              });
            },
          },
        });
      }, []);
    
return (
      <>
        <section className={`${styles.sectionback} pb-100`}>
            <div className="swiper-container">
                <div className="swiper-wrapper">
                {/* Add your slider content here */}
                <div className="swiper-slide">
                    <Image src={img1} width={400} height={400}/>
                </div>
                <div className="swiper-slide">
                    <Image src={img2} width={400} height={400}/>
                </div>
                <div className="swiper-slide">
                    <Image src={img3} width={400} height={400}/>
                </div>
                <div className="swiper-slide">
                    <Image src={img4} width={400} height={400}/>
                </div>
                <div className="swiper-slide">
                    <Image src={img5} width={400} height={400}/>
                </div>
                <div className="swiper-slide">
                    <Image src={img6} width={400} height={400}/>
                </div>
                <div className="swiper-slide">
                    <Image src={img7} width={400} height={400}/>
                </div>
                <div className="swiper-slide">
                    <Image src={img8} width={400} height={400}/>
                </div>
                <div className="swiper-slide">
                    <Image src={img9} width={400} height={400}/>
                </div>
                </div>
                <div className="swiper-button-next">
                    <span className='iconext'></span>
                </div>
                <div className="swiper-button-prev">
                <span className='iconpre'></span>

                </div>
            </div>
            <Container>
                <Row>
                    <Col lg={7}>
                    <h4 className={`${styles.para2} text`}>A full-service creative agency designing and building inventive digital experiences across all platforms and brand touchpoints.
                    </h4>
                    <div className='text-left mt-5'>
                        <Link href='/' className={styles.links}>
                        <span>Get to know us <span><svg viewBox="0 0 24 24" preserveAspectRatio="none" fill="currentColor"
                                    role="presentation" className="LinkSanity_Icon__KHh7R" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.6075 11.8572L13.255 8.40897L14.1388 7.5L19 12.5L14.1388 17.5L13.255 16.591L16.6075 13.1428H5V11.8572H16.6075Z">
                                    </path>
                                </svg></span></span>
                        <span className={styles.bottom_border}></span>
                        </Link>
                    </div>
                    </Col>
                    <Col lg={5}>
                    </Col>
                </Row>
            </Container>
        </section>     
      </>
    );
  };
  
  export default CalltoAction;