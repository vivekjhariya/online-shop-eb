import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faCopyright, faMapMarkerAlt, faPhone, faArrowRight, faLink } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

function Footer() {
    const { theme } = useTheme ? useTheme() : { theme: "dark" };
    return (
        <footer className="footer py-3">
            <Container>
                <Row className="gy-2">
                    <Col md={3}>
                        <div className="footer-brand mb-3">
                            <a href="https://github.com/vivekjhariya" 
                               className="brand-link d-inline-flex align-items-center"
                            >
                                <img src="/imgs/logo.svg" alt="Logo" width="30" height="30" className="me-2" />
                                <span className="brand-text">
                                    <span className="text-white">GO</span>
                                    <span className="text-primary text-color"> Shop</span>
                                </span>
                            </a>
                        </div>
                        <div className="contact-info">
                            <div className="contact-item mb-2">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon me-2" />
                                <span>
                                    <strong style={{ color: theme === "light" ? "#fff" : undefined }}>Address:</strong> 
                                    <span style={{ color: theme === "light" ? "#fff" : undefined }}>madhya pradesh , India</span>
                                </span>
                            </div>
                            <div className="contact-item">
                                <FontAwesomeIcon icon={faPhone} className="contact-icon me-2" />
                                <span>
                                    <strong style={{ color: theme === "light" ? "#fff" : undefined }}>Helpline:</strong> 
                                    <span style={{ color: theme === "light" ? "#fff" : undefined }}>+91 6261964512</span>
                                </span>
                            </div>
                        </div>
                    </Col>
                    
                    <Col md={3}>
                        <h5 className="footer-heading mb-3 gradient-heading">Quick Links</h5>
                        <div className="quick-links-group">
                            <div className="quick-link-item">
                                <FontAwesomeIcon icon={faLink} className="contact-icon me-2" />
                                <Link to="/privacy" className="footer-link">Privacy Policy</Link>
                            </div>
                            <div className="quick-link-item">
                                <FontAwesomeIcon icon={faLink} className="contact-icon me-2" />
                                <Link to="/terms" className="footer-link">Terms & Conditions</Link>
                            </div>
                            <div className="quick-link-item">
                                <FontAwesomeIcon icon={faLink} className="contact-icon me-2" />
                                <Link to="/returns" className="footer-link">Return Policy</Link>
                            </div>
                        </div>
                    </Col>

                    <Col md={3}>
                        <h5 className="footer-heading mb-3 gradient-heading">More Links</h5>
                        <div className="quick-links-group">
                            <div className="quick-link-item">
                                <FontAwesomeIcon icon={faLink} className="contact-icon me-2" />
                                <Link to="/shipping-info" className="footer-link">Shipping Info</Link>
                            </div>
                            <div className="quick-link-item">
                                <FontAwesomeIcon icon={faLink} className="contact-icon me-2" />
                                <Link to="/faq" className="footer-link">FAQ</Link>
                            </div>
                            <div className="quick-link-item">
                                <FontAwesomeIcon icon={faLink} className="contact-icon me-2" />
                                <Link to="/support" className="footer-link">Support</Link>
                            </div>
                        </div>
                    </Col>
                    
                    <Col md={3} className="d-flex flex-column justify-content-center">
                        <div className="connect-section text-center">
                            <h5 className="footer-heading mb-2 breathing-text gradient-heading">
                                Connect Here 
                                <FontAwesomeIcon icon={faArrowRight} className="sliding-arrow ms-2" />
                            </h5>
                            <div className="social-links-horizontal">
                                <a 
                                    href="https://github.com/vivekjhariya" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="social-link"
                                >
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a 
                                    href="https://linkedin.com/in/vivekjhariya" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="social-link"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a 
                                    href="https://x.com/vivek_jhar1422" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="social-link"
                                >
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
                
                <hr className="my-3" />
                
                <div className="text-center copyright-section py-2">
                    <div className="mb-1">
                        Build with <FontAwesomeIcon icon={faHeart} className="heart-icon" /> by{" "}
                        <a 
                            href="https://linkedin.com/in/vivekjhariya" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="author-link"
                        >
                            vivek jhariya
                        </a>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCopyright} /> {new Date().getFullYear()} Online Shop Web. 
                        All rights reserved.
                    </div>
                    <div className="mt-1">
                        By vivek jhariya | vivekjhariya@gmail.com | GO Shop Pvt. Ltd.
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
