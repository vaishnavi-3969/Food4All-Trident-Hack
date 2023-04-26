import {Navbar, Container,Nav} from 'react-bootstrap';
import {useEffect, useState} from "react";
import logo from '../assets/img/food4all.svg'
import './NavBar.css';
import { FaHome, FaDonate, FaUserFriends } from 'react-icons/fa';
import { SiNpm } from 'react-icons/si';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() =>{
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

  return (
    <Navbar  expand='lg' className={scrolled ? "scrolled":""}>
    <Container>
      <img src={logo} alt='logo' width={70}/>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toogle-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>
      <FaHome /> Home
    </Nav.Link>
    <Nav.Link href="#donate" className={activeLink === 'donate' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('donate')}>
      <FaDonate /> Donate
    </Nav.Link>
    <Nav.Link href="#volunteer" className={activeLink === 'volunteer' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('volunteer')}>
      <FaUserFriends /> Volunteer
    </Nav.Link>
    <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>
        <SiNpm /> About
    </Nav.Link>

  </Nav>
        <span className='navbar-text'>
          <div className='social-icon'>
            <a href='mailto:vaishnavi.kale3011@gmail.com'><i className="fa-solid fa-paper-plane"></i></a>
            <a href='https://www.instagram.com'><i className="fa-brands fa-instagram"></i></a>
            <a href='https://www.facebook.com'><i className="fa-brands fa-facebook"></i></a>
            <a href='https://www.twitter.com'><i className="fa-brands fa-twitter"></i></a>
            <a href='https://www.linkedin.com'><i className="fa-brands fa-linkedin-in"></i></a>
            <a href='https://www.telegram.com'><i className="fa-brands fa-telegram"></i></a>
            <a href='https://www.discord.com'><i className="fa-brands fa-discord"></i></a>
            <a href='https://www.youtube.com'><i className="fa-brands fa-youtube"></i></a>
            <a href='https://www.slack.com'><i className="fa-brands fa-slack"></i></a>
            <a href='https://www.github.com'><i className="fa-brands fa-github"></i></a>
            <a href="tel:123-456-7890"><i className="fa-solid fa-phone"></i></a>
          </div>
          <button className='vvd' onClick={() => console.log('connect')}>
            <span>Join Us!</span>
          </button>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  );
}
