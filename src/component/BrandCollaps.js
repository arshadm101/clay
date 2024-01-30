import next from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Container,Col,Row, } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import React, { useState, useEffect, useRef } from 'react';
import Styles from '../styles/BrandCollaps.module.css';
// import React, { useEffect, useRef } from 'react';
import colappse1 from '/public/images/collaps1.webp';
import colappse2 from '/public/images/collaps2.webp';
import colappse3 from '/public/images/collaps3.webp';
import colappse5 from '/public/images/collaps5.webp';

const images = [colappse1, colappse2, colappse3, colappse5]; // Define your image sources here
const imageDescriptions = ['Image1 Description', 'Image2 Description', 'Image3 Description', 'Image4 Description'];

function BrandCollaps() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClick = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const handleHover = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const handleTabClick = (tabIndex) => {
    setCurrentImageIndex(tabIndex);
  };
  const currentImage = images[currentImageIndex];
  const currentImageDescription = imageDescriptions[currentImageIndex];
    
    return (
        <>
            <section className='pt-130 pb-65'>
                    <Container>
                        <Row>
                            <Col xxl={6} xl={6} lg={6}>
                                <h4 className='h4-font'>Based in San Francisco, we strengthen brands through exceptional digital experiences for companies worldwide.</h4>
                            </Col>
                            <Col xxl={2} xl={2} lg={2}>
                                <div>
<Image src={currentImage} alt={currentImageDescription} width={400} height={400} onError={(e) => { console.error('Image load error:', e);}} />
                                </div>
                            </Col>
                            <Col xxl={4} xl={4} lg={4} className='brands'>
                                <Accordion flush>
                                    <Accordion.Item eventKey='0'>
                                        <Accordion.Header  onMouseEnter={handleHover}  onMouseLeave={handleHover} onClick={() => handleTabClick(0)}>Branding</Accordion.Header>
                                            <Accordion.Body>
                                                <p>
                                                    A brand is more than just a logo and color palette. We will craft a distinct visual and verbal identity, create necessary assets, and establish clear brand guidelines to maintain consistency across all touchpoints. </p>
                                            </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey='1'>
                                            <Accordion.Header  onMouseEnter={handleHover}  onMouseLeave={handleHover} onClick={() => handleTabClick(1)}>Digital Products</Accordion.Header>
                                            <Accordion.Body>
                                                <p>
                                                    Clay concentrates on designing authentic connections through the use of both aesthetics and behavioral science. Our team of senior UI/UX designers delivers engaging digital products that help brands thrive in the modern economy.</p>
                                            </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey='2' onMouseEnter={handleHover}  onMouseLeave={handleHover} onClick={() => handleTabClick(2)}>
                                            <Accordion.Header>Websites</Accordion.Header>
                                            <Accordion.Body>
                                                <p>A modern brand is defined by its digital presence, starting with the website. We focus on creating websites that effectively convey the brands identity and perspective for an enhanced user experience.</p>
                                            </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey='3' onMouseEnter={handleHover}  onMouseLeave={handleHover} onClick={() => handleTabClick(3)}>
                                            <Accordion.Header>Development</Accordion.Header>
                                            <Accordion.Body>
                                                <p>  Our web developers are committed to achieving both visual and performance excellence. From the backend to the frontend, we prioritize delivering a seamless and enjoyable user experience on all devices.
                                                </p>
                                            </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey='4' onMouseEnter={handleHover}  onMouseLeave={handleHover} onClick={() => handleTabClick(4)}>
                                            <Accordion.Header>Content</Accordion.Header>
                                            <Accordion.Body>
                                                <p>
                                                    Content is a crucial aspect of the user experience, and we offer a range of services to support this, including copywriting, illustration, 2D and 3D graphics, iconography, animation, video production, and photography.
                                                </p>
                                            </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                        </Row>
                    </Container>
                </section>
        </>
   )
}
export default BrandCollaps