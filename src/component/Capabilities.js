import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from '../styles/Capabilities.module.css';
import { Container, Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Bulb from 'public/images/about-capabilities-3d.png'




gsap.registerPlugin(ScrollTrigger);

const AboutContent = () => {
    const imageSources = [
        '../images/meta.svg',
        '../images/google.svg',
        '../images/discover.svg',
        '../images/stripe.svg',
        '../images/cocacola.svg',
        '../images/coinbase.svg',
        '../images/uber.svg',
        '../images/sony.svg',
        '../images/slack.svg',
        '../images/amazon.svg',
        '../images/fiverr.svg',
        '../images/credit.svg',
        '../images/cisco.svg',
        '../images/adp.svg',
        '../images/ups.svg',
        '../images/vmware.svg',
        '../images/fossil.svg',
        '../images/wd.svg',
        '../images/toyota.svg',
        '../images/sumsung.svg',
        // ... Add more image URLs here
      ];
    
    useEffect(() => {

        const textElements = document.querySelectorAll('.text');

        textElements.forEach((textElement) => {
          const textLines = textElement.textContent.split('\n').filter((line) => line.trim() !== '');
          textElement.innerHTML = '';
    
          textLines.forEach((line, index) => {
            const lineWrapper = document.createElement('div');
            lineWrapper.className = 'line-wrapper';
            lineWrapper.style.overflow = 'hidden';
            textElement.appendChild(lineWrapper);
    
            const lineText = document.createElement('span');
            lineText.className = 'line-text';
            lineText.textContent = line;
            lineWrapper.appendChild(lineText);
    
            gsap.from(lineText, {
              y: '100%',
              opacity: 0,
              duration: 1,
              delay: index * 0.2,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: lineText,
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: true,
              },
            });
          });
        });



        // const tl = gsap.timeline({
        //   scrollTrigger: {
        //     trigger: '.animation-container',
        //     start: 'top bottom',
        //     end: 'bottom bottom',
        //     scrub: true,
        //   },
        // });
    
        // tl.from('.elemt1', { y: -100, opacity: 0, duration: 1 });
        // tl.from('.elemt2', { y: 100, opacity: 0, duration: 1 }, '-=0.5');

      }, []);

  return (
    <>  
    
     <section className={`${styles.Industry} pb-130 position-relative `} >
        <div className={`${styles.beforimg}`}>
            <Image src={Bulb} alt='Image'/>
        </div>
      <Container className='pt-130'>
        <Row  className='pt-5 pb-5'>
          <Col xxl={7} xl={7} lg={7}>
            <div>
                <h2 className={`${styles.Heading_level_1} text-white`}>Capabilities</h2>
            </div>
          </Col>
        </Row>
        <Row className='pt-5 pb-5 text-container'>
          <Col xxl={4} xl={4} lg={4}>
            <h4 className={`${styles.Heading_level_11} text-white text`}>Branding</h4>                
          </Col>
          <Col xxl={4} xl={4} lg={4}>
            <p className={`${styles.para2} text`}>Brand Strategy</p>
            <p className={`${styles.para2} text`}>Brand Architecture</p>
            <p className={`${styles.para2} text`}>Verbal Identity</p>
            <p className={`${styles.para2} text`}>Visual Identity</p>
            <p className={`${styles.para2} text`}>Brand Guidelines</p>
            <p className={`${styles.para2} text`}>Brand Experiences</p>
          </Col>
        </Row>
        <Row className='pt-5 pb-5'>
          <Col xxl={4} xl={4}  lg={4}>
            <h4 className={`${styles.Heading_level_11} text-white text`}>Digital Products
</h4>                
          </Col>
          <Col xxl={4} xl={4} lg={4}>
            <p className={`${styles.para2} text`}>Consumer & Enterprise Software
</p>
            <p className={`${styles.para2} text`}>User Research & Testing
</p>
            <p className={`${styles.para2} text`}>CX, UX & Interaction Design
</p>
            <p className={`${styles.para2} text`}>UI Design
</p>
            <p className={`${styles.para2} text`}>Motion Design
</p>
            <p className={`${styles.para2} text`}>Design Systems
</p>
          </Col>
        </Row>
        <Row className='pt-5 pb-5'>
          <Col xxl={4} xl={4} lg={4}>
            <h4 className={`${styles.Heading_level_11} text-white text`}>Websites</h4>                
          </Col>
          <Col xxl={4} xl={4} lg={4}>
            <p className={`${styles.para2} text`}>Content Strategy
</p>
            <p className={`${styles.para2} text`}>Web Design
</p>
            <p className={`${styles.para2} text`}>Interactive Experiences
</p>
            <p className={`${styles.para2} text`}>Content Production
</p>
            <p className={`${styles.para2} text`}>Frontend & Backend Development
</p>
            <p className={`${styles.para2} text`}>CMS Implementation
</p>
          </Col>
        </Row>
        <Row className='pt-5 pb-5'>
          <Col xxl={4} xl={4} lg={4}>
            <h4 className={`${styles.Heading_level_11} text-white text`}>Content</h4>                
          </Col>
          <Col xxl={4} xl={4} lg={4}>
            <p className={`${styles.para2} text`}>Art Direction
</p>
            <p className={`${styles.para2} text`}>Illustration & Graphic Design</p>
            <p className={`${styles.para2} text`}>Iconography</p>
            <p className={`${styles.para2} text`}>Animation</p>
            <p className={`${styles.para2} text`}>Photo & Video</p>
            <p className={`${styles.para2} text`}>3D</p>
          </Col>
        </Row>
        <Row className='pt-5 pb-5'>
          <Col xxl={4} xl={4} lg={4}>
            <h4 className={`${styles.Heading_level_11} text-white text`}>Development</h4>                
          </Col>
          <Col xxl={4} xl={4} lg={4}>
            <p className={`${styles.para2} text`}>Technology Consulting
</p>
            <p className={`${styles.para2} text`}>Architecture Planning
</p>
            <p className={`${styles.para2} text`}>Mobile App Development
</p>
            <p className={`${styles.para2} text`}>Frontend Web Development
</p>
            <p className={`${styles.para2} text`}>Backend Development & API Integration
</p>
            <p className={`${styles.para2} text`}>Emerging Tech (AI, AR/VR, Wearables, Web3)
</p>
          </Col>
        </Row>
        <Row>
            <Col xxl={4} xl={4} lg={4}></Col>
        <Col xxl={8} xl={8} lg={8}>
                    <div className='text-start'>
                    <Link href='/' className={styles.links}>
                            <span>All services<span><svg viewBox="0 0 24 24" preserveAspectRatio="none" fill="currentColor"
                                        role="presentation" className="LinkSanity_Icon__KHh7R" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.6075 11.8572L13.255 8.40897L14.1388 7.5L19 12.5L14.1388 17.5L13.255 16.591L16.6075 13.1428H5V11.8572H16.6075Z">
                                        </path>
                                    </svg></span></span>
                            <span className={styles.bottom_border}></span>
                        </Link>
                    </div>    
                </Col>
        </Row>
      </Container>
      </section>

      <section className={`${styles.Industry} pb-130 position-relative `} >
           
      <Container className='pt-130'>
        <Row  className='pt-5 pb-5'>
          <Col xxl={7} xl={7}  lg={7}>
            <div>
                <h2 className={`${styles.Heading_level_1} text-white `}>Clients</h2>
            </div>
          </Col>
        </Row>
       
        <Row className='jsutify-content-center align-items-center'>
        {imageSources.map((src, index) => (
          <Col key={index} xs={6} md={3} xxl={3} xl={3}>
            <Image src={src} alt={`img${index + 1}`}   width={200} height={100}/>
          </Col>
        ))}
                  
        </Row>
        <Row>
        <Col xxl={12} xl={12} lg={12}>
                    <div className='text-center pt-5'>
                    <Link href='/' className={styles.links}>
                            <span>View all clients<span><svg viewBox="0 0 24 24" preserveAspectRatio="none" fill="currentColor"
                                        role="presentation" className="LinkSanity_Icon__KHh7R" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.6075 11.8572L13.255 8.40897L14.1388 7.5L19 12.5L14.1388 17.5L13.255 16.591L16.6075 13.1428H5V11.8572H16.6075Z">
                                        </path>
                                    </svg></span></span>
                            <span className={styles.bottom_border}></span>
                        </Link>
                    </div>    
                </Col>
        </Row>
      </Container>
      </section>
    </>
  );
};

export default AboutContent;
