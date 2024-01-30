// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
import styles from '../styles/contact.module.css';
import { Container, Col, Row } from 'react-bootstrap';
import Link from 'next/link';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import dribble from 'public/images/dribble.svg'
import behance from 'public/images/behance.svg'
import instagram from 'public/images/instagram.svg'
import linkedin from 'public/images/linkedin.svg'
import twitter from 'public/images/twitter.svg'
import facebook from 'public/images/facebook.svg'
import Contact from '/public/images/contact.webp'
// import Animation from '@/component/animation'


const CleientsLogo = () => {
    return (
        <>
          <section className={`${styles.bgcolor} pt-130 pb-130`}>
            <Container className="pb-130">
              <Row>
                <Col xxl={7} xl={7} lg={7}>
                    <h1 className={styles.Heading_level_1}>Lets Talk</h1>
                    <p className={styles.para}>We would love to learn more about you and <br/> what we can design and build together.</p>
                    <Row>
                      <Col xxl={6} xl={6} lg={6}>
                            <div className="pt-5">
                                <h4 className={styles.titlePara}>Become a Client</h4>
                                <Link href="mailto:hey@clay.global" className={styles.links}>
                                    <span>hey@clay.global </span>
                                    <span className={styles.bottom_border}></span>
                                 </Link> 
                            </div>
                       <div className="pt-5">
                      <Link href="/" className={`${styles.links} mt-5`}>
                          <span className={styles.fonts20}>300 Broadway, San Francisco, CA 94133 </span>
                          <span className={styles.bottom_border}></span>
                        </Link> 
                    </div>
                      </Col>  
                      <Col xxl={6} xl={6} lg={6}>
                        <div className="pt-5">
                            <h4 className={styles.titlePara}>Become a Client</h4>
                            <Link href="mailto:hey@clay.global" className={styles.links}>
                                <span>hey@clay.global </span>
                                <span className={styles.bottom_border}></span>
                             </Link> 
                        </div>
                        <div className={styles.pt50}>
                          <ul className={styles.navlinksfooter}>
                            <li>
                              <Link href="/privacy/" className={`${styles.links} mt-5`}>
                                <span className={`${styles.fonts20} ${styles.colors}  mt-5`}>Privacy </span>
                                <span className={styles.bottom_border}></span>
                              </Link> 
                            </li>
                            <li className="px-4">
                              <Link href="/terms/" className={`${styles.links}  mt-5`}>
                                <span className={`${styles.fonts20} ${styles.colors}  mt-5`}>Terms </span>
                                <span className={styles.bottom_border}></span>
                              </Link> 
                            </li>
                            <li className="text">
                            <Link href="/sitemap/" className={`${styles.links}  mt-5`}>
                                <span className={`${styles.fonts20} ${styles.colors}  mt-5`}>Sitemap </span>
                                <span className={styles.bottom_border}></span>
                              </Link> 
                            </li>
                          </ul>
                        </div>
                        </Col>  
                    </Row>
                    <Row>
                        <Col xxl={12} xl={12} lg={12}>
                        <div className='pt-5'>
                      <ul className={styles.social}>
                        <li>
                            <Link href="/">
                              <Image src={dribble} height={24} width={24} alt="slide"  />
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                              <Image src={behance} height={24} width={24} alt="slide"/>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                              <Image src={instagram} height={24} width={24} alt="slide"/>
                            </Link>
                        </li>
                        <li>
                           <Link href="/">
                              <Image src={linkedin} height={24} width={24} alt="slide"/>
                            </Link>
                        </li>
                        <li>
                           <Link href="/">
                              <Image src={twitter} height={24} width={24} alt="slide"/>
                            </Link>
                        </li>
                        <li>
                           <Link href="/">
                              <Image src={facebook} height={24} width={24} alt="slide"/>
                            </Link>
                        </li>
                      </ul>
                    </div>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={5} xl={5} lg={5}>
                    <Image src={Contact} alt="Image"  />
                </Col>
              </Row> 
            </Container>
          </section>
        </>
   );
};
export default CleientsLogo