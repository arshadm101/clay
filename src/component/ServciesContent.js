import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from '../styles/ServciesContent.module.css';
import { Container, Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import services1 from '/public/images/services-1.webp'
import services2 from '/public/images/services-2.webp'
import services3 from '/public/images/services-3.webp'
import services4 from '/public/images/services-4.webp'
import services5 from '/public/images/services-3.webp'

import collaps1 from '/public/images/collaps1.webp'
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
// import MovingImage from '../component/MovingImage';
// import { Canvas, useFrame } from 'react-three-fiber';
// import ScrollTrigger from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

const ServciesContent = () => {
  const imageRef = useRef(null);
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);
  const imageRef4 = useRef(null);


  useEffect(() => {
  const image = imageRef.current;
  const image1 = imageRef1.current;
  const image2 = imageRef2.current;
  const image3 = imageRef3.current;
  const image4 = imageRef4.current;

gsap.set(image, { yPercent: 10});
gsap.set(image1, { yPercent: 10});
gsap.set(image2, { yPercent: 10});
gsap.set(image3, { yPercent: 10});
gsap.set(image4, { yPercent: 10});

gsap.to(image, {
  yPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: image,
    scrub: 2
  }, 
});
gsap.to(image1, {
  yPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: image1,
    scrub: 2
  }, 
});
gsap.to(image2, {
  yPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: image2,
    scrub: 2
  }, 
});
gsap.to(image3, {
  yPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: image3,
    scrub: 2
  }, 
});
gsap.to(image4, {
  yPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: image4,
    scrub: 2
  }, 
});
  
  }, []);
  
  
    
  return (
    <>
    <section className='pt-130 pb-130'>
      <Container >
        <Row >
          <Col lg={7} >
            
            <div>
            <h2 className={styles.Heading_level_1}>A full-service digital innovation partner</h2>
            <p className={styles.para}>Our rich design and technology expertise delivers top brands and digital experiences.</p>
            </div>
          </Col>
        </Row>
      </Container>
      </section>
      {/* 1 */}
      <section className={`${styles.relativesec} pt-130 pb-130`}>
        <Container>
            <Row>
                <Col lg={6}>
                    <h2 className={styles.Heading_level_1}>Branding</h2>
                    <p className={styles.para2}>
    At the core of our approach, we maintain that brand and UX are closely connected and work together. Our team specializes in creating and representing digital brand identities across channels, providing strategy assistance and guidelines to ensure consistency.
                    </p>
                    <div>
                        <ul className={styles.listtype}>
                            <li>Brand Strategy</li>
                            <li>Brand Architecture</li>
                            <li>Visual Identity</li>
                            <li>Brand Guidelines</li>
                            <li>Brand Experiences</li>
                        </ul>
                    </div>
                </Col>
                <Col lg={6}>
                        <div className='position-relative'>
                            <div className={styles.Bannerback}>
                                <div className={styles.hidedive}>
          <video className={`${styles.VidMss}`} width={600} height={600} autoPlay muted loop src="/squares.mp4" type="video/mp4"></video>

                                </div>
                            </div>
                            <div className={`${styles.absoluteBanner} p-5`}>
                                <Image src={services1} className='ps-5'  alt="Image" ref={imageRef} /> 
                            </div>
                        </div>

                </Col>
            </Row>
        </Container>
      </section>
      {/* 2 */}
      <section className={`${styles.relativesec} pt-130 pb-130`}>
        <Container>
            <Row>
                <Col lg={6}>
                        <div className='position-relative'>
                            <div className={styles.Bannerback}>
                                <div className={styles.hidedive}>
                                    {/* <Image src={collaps1} alt="Image" /> */}
                                    <video className={`${styles.VidMss1}`} width={600} height={600} autoPlay muted loop src="/sphere.mp4" type="video/mp4"></video>
                                </div>
                            </div>
                            <div className={`${styles.absoluteBanner} p-5`}>
                                <Image src={services2}  alt="Image"  ref={imageRef1} /> 
                            </div>
                        </div>

                </Col>
                <Col lg={6}>
                    <h2 className={styles.Heading_level_1}>Digital Products
</h2>
                    <p className={styles.para2}>
                    At Clay, we believe everyone deserves an exceptional user experience, whether using a product at work or in their free time. We create memorable enterprise and consumer products as well as provide comprehensive design systems for effortless product iteration.


                    </p>
                    <div>
                        <ul className={styles.listtype}>
                            <li>Consumer & Enterprise Software</li>
                            <li>User Research & Testing</li>
                            <li>CX, UX & Interaction Design</li>
                            <li>UI Design</li>
                            <li>Motion Design</li>
                            <li>Design Systems</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
      {/* 3 */}
      <section className={`${styles.relativesec} pt-130 pb-130`}>
        <Container>
            <Row>
                <Col lg={6}>
                    <h2 className={styles.Heading_level_1}>Websites</h2>
                    <p className={styles.para2}>
                    A website is the most important channel to showcase your brand to customers. Our portfolio features award-winning websites designed to give users the best experience possible while also meeting business goals.


                    </p>
                    <div>
                        <ul className={styles.listtype}>
                            <li>Content Strategy</li>
                            <li>Web Design</li>
                            <li>Interactive Experiences</li>
                            <li>Content Production</li>
                            <li>Frontend & Backend Development</li>
                            <li>CMS Implementation</li>
                        </ul>
                    </div>
                </Col>
                <Col lg={6}>
                        <div className='position-relative'>
                            <div className={styles.Bannerback}>
                                <div className={styles.hidedive}>
                                    {/* <Image src={collaps1} alt="Image" /> */}
                                    <video className={`${styles.VidMss}`} width={600} height={600} autoPlay muted loop src="/cones.mp4" type="video/mp4"></video>

                                </div>
                            </div>
                            <div className={`${styles.absoluteBanner} p-5`}>
                                <Image src={services3}  alt="Image"  ref={imageRef3} /> 
                            </div>
                        </div>

                </Col>
            </Row>
        </Container>
      </section>
      {/* 4 */}
      <section className={`${styles.relativesec} pt-130 pb-130`}>
        <Container>
            <Row>
                <Col lg={6}>
                        <div className='position-relative'>
                            <div className={styles.Bannerback}>
                                <div className={styles.hidedive}>
                                    {/* <Image src={collaps1} alt="Image" /> */}
                                    <video className={`${styles.VidMss}`} width={600} height={600} autoPlay muted loop src="/semidonut.mp4" type="video/mp4"></video>

                                </div>
                            </div>
                            <div className={`${styles.absoluteBanner} p-5`}>
                                <Image src={services4}  alt="Image"  ref={imageRef3} /> 
                            </div>
                        </div>

                </Col>
                <Col lg={6}>
                    <h2 className={styles.Heading_level_1}>Content
</h2>
                    <p className={styles.para2}>
                    Authentic content is essential in the digital world. We work with brands to identify their unique content needs and deliver custom-made assets at the highest quality, down to the last detail.


                    </p>
                    <div>
                        <ul className={styles.listtype}>
                            <li>Art Direction</li>
                            <li>Illustration & Graphic Design</li>
                            <li>Iconography</li>
                            <li>Animation</li>
                            <li>Photo & Video</li>
                            <li>3D</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
      {/* 4 */}
      <section className={`${styles.relativesec} pt-130 pb-130`}>
        <Container>
            <Row>
                <Col lg={6}>
                        <div className='position-relative'>
                            <div className={styles.Bannerback}>
                                <div className={styles.hidedive}>
                                    {/* <Image src={collaps1} alt="Image" /> */}
                                    <video className={`${styles.VidMss}`} width={600} height={600} autoPlay muted loop src="/plannar.mp4" type="video/mp4"></video>
                                </div>
                            </div>
                            <div className={`${styles.absoluteBanner} p-5`}>
                                <Image src={services5}   alt="Image" ref={imageRef3} /> 
                            </div>
                        </div>

                </Col>
                <Col lg={6}>
                    <h2 className={styles.Heading_level_1}>Development
</h2>
                    <p className={styles.para2}>
                    Our designers and developers collaborate to create websites and products that provide exceptional user experiences and functionality. We optimize search engine visibility, ensure accessibility, and maximize performance.


                    </p>
                    <div>
                        <ul className={styles.listtype}>
                            <li>Technology Consulting</li>
                            <li>Architecture Planning</li>
                            <li>Mobile App Development</li>
                            <li>Frontend Web Development</li>
                            <li>Backend Development & API Integration</li>
                            <li>Emerging Tech (AI, AR/VR, Wearables, Web3)</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
      {/* 5 */}


      <section className={`${styles.Industry} pt-130 pb-130`} >
      <Container>
        <Row  className={` pt-5 pb-5`}>
          <Col lg={7}>
            <div>
            <h2 className={`${styles.Heading_level_1} text-white`}>Industries</h2>
            <p className={`${styles.para} text-white`}>We unite with big brands and startups in various industries to create award-winning work. experiences.</p>
            
            </div>
          </Col>
        </Row>
        <Row className={`${styles.Industries} pt-5 pb-5`}>
          <Col lg={4}>
            <h4 className={`${styles.Heading_level_11} text-white`}>Fintech</h4>                
          </Col>
          <Col lg={8}>
            <p className={`${styles.para2}`}>Discover, Stripe, CreditKarma, STC Bank, MoneyLion, Marqeta, Quicken, Lulo Bank, Earnin, Fundbox, StreetBeat, Q2</p>
          </Col>
        </Row>
        <Row className={`${styles.Industries} pt-5 pb-5`}>
          <Col lg={4}>
            <h4 className={`${styles.Heading_level_11} text-white`}>B2B & Enterprise Software
</h4>                
          </Col>
          <Col lg={8}>
            <p className={`${styles.para2}`}>Slack, ADP, VMware, Okta, Splunk, Nutanix, Zenefits, Comscore, Papaya, TeamViewer, Cornerstone, WorkBoard, AppDynamics</p>
          </Col>
        </Row>
        <Row className={`${styles.Industries} pt-5 pb-5`}>
          <Col lg={4}>
            <h4 className={`${styles.Heading_level_11} text-white`}>Crypto & Web3</h4>                
          </Col>
          <Col lg={8}>
            <p className={`${styles.para2}`}>Coinbase, MEXC, DFINITY, Ndax, Aurox, Alliance Block</p>
          </Col>
        </Row>
        <Row className={`${styles.Industries} pt-5 pb-5`}>
          <Col lg={4}>
            <h4 className={`${styles.Heading_level_11} text-white`}>Technology</h4>                
          </Col>
          <Col lg={8}>
            <p className={`${styles.para2}`}>Google, Amazon, Snapchat, Facebook, Cisco, Speedtest.net</p>
          </Col>
        </Row>
        <Row className={`${styles.Industries} pt-5 pb-5`}>
          <Col lg={4}>
            <h4 className={`${styles.Heading_level_11} text-white`}>Ecommerce & Fashiontech</h4>                
          </Col>
          <Col lg={8}>
            <p className={`${styles.para2}`}>Serena & Lily, California Closets, L’Oreal, Mercari</p>
          </Col>
        </Row>
        <Row className={`${styles.Industries} pt-5 pb-5`}>
          <Col lg={4}>
            <h4 className={`${styles.Heading_level_11} text-white`}>Electronics
</h4>                
          </Col>
          <Col lg={8}>
            <p className={`${styles.para2}`}>Sony, Sandisk, Western Digital, Oppo, Corsair, Samsung, XGIMI, Fossi</p>
          </Col>
        </Row>
        <Row className={`${styles.Industries} pt-5 pb-5`}>
          <Col lg={4}>
            <h4 className={`${styles.Heading_level_11} text-white`}>Food & Beverage
</h4>                
          </Col>
          <Col lg={8}>
            <p className={`${styles.para2}`}>Coca-Cola, IMPOSSIBLE, Joe & The Juice, JOKR, Reyes Holdings</p>
          </Col>
        </Row>
        <Row className={`${styles.Industries} pt-5 pb-5`}>
          <Col lg={4}>
            <h4 className={`${styles.Heading_level_11} text-white`}>Startups & VC
</h4>                
          </Col>
          <Col lg={8}>
            <p className={`${styles.para2}`}>Medidata, Medable, Hint, Endpoint, Neurolign, Quartzy</p>
          </Col>
        </Row>
        <Row className={`${styles.Industries} pt-5 pb-5`}>
          <Col lg={4}>
            <h4 className={`${styles.Heading_level_11} text-white`}>Telecommunications</h4>                
          </Col>
          <Col lg={8}>
            <p className={`${styles.para2}`}>T-Mobile, C-Spire, Huawei</p>
          </Col>
        </Row>
        <Row className={`${styles.Industries} pt-5 pb-5`}>
          <Col lg={4}>
            <h4 className={`${styles.Heading_level_11} text-white`}>Mobility
</h4>                
          </Col>
          <Col lg={8}>
            <p className={`${styles.para2}`}>Uber, Toyota, Nauto</p>
          </Col>
        </Row>
        <Row className={`${styles.Industries} pt-5 pb-5`}>
          <Col lg={4}>
            <h4 className={`${styles.Heading_level_11} text-white`}>Logistics
</h4>                
          </Col>
          <Col lg={8}>
            <p className={`${styles.para2}`}>UPS, Interos, Martin Brower</p>
          </Col>
        </Row>
      </Container>
      </section>
    </>
  );
};

export default ServciesContent;
