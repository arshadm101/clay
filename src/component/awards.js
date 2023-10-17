import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from '../styles/Awards.module.css';
import { Container, Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Webby from 'public/images/webby.svg'
import Apple from 'public/images/apple.svg'
import Site from 'public/images/site.svg'
import AwardsS from 'public/images/awards.svg'
import CA from 'public/images/ca.svg'
import fWD from 'public/images/fwa.svg'

gsap.registerPlugin(ScrollTrigger);

const Awards = () => {
  
  const paraTitleRefs = useRef([]);

    useEffect(() => {



      
        paraTitleRefs.current.forEach((el, i) => {
          const tl = gsap.timeline({ paused: true });
    
          tl.from(el.querySelector('.HiddenDiv'), { autoAlpha: 0, duration: 0.5 }, 'Sametime');
          tl.staggerFrom(el.querySelectorAll('.HiddenDiv > .ParaTitle'), 0.5, {
            x: '30%',
            opacity: 0,
            ease: 'sine.inOut',
          }, 0.05, 'Sametime');
    
          el.animation = tl;
    
          el.addEventListener('mouseenter', () => {
            el.animation.play();
          });
    
          el.addEventListener('mouseleave', () => {
            el.animation.reverse();
          });
        });

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


        
      }, []);

  return (
    <>  
    
      <section className={`${styles.Industry} pb-130 position-relative`} >
        <Container className='pt-130'>
          <Row  className='pt-5 pb-5'>
            <Col lg={7}>
              <div>
                  <h2 className={`${styles.Heading_level_1} text-white `}>Awards</h2>
              </div>
            </Col>
          </Row>
          <Row className='jsutify-content-center align-items-center'>
            <Col>
            <div className={styles.AnimationDiv}>
                <div className={styles.visibleDiv}>
                  <Image src={Webby} width={200} height={100} className={styles.Img}/>
                </div>
                <div className={styles.HiddenDiv}>
                    <h4 className={`${styles.ParaTitle}`} ref={(el) => (paraTitleRefs.current[0] = el)}>
                       Best Agency Portfolio Nomination
                    </h4>
                </div>
              </div>
            </Col>
            <Col>
            <div className={styles.AnimationDiv}>
                <div className={styles.visibleDiv}>
                  <Image src={Apple} width={200} height={100} className={styles.Img}/>
                </div>
                <div className={styles.HiddenDiv}>
                    <h4 className={`${styles.ParaTitle}`} ref={(el) => (paraTitleRefs.current[1] = el)}>
                    Best New Apps <br/>
App Store Editors` Choice<br/>
Keynote Mentions<br/>
Ad Highlights
                    </h4>
                </div>
              </div>
            </Col>
            <Col>
            <div className={styles.AnimationDiv}>
                <div className={styles.visibleDiv}>
                  <Image src={Site} width={200} height={100} className={styles.Img}/>
                </div>
                <div className={styles.HiddenDiv}>
                    <h4 className={`${styles.ParaTitle}`} ref={(el) => (paraTitleRefs.current[2] = el)}>
                      Site of the day
                    </h4>
                </div>
              </div>
            </Col>
            <Col>
            <div className={styles.AnimationDiv}>
                <div className={styles.visibleDiv}>
                  <Image src={AwardsS} width={200} height={100} className={styles.Img}/>
                </div>
                <div className={styles.HiddenDiv}>
                    <h4 className={`${styles.ParaTitle}`} ref={(el) => (paraTitleRefs.current[3] = el)}>
                      Site of the day
                    </h4>
                </div>
              </div>
            </Col>
            <Col>
            <div className={styles.AnimationDiv}>
                <div className={styles.visibleDiv}>
                  <Image src={CA} width={200} height={100} className={styles.Img}/>
                </div>
                <div className={styles.HiddenDiv}>
                    <h4 className={`${styles.ParaTitle}`} ref={(el) => (paraTitleRefs.current[4] = el)}>
                       Webpick of the Day
                    </h4>
                </div>
              </div>
            </Col>
            <Col>
            <div className={styles.AnimationDiv}>
                <div className={styles.visibleDiv}>
                  <Image src={fWD} width={200} height={100} className={styles.Img}/>
                </div>
                <div className={styles.HiddenDiv}>
                    <h4 className={`${styles.ParaTitle}`} ref={(el) => (paraTitleRefs.current[5] = el)}>
                      Webpick of the Day
                    </h4>
                </div>
              </div>
            </Col>

            {/* {imageSources.map((src, index) => (
              <Col key={index} xs={6} md={2}>
                <Image src={src} alt={`img${index + 1}`}   width={200} height={100}/>
              </Col>
            ))}       */}
          </Row>
       
        </Container>
      </section>
    </>
  );
};

export default Awards;
