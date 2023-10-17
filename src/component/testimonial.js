import Link from 'next/link';
import Image from 'next/image';
import { getStaticPaths } from 'next';
import { Container, Col, Row } from 'react-bootstrap';
import React, { useState } from 'react';
import { gsap } from 'gsap';
import styles from '../styles/testimonial.module.css'
// Import Swiper styles


const slideData = [
    {
      text:
        'We truly appreciate the creativity & hard work of the entire Clay team in bringing our new branding and vision to life. We’ve already received a lot of positive feedback from leadership and colleagues across the company.',
      name: 'Caroline Givnish',
      designation: 'UX Designer, Phenom',
    },
    {
      text:
        'The 30-day retention rate of the app has nearly increased by 30% thanks to Clay.”',
      name: 'Justin Hu',
      designation: 'VP of Consumer Engagement, Ten-X',
    },
    {
      text:
        'We really appreciated Clay’s hands-on approach as well as their ability to contribute not just with design but with the overall product idea.”',
      name: 'Vishal Agarwal',
      designation: 'CEO, Checkmate',
    },
    {
   text:
    'Clay somehow pulls off the impossible of blazing speed while simultaneously possessing breathtaking creativity in their design.',
  name: 'Alex James Colville',
  designation: 'General Partner, age1',
},
{
text:
'Clay is more to us than a digital design agency. They’ve been a partner in the growth of our brand.”',
name: 'Mike Kane',
designation: 'Co-Founder, Ookla',
},
    // Add more slide data as needed
  ];

const testimonial = () => {
    

  const [activeSlide, setActiveSlide] = useState(0);
 
  const handleSlideChange = (direction) => {
    const newSlide =
      direction === 'next'
        ? (activeSlide + 1) % slideData.length : (activeSlide - 1 + slideData.length) % slideData.length;

    // Calculate slide positions based on the direction
    const currentSlidePosition = direction === 'next' ? '-100%' : '100%';
    const newSlidePosition = '0';

    // Animate the slides using GSAP
    gsap.fromTo(
      `.${styles.sliderHeading}`,
      {
        x: currentSlidePosition, // Slide out to the left or right
        opacity: 0, 
        // Ensure the opacity is 1 before starting the animation
      },
      {
        x: newSlidePosition, // Slide in from the left or right
        opacity: 1, // Maintain opacity
        duration: 0.5,

        // Animation duration
        onComplete: () => {
          // Animation complete callback
          setActiveSlide(newSlide);
        },
      }
    );
  };

return (
      <>
        <section className='pb-130 pt-130'>
            <Container>
                <div>
                <Row>
                    <Col lg={9}>
                        <div className={styles.slider}>
                            <div className={styles.sliderHeading}>
                                <h3 className={styles.heading}>{slideData[activeSlide].text}</h3>
                                <div>
                                <h4 className={styles.name}>{slideData[activeSlide].name}</h4>
                                <p className={styles.designation}>{slideData[activeSlide].designation}</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={1}></Col>
                    <Col lg={2}>
                        <div className='d-flex justify-content-around pt-5'>
                           <div href="#" className={styles.black} onClick={() => handleSlideChange('prev')}>
                            <span><svg width="2.1em" height="1.6em" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.322 7.926 9.91 2.179 8.437.664.335 8.997l8.102 8.334 1.473-1.515-5.588-5.747h19.346V7.926H4.322Z" fill="currentColor"></path></svg></span>
                            </div>
                            <div href="#" className={styles.black} onClick={() => handleSlideChange('next')}>
                            <span>
                            <svg width="2.1em" height="1.6em" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.678 7.926 14.09 2.179 15.563.664l8.102 8.333-8.102 8.334-1.473-1.515 5.588-5.747H.332V7.926h19.346Z" fill="currentColor"></path></svg>
                            </span>
                            </div>
                        </div>
                    </Col>
                </Row>
                </div>
            </Container>
        </section>     
      </>
    );
  };
  
  export default testimonial;