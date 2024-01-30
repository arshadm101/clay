import {
    Nav,
    Navbar,
    Container,
    Button,
    Dropdown,
    NavDropdown,
    Col,
    Row,
  } from 'react-bootstrap';
  import { useRouter } from "next/router";
  import Link from "next/link";
  import styles from '../styles/header.module.css';
  import { useMemo, useState ,useEffect } from 'react';
  import Logo from '../../public/images/logo.JPG';
  import Offcanvas from 'react-bootstrap/Offcanvas';
  import Image from 'next/image';

function Header(props) {
  const router = useRouter();
  const aboutpage = router.pathname == '/about';
  const onHomepage = useMemo(() => router.pathname === "/", [router.pathname]);
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleItemClick = () => {
    setIsClicked(!isClicked);
  };
  const handleItemMouseEnter = () => {
    setIsHovered(true);
  };
  const handleItemMouseLeave = () => {
    setIsHovered(false);
  };
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY; 
      if (prevScrollPos > currentScrollPos) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      setPrevScrollPos(currentScrollPos);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [prevScrollPos]);

  return (
    <>
    <div className={aboutpage ? `${styles.headerblack}` :  `${styles.header}`} >
      <header>
        <Container className={`Homeheader ${!onHomepage ? "mb-4" : ""}`}>
          <Navbar className={ `navbar-dark ${visible ? 'visible' : ''}` }  collapseOnSelect expand="lg">
            <Navbar.Brand className="">
              <Link href="/" >
                  <Image src={Logo}  alt='logo' width={110} />
              </Link>
            </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav nav-dark" />
              <Navbar.Offcanvas id="basic-navbar-nav"  aria-labelledby={`offcanvasNavbarLabel-expand`}
                  placement="end">
                      <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                    <Link href="/" >
                        <Image src={Logo}  alt='logo' width={110} />
                    </Link>
                      </Offcanvas.Title>
                    </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className={aboutpage ? `headerblack1 ms-auto` :  `${styles.header} ms-auto`}>
                  <Link href="/works" className="nav-link"> Work <span className="bottom_border"></span></Link>
                  <Link href="/clients" className="nav-link"> Client <span className="bottom_border"></span></Link>
                  <Link href="/services" className="nav-link"> Services <span className="bottom_border"></span></Link>
                  <Link href="/about" className="nav-link"> About <span className="bottom_border"></span></Link>
                  <Link href="/contact" className="nav-link"> Contact <span className="bottom_border"></span></Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Navbar>
        </Container>
    </header>
    <div className='mixColor'></div>
    </div>
    </>
  );
}
export default Header;