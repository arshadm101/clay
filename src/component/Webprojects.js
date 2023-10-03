import Link from 'next/link'
import Image from 'next/image'
import Slack from 'public/images/slack.webp'
import Cornerston from 'public/images/cornerston.webp'
import Animatedbacktext from 'public/images/animatedbacktext.webp'
import Ajuice from 'public/images/ajuice.webp'
import Snapchat from 'public/images/snapchat.webp'
import Noun from 'public/images/noun.webp'
import Wealth from 'public/images/wealth.webp'
import Jokr from 'public/images/jokr.webp'
import Marqeta from 'public/images/marqeta.webp'
import { Container,Col,Row, } from "react-bootstrap";
import styles from '../styles/webprojects.module.css'
import Styles from '../styles/CleientsLogo.module.css'

import React, { useEffect, useRef } from 'react';
// import ThreeScene from './ThreeScene';
// import ImageWithShader from '../component/ImageWithShader';
import gsap from 'gsap';

const Webprojects = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });

    const pos = { x: 0, y: 0 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.2;

    const xSet = gsap.quickSetter(cursorRef.current, "x", "px");
    const ySet = gsap.quickSetter(cursorRef.current, "y", "px");

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    gsap.ticker.add(() => {
      // Adjust speed for higher refresh monitors
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
    return (
        <>
          <section className={`${styles.Section1}`} >
              <Container>
                <Row>
                   <Col lg={6}>
                    <div className={styles.web1}> 
                    <Link  href="/" ref={cursorRef}>
                    <Image src={Slack} className={styles.animatedimage} alt="Your Animated Image"  height={500} width={500} />
                    </Link>
                      <h4 className={`${styles.headingh4} mt-4  secondary-font fw700`}>Slack </h4>
                      <p className='text'>Designing and building Slack’s interactive demo experience</p>
                      <ul>
                        <li>Web Design</li>
                        <li>Enterprise</li>
                        <li>Development</li>
                      </ul>
                    </div>
                   </Col>
                   <Col lg={6} className='pt-130'>
                    <div className={styles.web1}> 
                    <Link  href="/" ref={cursorRef}>
                    <Image src={Cornerston} className={styles.animatedimage} alt="Your Animated Image"  height={500} width={500} />
                    </Link>
                      <h4 className={`${styles.headingh4} mt-4  secondary-font fw700`}>Cornerstone </h4>
                      <p className='text'>
Web experience for an enterprise people development platform</p>
                      <ul>
                        <li>Website</li>
                        <li>B2B</li>
                        <li>SaaS</li>
                        <li>3D</li>
                      </ul>
                    </div>
                   </Col>
                </Row>
                <Row>
                   <Col lg={10} className='pt-130'>
                    <div className={styles.web1}> 
                    <Link  href="/" ref={cursorRef}>
                    <Image src={Animatedbacktext} className={styles.animatedimage} alt="Your Animated Image"  />
                    </Link>
                      <h4 className={`${styles.headingh4} mt-4  secondary-font fw700`}>Fiverr </h4>
                      <p className='text'>Web app design for a virtual creative collaboration service</p>
                      <ul>
                        <li>UI/UX</li>
                        <li>Startup</li>
                        <li>Design System</li>
                      </ul>
                    </div>
                   </Col>
                   <Col lg={2}></Col>
                </Row>
                <Row className='pt-130'>
                <Col lg={6} className='pt-130'>
                    <div className={styles.web1}> 
                    <Link  href="/" ref={cursorRef}>
                    <Image src={Ajuice} alt="Your Animated Image" className={styles.animatedimage}  height={500} width={500} />
                    </Link>
                      <h4 className={`${styles.headingh4} mt-4  secondary-font fw700`}>Joe & The Juice </h4>
                      <p className='text'>A digital commerce and loyalty app for a global coffee shop chain</p>
                      <ul>
                        <li>UX/UI</li>
                        <li>Mobile App</li>
                        <li>Consumer</li>
                      </ul>
                    </div>
                   </Col>
                   <Col lg={6}>
                    <div className={styles.web1}> 
                    <Link  href="/" ref={cursorRef}>
                    <Image src={Snapchat} alt="Your Animated Image" className={styles.animatedimage}  height={500} width={500} />
                    </Link>
                      <h4 className={`${styles.headingh4} mt-4  secondary-font fw700`}>SnapChat </h4>
                      <p className='text'>Integrating augmented reality to elevate social commerce</p>
                      <ul>
                        <li>UX/UI</li>
                        <li>Mobile App</li>
                        <li>Ecommerce</li>
                      </ul>
                    </div>
                   </Col>
                  
                </Row>
                <Row className='pt-130'>
                  <Col lg={2}></Col>
                   <Col lg={10}>
                    <div className={styles.web1}> 
                    <Link  href="/" ref={cursorRef}>
                    <Image src={Noun} className={styles.animatedimage} alt="Your Animated Image"  />
                    </Link>
                      <h4 className={`${styles.headingh4} mt-4  secondary-font fw700`}>Nuant </h4>
                      <p className='text'>Design system for a crypto asset intelligence solution</p>
                      <ul>
                        <li>UI/UX</li>
                        <li>Web App</li>
                        <li>Web3</li>
                      </ul>
                    </div>
                   </Col>
                </Row> 
                <Row className='pt-130'>
                   <Col lg={6}>
                    <div className={styles.web1}> 
                    <Link  href="/" ref={cursorRef}>
                    <Image src={Wealth} className={styles.animatedimage} alt="Your Animated Image"  height={500} width={500} />
                    </Link>
                      <h4 className={`${styles.headingh4} mt-4  secondary-font fw700`}>Wealth </h4>
                      <p className='text'>Designing a self-service digital estate planning platform</p>
                      <ul>
                        <li>Branding</li>
                        <li>UI/UX</li>
                        <li>Website</li>
                        <li>Design System</li>
                      </ul>
                    </div>
                   </Col>
                   <Col lg={6} className='pt-130'>
                    <div className={styles.web1}> 
                    <Link  href="/" ref={cursorRef}>
                    <Image src={Jokr} className={styles.animatedimage} alt="Your Animated Image"  height={500} width={500} />
                    </Link>
                      <h4 className={`${styles.headingh4} mt-4  secondary-font fw700`}>JOKR </h4>
                      <p className='text'>
                      
Mobile app design for a fast grocery delivery startup</p>
                      <ul>
                        <li>UI/UX</li>
                        <li>Startup</li>
                        <li>Consumer</li>
                        
                      </ul>
                    </div>
                   </Col>
                </Row>
                <Row>
                   <Col lg={10} className='pt-130'>
                    <div className={styles.web1}> 
                    <Link  href="/" ref={cursorRef}>
                    <Image src={Marqeta} className={styles.animatedimage} alt="Your Animated Image"  />
                    </Link>
                      <h4 className={`${styles.headingh4} mt-4  secondary-font fw700`}>Marqeta </h4>
                      <p className='text'>Website and digital branding for a modern card-issuing platform</p>
                      <ul>
                        <li>Web Design</li>
                        <li>3D</li>
                        <li>Development</li>
                        <li>Fintech</li>
                      </ul>
                    </div>
                   </Col>
                   <Col lg={2}></Col>
                </Row>

                <Row className='pt-65 pb-65'>
            <Col lg={12}>
                <div className='text-center'>
                   <Link href='' className={Styles.links}>
                 <span>View All Clients <span><svg viewBox="0 0 24 24" preserveAspectRatio="none" fill="currentColor" role="presentation" className="LinkSanity_Icon__KHh7R" xmlns="http://www.w3.org/2000/svg"><path d="M16.6075 11.8572L13.255 8.40897L14.1388 7.5L19 12.5L14.1388 17.5L13.255 16.591L16.6075 13.1428H5V11.8572H16.6075Z"></path></svg></span></span>
                 <span className={Styles.bottom_border}></span>
                    </Link> 
                </div>
            </Col>
          </Row>
              </Container>
              <div className='ball' ref={cursorRef}></div>
          </section>
        </>
    )
}

export default Webprojects