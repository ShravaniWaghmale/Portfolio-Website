import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState, useEffect} from 'react';
import logo from '../assets/images/logo.svg';
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';

function NavBar() {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)                          
    }, [])

    const onUpdateActivLink = (value) => {
        setActiveLink(value)
    }
    const handleConnectClick = () => {
        const email = 'shravaniwaghmale@gmail.com';
        const subject = 'Let\'s Connect';
    
        // Construct the mailto URL with email and subject
        const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    
        // Redirect to the mailto URL
        window.location.href = mailtoURL;
    };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}> 
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActivLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActivLink('skilss')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActivLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href='https://www.linkedin.com/in/shravani-waghmale-5090b7284/'><img src={navIcon1} alt="" /></a>
                    <a href='https://github.com/ShravaniWaghmale'><img src={navIcon2} alt="" /></a>
                    <a href='#'><img src={navIcon3} alt="" /></a>
                </div>
                <button className="vvd" onClick={handleConnectClick}><span>Lets Connect</span></button>
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default NavBar;


