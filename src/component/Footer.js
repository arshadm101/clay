import Link from 'next/link'
import Image from 'next/image'
import { Container,Col,Row, } from "react-bootstrap";
// import React, { useEffect, useRef } from 'react';
import Accordion from 'react-bootstrap/Accordion';
// import React, { useState } from 'react';
import styles from '../styles/Footer.module.css';
import dribble from 'public/images/dribble.svg'
import behance from 'public/images/behance.svg'
import instagram from 'public/images/instagram.svg'
import linkedin from 'public/images/linkedin.svg'
import twitter from 'public/images/twitter.svg'
import facebook from 'public/images/facebook.svg'

const Footer = () => {
    return (
        <>
          <footer className={styles.bgcolor}>
            <Container>
              <Row>
                <Col lg={6}>
                    <h1 className={styles.Heading_level_1}>Let’s Talk</h1>
                    <div>
                      <Link href='mailto:hey@clay.global' className={styles.links}>
                          <span>hey@clay.global </span>
                          <span className={styles.bottom_border}></span>
                        </Link> 
                    </div>
                </Col>
                <Col lg={2}>
                </Col>
                <Col lg={4}>
                  <div>
                      <ul className={styles.navlinksfooter1}>
                        <li>
                          <Link href='https://g.page/clayglobal?share' className={`${styles.links} mt-5`}>
                            <span className={`${styles.fonts20}  mt-5`}>Works </span>
                            <span className={styles.bottom_border}></span>
                          </Link> 
                        </li>
                        <li>
                          <Link href='https://g.page/clayglobal?share' className={`${styles.links}  mt-5`}>
                            <span className={`${styles.fonts20}  mt-5`}>Clients </span>
                            <span className={styles.bottom_border}></span>
                          </Link> 
                        </li>
                        <li className=''>
                        <Link href='https://g.page/clayglobal?share' className={`${styles.links}  mt-5`}>
                            <span className={`${styles.fonts20}   mt-5`}>Services </span>
                            <span className={styles.bottom_border}></span>
                          </Link> 
                        </li>
                        <li className=''>
                        <Link href='https://g.page/clayglobal?share' className={`${styles.links}  mt-5`}>
                            <span className={`${styles.fonts20} mt-5`}>About </span>
                            <span className={styles.bottom_border}></span>
                          </Link> 
                        </li>
                        <li className=''>
                        <Link href='https://g.page/clayglobal?share' className={`${styles.links}  mt-5`}>
                            <span className={`${styles.fonts20}  mt-5`}>Contact </span>
                            <span className={styles.bottom_border}></span>
                          </Link> 
                        </li>
                      </ul>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                <div className='pt-5'>
                      <Link href='https://g.page/clayglobal?share' className={`${styles.links} mt-5`}>
                          <span className={styles.fonts20}>300 Broadway, San Francisco, CA 94133 </span>
                          <span className={styles.bottom_border}></span>
                        </Link> 
                    </div>
                 
                </Col>
                <Col lg={2}>

                </Col>
                <Col lg={4}>
                <div className='pt-5'>
                      <ul className={styles.social}>
                        <li>
                            <Link href='/'>
                              <Image src={dribble} height={24} width={24}/>
                            </Link>
                        </li>
                        <li>
                            <Link href='/'>
                              <Image src={behance} height={24} width={24}/>
                            </Link>
                        </li>
                        <li>
                            <Link href='/'>
                              <Image src={instagram} height={24} width={24}/>
                            </Link>
                        </li>
                        <li>
                           <Link href='/'>
                              <Image src={linkedin} height={24} width={24}/>
                            </Link>
                        </li>
                        <li>
                           <Link href='/'>
                              <Image src={twitter} height={24} width={24}/>
                            </Link>
                        </li>
                        <li>
                           <Link href='/'>
                              <Image src={facebook} height={24} width={24}/>
                            </Link>
                        </li>
                      </ul>
                    </div>
                </Col>
              </Row>
              <Row>
                  <Col lg={6}>
                    <div className={styles.pt50}>
                          <ul className={styles.navlinksfooter}>
                            <li>
                              <Link href='/privacy/' className={`${styles.links} mt-5`}>
                                <span className={`${styles.fonts20} ${styles.colors}  mt-5`}>Privacy </span>
                                <span className={styles.bottom_border}></span>
                              </Link> 
                            </li>
                            <li className='px-4'>
                              <Link href='/terms/' className={`${styles.links}  mt-5`}>
                                <span className={`${styles.fonts20} ${styles.colors}  mt-5`}>Terms </span>
                                <span className={styles.bottom_border}></span>
                              </Link> 
                            </li>
                            <li className=''>
                            <Link href='/sitemap/' className={`${styles.links}  mt-5`}>
                                <span className={`${styles.fonts20} ${styles.colors}  mt-5`}>Sitemap </span>
                                <span className={styles.bottom_border}></span>
                              </Link> 
                            </li>
                          </ul>
                    </div>
                  </Col>
                  <Col lg={2}>
                  </Col>
                  <Col lg={4}>
                    <div className={styles.pt50}>
                      <p className={styles.para3}>© 2016 – 2023 Clay Global, LLC</p>
                    </div>
                  </Col>
              </Row>
            </Container>
          </footer>
        </>
    )

}

export default Footer