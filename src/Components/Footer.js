import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import MailChimpForm from './MailChimpForm';
import logo from "../assets/images/logo.svg";
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.svg";
import navIcon3 from "../assets/images/nav-icon3.svg";

function Footer() {
    return (
        <footer className="footer">
        <Container>
            <Row className="align-items-center">
            <MailChimpForm />
            <Col size={12} sm={6}>
                <img src={logo} alt="Logo" />
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
                <div className="social-icon">
                <a href='https://www.linkedin.com/in/shravani-waghmale-5090b7284/'><img src={navIcon1} alt="Icon" /></a>
                <a href='https://github.com/ShravaniWaghmale'><img src={navIcon2} alt="Icon" /></a>
                <a href="#"><img src={navIcon3} alt="Icon" /></a>
                </div>
                <p>Copyright 2024. All Rights Reserved</p>
            </Col>
            </Row>
        </Container>
    </footer>
    )
}

export default Footer
