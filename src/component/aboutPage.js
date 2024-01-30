import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from '../styles/AboutUs.module.css';
import { Container, Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import AboutBanners from '/public/images/AboutBanner.webp';
import TeamLead from '/public/images/teamlead.webp';
import Work from '/public/images/work.webp';
import collaborate from '/public/images/collaborate.webp';
import collaps1 from '/public/images/collaps1.webp';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Slider from '../component/Slider';

gsap.registerPlugin(ScrollTrigger);

const AboutContent = ({  }) => {
    const imageRef = useRef(null);
    
    useEffect(() => {
        const image = imageRef.current;
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: image,
            start: 'top center', 
            end: 'bottom center', 
            scrub: true, 
          },
        });
    
        tl.from(image, {scale: 0.9 , duration: 0.1  })
        tl.to(image, {scale: 1 , duration: 0.1 })
        tl.to(image, {scale: 1.01 , duration: 0.1 })
        tl.to(image, {scale: 1.02 , duration: 0.1 })
        tl.to(image, {scale: 1.03 , duration: 0.1 })
        tl.to(image, {scale: 1.04 , duration: 0.1 })
        tl.to(image, {scale: 1.05 , duration: 0.1 })
        tl.to(image, {scale: 1.06 , duration: 0.1 })
        tl.to(image, {scale: 1.07 , duration: 0.1 })
        tl.to(image, {scale: 1.08 , duration: 0.1 })
        tl.to(image, {scale: 1.09 , duration: 0.1 })
        tl.to(image, {scale: 1.1 , duration: 0.1 })
        tl.to(image, {scale: 1.1111 , duration: 0.1 })
        tl.to(image, {scale: 1.1222 , duration: 0.1 })

        ScrollTrigger.defaults({
            toggleActions: "restart pause resume pause",
          });

        let sections = gsap.utils.toArray(".box");
        let sections1 = gsap.utils.toArray(".box1");
        let sections2 = gsap.utils.toArray(".box2");

        const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".box", 
            scrub: true, 
            start: "top top+=5%+", 
            end: "+=100%", 
        }
        });

        let stagger = 0.8

        timeline
        .from(sections, { opacity:0, scale:0.90, ease:"easeOut", stagger:stagger, duration: 0.5 })
        .to(sections, {opacity:0,  scale:1, ease:"easeOut", stagger:stagger, duration:0.5 }, stagger);
        // Box1
        const timeline1 = gsap.timeline({
        scrollTrigger: {
        trigger: ".box1", 
        scrub: true, 
        start: "top top+=5%+", 
        end: "+=100%", 
        }
    });
  
    let stagger1 = 0.8
  
    timeline1
    .from(sections1, {opacity:0, scale:0.90, ease:"easeOut", stagger:stagger, duration: 1 })
    .to(sections1, {opacity:0, scale:1, ease:"easeOut", stagger:stagger, duration:1 }, stagger1);

        // Box 3
        const timeline2 = gsap.timeline({
            scrollTrigger: {
            trigger: ".box2", 
            scrub: true, 
            start: "top top+=5%+", 
            end: "+=100%", 
            }
        });
  
        let stagger2 = 0.8
        
        timeline2
        .from(sections2, {opacity:0, scale:0.90, ease:"easeOut", stagger:stagger, duration: 1 })
        .to(sections2, {opacity:0, scale:1, ease:"easeOut", stagger:stagger, duration:1 }, stagger2);

   }, []);


  return (
    <>  
      <section className={`${styles.about} pt-130 pb-130`}>
        <div className={styles.VidM}>
    <video autoPlay className={styles.VidM} muted loop src="/torusblack.mp4" type="video/mp4"></video>
        </div> 
        <Container>
            <Row>
                <Col lg={12}>
                    <h2 className={`${styles.Heading_level_1} text-white pt-130 pb-130`}>We transform brands through <br/> elevated digital experiences</h2>
                    <div className={`${styles.imgrelative} pt-130 pb-130`}>
                            <div className={styles.Bannerback}>
                                <div className={styles.hidedive}>
                                    <Image src={collaps1} alt="Image" />
                                </div>
                            </div>
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
     {/* ref={siteImg} */}
      <section className={styles.imgrelative} ref={imageRef} >
            <Container>
                <div className="video">
                    <Image src={AboutBanners} alt='Image' />
                </div>
            </Container>
    </section>
  
    <section>
        <Container>
            <Row className='pt-130 pb-65'>
                    <Col xxl={4} xl={4} lg={4} className='pb-4 pt-4'>
                    <h2 className={styles.Heading_level_number}>86</h2>
                    <p className={styles.para0}>Global Team Members</p>          
                    </Col>
                    <Col xxl={4} xl={4} lg={4} className='pb-4 pt-4'>
                    <h2 className={styles.Heading_level_number}>14</h2>
                    <p className={styles.para0}>Years In Business</p>
                    </Col>
                    <Col xxl={4} xl={4} lg={4} className='pb-4 pt-4'>
                    <h2 className={styles.Heading_level_number}>500+</h2>
                    <p className={styles.para0}>Projects Completed</p>
                    </Col>
                </Row>
                <Row className='pt-130 pb-65'>
                    <Col xxl={12} xl={12} lg={12}>
                    <h2 className={styles.Heading_level_number}>San Francisco</h2>
                    <p className={styles.para0}>Headquarters</p>          
                    </Col>
                    
                </Row>
        </Container>
    </section>

    <Slider></Slider>
    <section className={`pt-5 pb-130`}>
        <Container>
            <Row>
                <Col xxl={9} xl={9} lg={9}>
                    <p className={styles.para}>
                    We are a global group of strategists, designers, and engineers building notable brands and premier digital experiences that captivate users worldwide.
<br/><br/>
Our unified approach ensures scalability and consistency across all brand touchpoints by building robust design systems.
                    </p>
                </Col>
            </Row>
        </Container>
    </section>
    
    <section>
        <Container>
            <Row className='justify-content-center align-items-center pt-130 '>
                <Col xxl={7} xl={7} lg={7}>
                  
                        <h4 className={styles.Heading_level_0}>01</h4>
                        <h2 className={styles.Heading_level_12}>Teams Led by Co-Founders</h2>
                        <p className={styles.para0}>We differentiate ourselves from large agencies where junior talent typically handles most of the work, and interactions with design leaders are limited.</p>   

                        <p className={styles.para0}>At Clay, our co-founders lead dedicated, senior-level teams with cross-disciplinary expertise to ensure project success.</p>  

                </Col>
                <Col  xxl={5} xl={5} lg={5}>
                    <Image src={TeamLead} className='px-4 box' alt='Image'/>
                </Col>
            </Row>
            <Row className='justify-content-center align-items-center pt-130'>
                <Col xxl={7} xl={7} lg={7}>
                  
                        <h4 className={styles.Heading_level_0}>02</h4>
                        <h2 className={styles.Heading_level_12}>Collaboration Is Key</h2>
                        <p className={styles.para0}>We prioritize communication and transparency in all our interactions with the aim of providing a premium client experience from the beginning to the end of the project.
</p>   

                        <p className={styles.para0}>Our work with startups has made us more agile, and our experience with enterprise companies has allowed us to develop a refined approach to project management.</p>  

                </Col>
                <Col xxl={5} xl={5} lg={5}>
                    <Image src={TeamLead} className='px-4 box1' alt='Image'/>
                </Col>
            </Row>
            <Row className='justify-content-center align-items-center pt-130 pb-130'>
                <Col xxl={7} xl={7} lg={7}>
                  
                        <h4 className={styles.Heading_level_0}>03</h4>
                        <h2 className={styles.Heading_level_12}>Our Work Is Future-Proof</h2>
                        <p className={styles.para0}>We create designs that can easily scale and sustain your business goals for years to come. Our portfolio features multiple websites and products that have remained untouched for 5+ years, proving our work is future-proof.</p>   

                        <p className={styles.para0}>At Clay, our co-founders lead dedicated, senior-level teams with cross-disciplinary expertise to ensure project success.</p>  

                </Col>
                <Col xxl={5} xl={5} lg={5}>
                    <Image src={TeamLead} className='px-4 box2' alt='Image'/>
                </Col>
            </Row>
        </Container>
    </section>
   
    </>
  );
};

export default AboutContent;
