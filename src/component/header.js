import {
    Nav,
    Navbar,
    Container,
    Button,
    Dropdown,
    NavDropdown,
    Col,
    Row,
  } from "react-bootstrap";
//   import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { useRouter } from "next/router";
  import Link from "next/link";
  import styles from "../styles/header.module.css";
  import { useMemo, useState ,useEffect } from "react";
  import Logo from '../../public/images/logo.JPG';
// import Banners from '@/components/Banners';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'next/image';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// function Header() {

function Header() {
  const router = useRouter();
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
  // const [isOpen, setOpen] = useState(false);
  // const toggleMenu = () => setOpen(!isOpen);


  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY; // Access window.scrollY when running in the client environment
      if (prevScrollPos > currentScrollPos) {
        // User is scrolling up, show the navbar
        setVisible(true);
      } else {
        // User is scrolling down, hide the navbar
        setVisible(false);
      }
      setPrevScrollPos(currentScrollPos);
    };

    if (typeof window !== 'undefined') {
      // Ensure this code runs only in the client-side environment
      window.addEventListener('scroll', handleScroll);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [prevScrollPos]);

  return (
    <>
    <div className={styles.header}>
      <header>
        <Container className={`Homeheader ${!onHomepage ? "mb-4" : ""}`}>
        <Navbar className={`navbar-dark ${visible ? 'visible' : ''}`} collapseOnSelect  expand="lg">
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
            <Nav className="ms-auto">
            <Nav.Link href="#home">Work <span className="bottom_border"></span></Nav.Link>
            <Nav.Link href="#link">Client <span className="bottom_border"></span></Nav.Link>
            <Nav.Link href="#link">Services <span className="bottom_border"></span></Nav.Link>
            <Nav.Link href="#link">About <span className="bottom_border"></span></Nav.Link>
            <Nav.Link href="#link">Contact <span className="bottom_border"></span></Nav.Link>
              
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