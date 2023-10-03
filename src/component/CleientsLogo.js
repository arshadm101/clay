import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Styles from '../styles/CleientsLogo.module.css';

const logos = [
  '../images/logo1.svg',
  '../images/logo2.svg',
  '../images/logo3.svg',
  '../images/logo4.svg',
  '../images/logo5.svg',
  '../images/logo6.svg',
  '../images/logo7.svg',
  '../images/logo8.svg',
  '../images/logo9.svg',
  '../images/logo10.svg',
  '../images/logo11.svg',
  '../images/logo12.svg',
];

const CleientsLogo = () => {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000); // Change logos every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className={Styles.CleientsLogo}>
        <Container>
          <Row>
            {Array.from({ length: 5 }).map((_, index) => (
              <Col key={index}>
                <div className={` ${Styles.logos} ${index === 0 ? Styles.fadeIn : ''}`}>
                  <Image
                    src={logos[(currentLogoIndex + index) % logos.length]}
                    alt={`Random Logo ${index + 1}`}
                    className={Styles.logo}
                    width={200} height={100}
                  />
                </div>
              </Col>
            ))}
          </Row>
          <Row>
            {Array.from({ length: 5 }).map((_, index) => (
              <Col key={index}>
                <div className={` ${Styles.logos} ${index === 0 ? Styles.fadeIn : ''}`}>
                  <Image
                    src={logos[(currentLogoIndex + index) % logos.length]}
                    alt={`Random Logo ${index + 1}`}
                    className={Styles.logo}
                    width={200} height={100}
                  />
                </div>
              </Col>
            ))}
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
      </section>
    </>
  );
};

export default CleientsLogo;
