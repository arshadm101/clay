import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from '../styles/ImageHover.module.css';
import { Container, Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const ImageHover = () => {
  const cursorRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {

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

    const cursor = cursorRef.current;
    const links = document.querySelectorAll('.hover-link');
    const scrolltxt = document.querySelectorAll('.scrolltxt');

   
    if (!cursor) {
      return;
    }

    links.forEach((link, index) => {
      const image = imageRefs.current[index];

      link.addEventListener('mousemove', (e) => {
        const rect = link.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        gsap.to(image, {
          x: offsetX,
          y: offsetY,
          duration: 0.2,
          transformOrigin: 'center center',
          ease: 'power2.out',
        });

        cursor?.style && gsap.to(cursor, {
          x: e.clientX - (cursor.offsetWidth / 2 || 0),
          y: e.clientY - (cursor.offsetHeight / 2 || 0),
          duration: 0.2,
        });
      });
      link.addEventListener('mouseleave', () => {
        gsap.to(image, {
          x: 0,
          y: 0,
          duration: 0.2,
          transformOrigin: 'top center',
        });
        cursor?.style && gsap.to(cursor, {
          x: 0,
          y: 0,
          duration: 0.2,
        });
      });
    });

    
  }, []);

  return (
    <>
      <Container >
        <Row className='pt-130 pb-65 text-container'>
          <Col lg={6} >
            
            <div>
            <h2 className={styles.Heading_level_1}>Clients</h2>
            <p className={styles.para}>We've partnered with forward-thinking companies, from innovative startups to Fortune 100 corporations.</p>
            </div>

          </Col>
        </Row>
        
        <Row>
        <Col lg={4}>
            <Link href="#" className="hover-link text">
              <div className={styles.linkover}>
                <h4 className={styles.linkTitle}>Meta</h4>
                <p className={styles.linkPara}>Strategy, web design, and development for Facebook’s new internet technology.</p>
              </div>
              <div>
                <img src="../images/marqeta.webp" alt="Image 1" ref={(el) => (imageRefs.current[0] = el)} className="hover-image" />
              </div>
            </Link>
          </Col>
          <Col lg={4}>
            <Link href="#" className="hover-link text">
              <div className={styles.linkover}>
                <h4 className={styles.linkTitle}>Google</h4>
                <p className={styles.linkPara}>User experience and interaction design for Project Jacquard.</p>
              </div>
              <div>
                <img src="../images/marqeta.webp" alt="Image 1" ref={(el) => (imageRefs.current[1] = el)} className="hover-image" />
              </div>
            </Link>
          </Col>
          <Col lg={4}>

            <Link href="#" className="hover-link text">
              <div className={styles.linkover}>
                <h4 className={styles.linkTitle}>Slack</h4>
                <p className={styles.linkPara}>Web design and development partnership with Slack’s marketing team.</p>
              </div>
              <div>
                <img src="../images/marqeta.webp" alt="Image 1" ref={(el) => (imageRefs.current[2] = el)} className="hover-image" />
              </div>
            </Link>
      
          </Col>
          <Col lg={4}>
          
            <Link href="#" className="hover-link text">
              <div className={styles.linkover}>
                <h4 className={styles.linkTitle}>Snapchat
</h4>
                <p className={styles.linkPara}>UX design for Snapchat's augmented reality shopping experience.

</p>
              </div>
              <div>
                <img src="../images/marqeta.webp" alt="Image 1" ref={(el) => (imageRefs.current[3] = el)} className="hover-image" />
              </div>
            </Link>
        
          </Col>
          <Col lg={4}>
          
            <Link href="#" className="hover-link text">
              <div className={styles.linkover}>
                <h4 className={styles.linkTitle}>Credit Karma
</h4>
                <p className={styles.linkPara}>Digital product design partnership on building new enterprise tools.

</p>
              </div>
              <div>
                <img src="../images/marqeta.webp" alt="Image 1" ref={(el) => (imageRefs.current[4] = el)} className="hover-image" />
              </div>
            </Link>
        
          </Col>
          <Col lg={4}>
          
            <Link href="#" className="hover-link text">
              <div className={styles.linkover}>
                <h4 className={styles.linkTitle}>Discover
</h4>
                <p className={styles.linkPara}>Iterative UX and UI design for Discover's mobile apps.

</p>
              </div>
              <div>
                <img src="../images/marqeta.webp" alt="Image 1" ref={(el) => (imageRefs.current[5] = el)} className="hover-image" />
              </div>
            </Link>
      
          </Col>
          <Col lg={4}>
          
            <Link href="#" className="hover-link text">
              <div className={styles.linkover}>
                <h4 className={styles.linkTitle}>Coinbase</h4>
              <p className={styles.linkPara}>Mobile UX and UI design for a top digital currency platform.</p>
              </div>
              <div>
                <img src="../images/marqeta.webp" alt="Image 1" ref={(el) => (imageRefs.current[6] = el)} className="hover-image" />
              </div>
            </Link>
        
          </Col>
          <Col lg={4}>
          
            <Link href="#" className="hover-link text">
              <div className={styles.linkover}>
                <h4 className={styles.linkTitle}>Amazon
</h4>
                <p className={styles.linkPara}>Product design collaboration with Amazon’s innovation teams. Confidential.

</p>
              </div>
              <div>
                <img src="../images/marqeta.webp" alt="Image 1" ref={(el) => (imageRefs.current[7] = el)} className="hover-image" />
              </div>
            </Link>
        
          </Col>
          <Col lg={4}>
          
            <Link href="#" className="hover-link text">
              <div className={styles.linkover}>
            <h4 className={styles.linkTitle}>Stripe</h4>
            <p className={styles.linkPara}>Marketing web design collaboration with Stripe’s internal teams.</p>
              </div>
              <div>
                <img src="../images/marqeta.webp" alt="Image 1" ref={(el) => (imageRefs.current[8] = el)} className="hover-image" />
              </div>
            </Link>
        
          </Col>
          <Col lg={4}>
          
            <Link href="#" className="hover-link text">
              <div className={styles.linkover}>
                <h4 className={styles.linkTitle}>UPS</h4>
                <p className={styles.linkPara}>Strategy, web design, and development for a new warehouse platform.

</p>
              </div>
              <div>
                <img src="../images/marqeta.webp" alt="Image 1" ref={(el) => (imageRefs.current[9] = el)} className="hover-image" />
              </div>
            </Link>
        
          </Col>
          <Col lg={4}>
          
            <Link href="#" className="hover-link text">
              <div className={styles.linkover}>
                <h4 className={styles.linkTitle}>Cisco</h4>
                <p className={styles.linkPara}>Web design, content, and development for Meraki Go.


</p>
              </div>
              <div>
                <img src="../images/marqeta.webp" alt="Image 1" ref={(el) => (imageRefs.current[10] = el)} className="hover-image" />
              </div>
            </Link>
        
          </Col>
          <Col lg={4}>
            
            <Link href="#" className="hover-link text">
              <div className={styles.linkover}>
                <h4 className={styles.linkTitle}>Marqeta</h4>
                <p className={styles.linkPara}>An interactive marketing site for a modern card issuing company.
</p>
              </div>
              <div>
                <img src="../images/marqeta.webp" alt="Image 1" ref={(el) => (imageRefs.current[11] = el)} className="hover-image" />
              </div>
            </Link>
        
          </Col>
          <Col lg={4}>
          
            <Link href="#" className="hover-link text">
              <div className={styles.linkover}>
                <h4 className={styles.linkTitle}>Coca-Cola</h4>
                <p className={styles.linkPara}>UI/UX design and branding for a customer loyality app by Coca-Cola Mexico.</p>
              </div>
              <div>
                <img src="../images/marqeta.webp" alt="Image 1" ref={(el) => (imageRefs.current[12] = el)} className="hover-image" />
              </div>
            </Link>
        
          </Col>
          <Col lg={4}>
          
            <Link href="#" className="hover-link text">
              <div className={styles.linkover}>
                <h4 className={styles.linkTitle}>Fossil</h4>
                <p className={styles.linkPara}>Mobile app design and design guidelines for a new generation smart watch.</p>
              </div>
              <div>
                <img src="../images/marqeta.webp" alt="Image 1" ref={(el) => (imageRefs.current[13] = el)} className="hover-image" />
              </div>
            </Link>
        
          </Col>
          <Col lg={4}>
          
            <Link href="#" className="hover-link text">
              <div className={styles.linkover}>
                <h4 className={styles.linkTitle}>Zenefits</h4>
          <p className={styles.linkPara}>Marketing websites and UX design for an HCM software platform.</p>
              </div>
              <div>
                <img src="../images/marqeta.webp" alt="Image 1" ref={(el) => (imageRefs.current[14] = el)} className="hover-image" />
              </div>
            </Link>
        
          </Col>
          <Col lg={4}>
          
            <Link href="#" className="hover-link text">
              <div className={styles.linkover}>
                <h4 className={styles.linkTitle}>STC Bank
</h4>
          <p className={styles.linkPara}>Designing a consumer and business app and website ecosystem for the largest digital bank in Saudi Arabia.</p>
              </div>
              <div>
                <img src="../images/marqeta.webp" alt="Image 1" ref={(el) => (imageRefs.current[15] = el)} className="hover-image" />
              </div>
            </Link>
        
          </Col>
          <Col lg={4}>
          
            <Link href="#" className="hover-link text">
              <div className={styles.linkover}>
                <h4 className={styles.linkTitle}>Impossible</h4>
       <p className={styles.linkPara}>Supporting a plant-based meat brand with their Earth Day campaign.</p>
              </div>
              <div>
                <img src="../images/marqeta.webp" alt="Image 1" ref={(el) => (imageRefs.current[16] = el)} className="hover-image" />
              </div>
            </Link>
        
          </Col>
          <Col lg={4}>
          
            <Link href="#" className="hover-link text">
              <div className={styles.linkover}>
                <h4 className={styles.linkTitle}>AppDynamics</h4>
      <p className={styles.linkPara}>Web design and guidelines for Cisco's business observability software.</p>
              </div>
              <div>
                <img src="../images/marqeta.webp" alt="Image 1" ref={(el) => (imageRefs.current[17] = el)} className="hover-image" />
              </div>
            </Link>
        
          </Col>
          <Col lg={4}>
          
            <Link href="#" className="hover-link text">
              <div className={styles.linkover}>
                <h4 className={styles.linkTitle}>Sony</h4>
          <p className={styles.linkPara}>Android app design and development for Sony Xperia.</p>
              </div>
              <div>
                <img src="../images/marqeta.webp" alt="Image 1" ref={(el) => (imageRefs.current[18] = el)} className="hover-image" />
              </div>
            </Link>
        
          </Col>
          <Col lg={4}>
          
            <Link href="#" className="hover-link text">
              <div className={styles.linkover}>
                <h4 className={styles.linkTitle}>T-Mobile</h4>
          <p className={styles.linkPara}>UX and visual design for T‑Mobile’s customer mobile apps.</p>
              </div>
              <div>
                <img src="../images/marqeta.webp" alt="Image 1" ref={(el) => (imageRefs.current[19] = el)} className="hover-image" />
              </div>
            </Link>
        
          </Col>
          <Col lg={4}>
          
            <Link href="#" className="hover-link text">
              <div className={styles.linkover}>
                <h4 className={styles.linkTitle}>VMware</h4>
      <p className={styles.linkPara}>Visual design exploration for Clarity, an open-source design system.</p>
              </div>
              <div>
                <img src="../images/marqeta.webp" alt="Image 1" ref={(el) => (imageRefs.current[20] = el)} className="hover-image" />
              </div>
            </Link>
        
          </Col>
          <Col lg={4}>
          
            <Link href="#" className="hover-link text">
              <div className={styles.linkover}>
                <h4 className={styles.linkTitle}>Joe & The Juice</h4>
          <p className={styles.linkPara}>Branding and UI/UX design for Joe’s new mobile app and ordering experience.</p>
              </div>
              <div>
                <img src="../images/marqeta.webp" alt="Image 1" ref={(el) => (imageRefs.current[21] = el)} className="hover-image" />
              </div>
            </Link>
        
          </Col>
          <Col lg={4}>
          
            <Link href="#" className="hover-link text">
              <div className={styles.linkover}>
                <h4 className={styles.linkTitle}>Uber</h4>
          <p className={styles.linkPara}>Branding, web design, and marketing assets.</p>
              </div>
              <div>
                <img src="../images/marqeta.webp" alt="Image 1" ref={(el) => (imageRefs.current[22] = el)} className="hover-image" />
              </div>
            </Link>
        
          </Col>
          <Col lg={4}>
          
            <Link href="#" className="hover-link text">
              <div className={styles.linkover}>
                <h4 className={styles.linkTitle}>MEXC</h4>
          <p className={styles.linkPara}>Brand design and guidelines for Asia's leading crypto exchange.
</p>
              </div>
              <div>
                <img src="../images/marqeta.webp" alt="Image 1" ref={(el) => (imageRefs.current[23] = el)} className="hover-image" />
              </div>
            </Link>
        
          </Col>
          <Col lg={4}>
          
            <Link href="#" className="hover-link text">
              <div className={styles.linkover}>
                <h4 className={styles.linkTitle}>TeamViewer</h4>
          <p className={styles.linkPara}>Mobile app design for an AR-powered visual assistance product.
</p>
              </div>
              <div>
                <img src="../images/marqeta.webp" alt="Image 1" ref={(el) => (imageRefs.current[24] = el)} className="hover-image" />
              </div>
            </Link>
        
          </Col>
          <Col lg={4}>
          
            <Link href="#" className="hover-link text">
              <div className={styles.linkover}>
            <h4 className={styles.linkTitle}>Corsair</h4>
          <p className={styles.linkPara}>Desktop and mobile UI/UX design for a leading gaming hardware company.</p>
              </div>
              <div>
                <img src="../images/marqeta.webp" alt="Image 1" ref={(el) => (imageRefs.current[25] = el)} className="hover-image" />
              </div>
            </Link>
        
          </Col>
          <Col lg={4}>
          
            <Link href="#" className="hover-link text">
              <div className={styles.linkover}>
                <h4 className={styles.linkTitle}>ADP</h4>
          <p className={styles.linkPara}>A multi-year UX design partnership with the ADP Innovation Lab.
</p>
              </div>
              <div>
                <img src="../images/marqeta.webp" alt="Image 1" ref={(el) => (imageRefs.current[26] = el)} className="hover-image" />
              </div>
            </Link>
        
          </Col>
        </Row>
      </Container>

      <div className="cursor" ref={cursorRef}>
        <img src="../images/snapchat.webp" alt="Cursor Image" className="cursor-image" />
      </div>
    </>
  );
};

export default ImageHover;
