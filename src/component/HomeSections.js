import Link from 'next/link'
import Image from 'next/image'
import { Container,Col,Row, } from "react-bootstrap";
import styles from '../styles/homeSection.module.css'
import React, { useEffect, useRef } from 'react';
// import Homebanner from 'public/images/headerbanner.webp'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HomeSections = () => {
  
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: image,
        start: 'top center', 
        end: 'bottom center', 
        scrub: true, 
      },
    });

    tl.from(image, {scale: 0.9 , duration: 0.1  })
    tl.to(image, {scale: 1 , duration: 0.1 })
    tl.to(image, {scale: 1.01 , duration: 0.1 })
    tl.to(image, {scale: 1.02 , duration: 0.1 })

    tl.to(image, {scale: 1.03 , duration: 0.1 })

    tl.to(image, {scale: 1.04 , duration: 0.1 })

    tl.to(image, {scale: 1.05 , duration: 0.1 })

    tl.to(image, {scale: 1.06 , duration: 0.1 })

    tl.to(image, {scale: 1.07 , duration: 0.1 })
    tl.to(image, {scale: 1.08 , duration: 0.1 })
    tl.to(image, {scale: 1.09 , duration: 0.1 })

    tl.to(image, {scale: 1.1 , duration: 0.1 })

    tl.to(image, {scale: 1.1111 , duration: 0.1 })

    tl.to(image, {scale: 1.1222 , duration: 0.1 })
   
   

    }, []);
    return (
        <>
          <section className={`${styles.Section1}`} >
            <Container>
                <Row>
                    <Col lg={12}>
                        <h1 className={`${styles.Heading_level_1} ${styles.Head_1}`} >
                            <span className={styles.LineByLine_Root} >
                                <span className={styles.LineByLine_TextLineByLine_Text_visible}>
                                    Clay is a global branding and UX design agency
                                </span>
                            </span>
                        </h1>
                    </Col>
                </Row>

                <Row>
                  <Col lg={12}>
                  <div className={styles.scrollimagecontainer}>
                    <img
                      ref={imageRef}
                      src='../images/headerbanner.webp'
                      alt="Image"
                      className="scroll-image"
                    />
                  </div>
                  </Col>
                </Row>
            </Container>
      
          </section>
        </>
    )

}

export default HomeSections