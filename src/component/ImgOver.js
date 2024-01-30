import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from '../styles/ImgHover.module.css';
import { Container, Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import coinbase from '/public/images/client/coinbase.webp';
import sony from '/public/images/client/sony.webp';
import oppo from '/public/images/client/oppo.webp';
import uber from '/public/images/client/uber.webp';
import huawei from '/public/images/client/huawei.webp';
import creditkarma from '/public/images/client/creditkarma.webp';
import tmobile from '/public/images/client/tmobile.webp';
import cisco from '/public/images/client/cisco.webp';
import stcpay from '/public/images/client/stcpay.webp';
import sendgrid from '/public/images/client/sendgrid.webp';
import mercari from '/public/images/client/mercari.webp';
import moneylion from '/public/images/client/moneylion.webp';
import clearbit from '/public/images/client/clearbit.webp';
import onfido from '/public/images/client/onfido.webp';
import LOreal from '/public/images/client/LOreal.webp';
import adp from '/public/images/client/adp.webp';
import vmware from '/public/images/client/vmware.webp';
import okta from '/public/images/client/okta.webp';
import amazon from '/public/images/client/amazon.webp';
import sandisk from '/public/images/client/sandisk.webp';
import fossil from '/public/images/client/fossil.webp';
import sumsung from '/public/images/client/sumsung.webp';
import toyota from '/public/images/client/toyota.webp';
import superhuman from '/public/images/client/superhuman.webp';
import medidata from '/public/images/client/marqeta.webp';
import nutanix from '/public/images/client/nutanix.webp';
import workboard from '/public/images/client/marqeta.webp';
import california from '/public/images/client/california.webp';


const ImgOver = () => {
  const cursorRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {

    const cursor = cursorRef.current;
    const links = document.querySelectorAll(".hover-link1");
    const scrolltxt = document.querySelectorAll(".scrolltxt");

    if (!cursor) {
      return;
    }

    links.forEach((link, index) => {
      const image = imageRefs.current[index];
      link.addEventListener("mousemove", (e) => {
        const rect = link.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        gsap.to(image, {
          x: offsetX,
          y: offsetY,
          duration: 0.2,
          transformOrigin: "center center",
          ease: "power2.out",
        });

        cursor?.style && gsap.to(cursor, {
          x: e.clientX - (cursor.offsetWidth / 2 || 0),
          y: e.clientY - (cursor.offsetHeight / 2 || 0),
          duration: 0.2,
        });
      });
      link.addEventListener("mouseleave", () => {
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
  <section className={styles.bgBlack}>
    <Container>
      <Row>
      <h3 className={styles.linkTitle1}>Archive</h3>
      </Row>
      <Row>
        <Col xxl={6} xl={6} lg={6}>
            <Link href="#" className="hover-link1 text">
              <div className={styles.linkover}>
                  <h4 className={styles.linkTitle}>Coinbase</h4>
                </div>
              <div>
                <Image src={coinbase} alt="Image 1"  width={500} height={500} ref={(el) => (imageRefs.current[0] = el)} className="hover-image11" />
              </div>
            </Link>
            <Link href="#" className="hover-link1 text">
              <div className={styles.linkover}>
                  <h4 className={styles.linkTitle}>Sony</h4>
                </div>
              <div>
                <Image src={sony} alt="Image 1"  width={500} height={500} ref={(el) => (imageRefs.current[1] = el)} className="hover-image11" />
              </div>
            </Link>
            <Link href="#" className="hover-link1 text">
              <div className={styles.linkover}>
                  <h4 className={styles.linkTitle}>Oppo</h4>
                </div>
              <div>
                <Image src={oppo} alt="Image 1"  width={500} height={500} ref={(el) => (imageRefs.current[2] = el)} className="hover-image11" />
              </div>
            </Link>
            <Link href="#" className="hover-link1 text">
              <div className={styles.linkover}>
                  <h4 className={styles.linkTitle}>Uber</h4>
                </div>
              <div>
                <Image src={uber} alt="Image 1"  width={500} height={500} ref={(el) => (imageRefs.current[3] = el)} className="hover-image11" />
              </div>
            </Link>
            <Link href="#" className="hover-link1 text">
              <div className={styles.linkover}>
                  <h4 className={styles.linkTitle}>Huawei</h4>
                </div>
              <div>
                <Image src={huawei} alt="Image 1"  width={500} height={500} ref={(el) => (imageRefs.current[4] = el)} className="hover-image11" />
              </div>
            </Link>
            <Link href="#" className="hover-link1 text">
              <div className={styles.linkover}>
                  <h4 className={styles.linkTitle}>Credit Karma</h4>
                </div>
              <div>
                <Image src={creditkarma} alt="Image 1"  width={500} height={500} ref={(el) => (imageRefs.current[5] = el)} className="hover-image11" />
              </div>
            </Link>
            <Link href="#" className="hover-link1 text">
              <div className={styles.linkover}>
                  <h4 className={styles.linkTitle}>T-Mobile</h4>
                </div>
              <div>
                <Image src={tmobile} alt="Image 1"  width={500} height={500} ref={(el) => (imageRefs.current[6] = el)} className="hover-image11" />
              </div>
            </Link>
            <Link href="#" className="hover-link1 text">
              <div className={styles.linkover}>
                  <h4 className={styles.linkTitle}>Cisco</h4>
                </div>
              <div>
                <Image src={cisco} alt="Image 1"  width={500} height={500} ref={(el) => (imageRefs.current[7] = el)} className="hover-image11" />
              </div>
            </Link>
            <Link href="#" className="hover-link1 text">
              <div className={styles.linkover}>
                  <h4 className={styles.linkTitle}>STC Pay</h4>
                </div>
              <div>
                <Image src={stcpay} alt="Image 1"  width={500} height={500} ref={(el) => (imageRefs.current[8] = el)} className="hover-image11" />
              </div>
            </Link>
            <Link href="#" className="hover-link1 text">
              <div className={styles.linkover}>
                  <h4 className={styles.linkTitle}>SendGrid</h4>
                </div>
              <div>
                <Image src={sendgrid} alt="Image 1"  width={500} height={500} ref={(el) => (imageRefs.current[9] = el)} className="hover-image11" />
              </div>
            </Link>
            <Link href="#" className="hover-link1 text">
              <div className={styles.linkover}>
                  <h4 className={styles.linkTitle}>Mercari</h4>
                </div>
              <div>
                <Image src={mercari} alt="Image 1"  width={500} height={500} ref={(el) => (imageRefs.current[10] = el)} className="hover-image11" />
              </div>
            </Link>
            <Link href="#" className="hover-link1 text">
              <div className={styles.linkover}>
                  <h4 className={styles.linkTitle}>MoneyLion</h4>
                </div>
              <div>
                <Image src={moneylion} alt="Image 1"  width={500} height={500} ref={(el) => (imageRefs.current[11] = el)} className="hover-image11" />
              </div>
            </Link>
            <Link href="#" className="hover-link1 text">
              <div className={styles.linkover}>
                  <h4 className={styles.linkTitle}>Clearbit</h4>
                </div>
              <div>
                <Image src={clearbit} alt="Image 1"  width={500} height={500} ref={(el) => (imageRefs.current[12] = el)} className="hover-image11" />
              </div>
            </Link>
            <Link href="#" className="hover-link1 text">
              <div className={styles.linkover}>
                  <h4 className={styles.linkTitle}>Onfido</h4>
                </div>
              <div>
                <Image src={onfido} alt="Image 1"  width={500} height={500} ref={(el) => (imageRefs.current[13] = el)} className="hover-image11" />
              </div>
            </Link>
           
        </Col>
        <Col xxl={6} xl={6} lg={6}>
        <Link href="#" className="hover-link1 text">
              <div className={styles.linkover}>
                  <h4 className={styles.linkTitle}>L’Oreal</h4>
                </div>
              <div>
                <Image src={LOreal} alt="Image 1"  width={500} height={500} ref={(el) => (imageRefs.current[14] = el)} className="hover-image11" />
              </div>
            </Link>
            <Link href="#" className="hover-link1 text">
              <div className={styles.linkover}>
                  <h4 className={styles.linkTitle}>ADP</h4>
                </div>
              <div>
                <Image src={adp} alt="Image 1"  width={500} height={500} ref={(el) => (imageRefs.current[15] = el)} className="hover-image11" />
              </div>
            </Link>
            <Link href="#" className="hover-link1 text">
              <div className={styles.linkover}>
                  <h4 className={styles.linkTitle}>VMware</h4>
                </div>
              <div>
                <Image src={vmware} alt="Image 1"  width={500} height={500} ref={(el) => (imageRefs.current[16] = el)} className="hover-image11" />
              </div>
            </Link>
            <Link href="#" className="hover-link1 text">
              <div className={styles.linkover}>
                  <h4 className={styles.linkTitle}>Okta</h4>
                </div>
              <div>
                <Image src={okta} alt="Image 1"  width={500} height={500} ref={(el) => (imageRefs.current[17] = el)} className="hover-image11" />
              </div>
            </Link>
            <Link href="#" className="hover-link1 text">
              <div className={styles.linkover}>
                  <h4 className={styles.linkTitle}>Amazon</h4>
                </div>
              <div>
                <Image src={amazon} alt="Image 1"  width={500} height={500} ref={(el) => (imageRefs.current[18] = el)} className="hover-image11" />
              </div>
            </Link>
            <Link href="#" className="hover-link1 text">
              <div className={styles.linkover}>
                  <h4 className={styles.linkTitle}>SanDisk</h4>
                </div>
              <div>
                <Image src={sandisk} alt="Image 1"  width={500} height={500} ref={(el) => (imageRefs.current[19] = el)} className="hover-image11" />
              </div>
            </Link>
            <Link href="#" className="hover-link1 text">
              <div className={styles.linkover}>
                  <h4 className={styles.linkTitle}>Fossil</h4>
                </div>
              <div>
                <Image src={fossil} alt="Image 1"  width={500} height={500} ref={(el) => (imageRefs.current[20] = el)} className="hover-image11" />
              </div>
            </Link>
            <Link href="#" className="hover-link1 text">
              <div className={styles.linkover}>
                  <h4 className={styles.linkTitle}>Samsung</h4>
                </div>
              <div>
                <Image src={sumsung} alt="Image 1"  width={500} height={500} ref={(el) => (imageRefs.current[21] = el)} className="hover-image11" />
              </div>
            </Link>
            <Link href="#" className="hover-link1 text">
              <div className={styles.linkover}>
                  <h4 className={styles.linkTitle}>Toyota</h4>
                </div>
              <div>
                <Image src={toyota} alt="Image 1"  width={500} height={500} ref={(el) => (imageRefs.current[22] = el)} className="hover-image11" />
              </div>
            </Link>
            <Link href="#" className="hover-link1 text">
              <div className={styles.linkover}>
                  <h4 className={styles.linkTitle}>Superhuman</h4>
                </div>
              <div>
                <Image src={superhuman} alt="Image 1"  width={500} height={500} ref={(el) => (imageRefs.current[23] = el)} className="hover-image11" />
              </div>
            </Link>
            <Link href="#" className="hover-link1 text">
              <div className={styles.linkover}>
                  <h4 className={styles.linkTitle}>Medidata</h4>
                </div>
              <div>
                <Image src={medidata} alt="Image 1"  width={500} height={500} ref={(el) => (imageRefs.current[24] = el)} className="hover-image11" />
              </div>
            </Link>
            <Link href="#" className="hover-link1 text">
              <div className={styles.linkover}>
                  <h4 className={styles.linkTitle}>Nutanix</h4>
                </div>
              <div>
                <Image src={nutanix} alt="Image 1"  width={500} height={500} ref={(el) => (imageRefs.current[25] = el)} className="hover-image11" />
              </div>
            </Link>
            <Link href="#" className="hover-link1 text">
              <div className={styles.linkover}>
                  <h4 className={styles.linkTitle}>Workboard</h4>
                </div>
              <div>
                <Image src={workboard} alt="Image 1"  width={500} height={500} ref={(el) => (imageRefs.current[26] = el)} className="hover-image11" />
              </div>
            </Link>
            <Link href="#" className="hover-link1 text">
              <div className={styles.linkover}>
                  <h4 className={styles.linkTitle}>California Closets</h4>
                </div>
              <div>
                <Image src={california} alt="Image 1"  width={500} height={500} ref={(el) => (imageRefs.current[27] = el)} className="hover-image11" />
              </div>
            </Link>
        </Col>
        </Row>
      </Container>
      <div className="cursor" ref={cursorRef}>
        <Image src="/images/snapchat.webp" alt="Cursor Image" width={500} height={500}  className="cursor-image" />
      </div>
  </section>
    </>
  );
};

export default ImgOver;
