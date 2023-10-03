import Link from 'next/link';
import Image from 'next/image';
import { Container, Col, Row } from 'react-bootstrap';
import React, { useRef, useEffect } from 'react';
import styles from '../styles/CalltoAction.module.css'


const CalltoAction = () => {
   
return (
      <>
        <section className={`${styles.sectionback} pt-130 pb-100`}>
            <Container>
                <Row>
                    <Col lg={7}>
                    <h2 className={`${styles.Heading_level_1}`}>We transform companies through design innovation
                    </h2>
                    <h4 className={`${styles.para2} text`}>A full-service creative agency designing and building inventive
                        digital experiences across all platforms and brand touchpoints.
                    </h4>
                    <div className='text-left mt-5'>
                        <Link href='' className={styles.links}>
                        <span>View our services<span><svg viewBox="0 0 24 24" preserveAspectRatio="none" fill="currentColor"
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