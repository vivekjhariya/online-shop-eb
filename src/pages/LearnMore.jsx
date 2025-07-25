import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faRocket, faShieldAlt, faUndo, faSmile, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeContext";

export default function LearnMore() {
    const { theme } = useTheme ? useTheme() : { theme: "dark" };
    return (
        <div
            className="learn-more-bg"
            style={{
                minHeight: "100vh",
                background: theme === "dark"
                    ? "linear-gradient(135deg, #232F3E 0%, #161E2D 100%)"
                    : "linear-gradient(135deg, #f8fafc 0%, #e3f0ff 100%)"
            }}
        >
            <Container className="learn-more-page py-5 animate__animated animate__fadeIn">
                <Row className="mb-5">
                    <Col md={8} className="mx-auto text-center">
                        <h1 className="gradient-text mb-3">About GO Shop</h1>
                        <p className="lead text-muted">India's most trusted, innovative, and customer-centric e-commerce platform. We bring you the best products, fastest delivery, and a seamless shopping experience—every time.</p>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col md={4} className="mb-4">
                        <Card className="glass-card theme-card h-100 text-center p-3 animate__animated animate__fadeInUp">
                            <FontAwesomeIcon icon={faShoppingCart} size="2x" className="mb-2 text-primary" />
                            <h4 className="mb-2 gradient-text">How It Works</h4>
                            <p className="text-muted">Browse thousands of products, add to cart, and checkout in seconds. Our AI-powered engine ensures you always get the best deals and recommendations.</p>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="glass-card theme-card h-100 text-center p-3 animate__animated animate__fadeInUp animate__delay-1s">
                            <FontAwesomeIcon icon={faShieldAlt} size="2x" className="mb-2 text-success" />
                            <h4 className="mb-2 gradient-text">Security & Trust</h4>
                            <p className="text-muted">Your data and payments are protected with enterprise-grade security. We use advanced encryption and fraud detection for every transaction.</p>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="glass-card theme-card h-100 text-center p-3 animate__animated animate__fadeInUp animate__delay-2s">
                            <FontAwesomeIcon icon={faUndo} size="2x" className="mb-2 text-warning" />
                            <h4 className="mb-2 gradient-text">Easy Returns</h4>
                            <p className="text-muted">Not satisfied? No worries! Enjoy hassle-free returns and instant refunds on eligible products. Your satisfaction is our promise.</p>
                        </Card>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col md={6} className="mb-4">
                        <Card className="glass-card theme-card h-100 p-4 animate__animated animate__fadeInLeft">
                            <h4 className="gradient-text mb-2">Why Choose Us?</h4>
                            <ul className="text-muted" style={{ listStyle: 'none', paddingLeft: 0 }}>
                                <li>• 1M+ happy customers</li>
                                <li>• 24/7 customer support</li>
                                <li>• Fastest delivery network in India</li>
                                <li>• Eco-friendly packaging</li>
                                <li>• Personalized offers and rewards</li>
                                <li>• Secure payments & privacy</li>
                            </ul>
                        </Card>
                    </Col>
                    <Col md={6} className="mb-4">
                        <Card className="glass-card theme-card h-100 p-4 animate__animated animate__fadeInRight">
                            <h4 className="gradient-text mb-2">Contact & Support</h4>
                            <div className="mb-2">
                                <FontAwesomeIcon icon={faUser} className="me-2 text-primary" />Vivek Jhariya
                            </div>
                            <div className="mb-2">
                                <FontAwesomeIcon icon={faEnvelope} className="me-2 text-primary" />vivekjhariya241@gmail.com
                            </div>
                            <div className="mb-2">
                                <FontAwesomeIcon icon={faSmile} className="me-2 text-success" />We are here to help you 24/7!
                            </div>
                            <div className="mt-3">
                                <Button variant="primary" size="lg" href="mailto:vivekjhariya241@gmail.com">Email Support</Button>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
} 