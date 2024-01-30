import Link from 'next/link'
import Image from 'next/image'
import { Container,Col,Row, } from 'react-bootstrap';
import styles from '../styles/homeSection.module.css'
import React, { useEffect, useRef } from 'react';
import Homebanner from 'public/images/headerbanner.webp'
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
                    <Col xxl={12} xl={12} lg={12}>
                        <h1 className={`${styles.Heading_level_1} ${styles.Head_1}`} >
                            <span className={styles.LineByLine_Root} >
                                <span className={styles.LineByLine_TextLineByLine_Text_visible}>
                                    Clay is a global branding and UX design agency
                                </span>
                            </span>
                        </h1>
                    </Col>
                </Row>

                <Row className={styles.RowModel}> 
                  <Col xxl={12} xl={12} lg={12}>
                  <div className={styles.scrollimagecontainer}>
                    {/* <Image ref={imageRef} src={Homebanner} alt="Image" className="scroll-image" style={{ width: '100%' }} height={1000}
                    /> */}
                    <video ref={imageRef}  style={{ width: '100%' }} autoPlay className="scroll-image " muted loop src="/clay.mp4" type="video/mp4"></video>
                    <Link href="/">
                      <div className={styles.VideoButtonPlay}>
                        <div className={styles.VideoButtonPlay_Circle}></div>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.VideoButtonPlay_Icon}><path d="m15.631 9.383 22.733 15.5-22.733 15.5v-31Z" fill="currentColor"></path></svg>
                        </div>
                    </Link>
                  </div>
                  </Col>
                </Row>
            </Container>
          </section>
        </>
    )

}

export default HomeSections