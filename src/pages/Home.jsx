import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faRocket, faShield, faBolt, faLeaf, faGift, faGlobe, faSmile, faUndo, faAward, faUserFriends, faStar } from "@fortawesome/free-solid-svg-icons";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
import userSvg from "../assets/user-phone.svg";
import deliveryManSvg from "../assets/delivery-man.svg";
import vanSvg from "../assets/delivery-van.svg";
import bagSvg from "../assets/shopping-bag.svg";
import { useTheme } from "../context/ThemeContext";

export default function Home() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);
    const navigate = useNavigate();
    const { theme } = useTheme ? useTheme() : { theme: "dark" };

    useEffect(() => {
        setIsLoaded(true);
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Animated objects state (now with dx, dy for both directions)
    const [objects, setObjects] = useState([
        { src: userSvg, alt: "User with phone", size: 56, top: 10, left: 5, dx: 0.7, dy: 0.4 },
        { src: deliveryManSvg, alt: "Delivery man", size: 60, top: 60, left: 80, dx: -0.5, dy: 0.3 },
        { src: vanSvg, alt: "Delivery van", size: 70, top: 80, left: 10, dx: 0.4, dy: -0.5 },
        { src: bagSvg, alt: "Shopping bag", size: 48, top: 30, left: 60, dx: -0.6, dy: 0.6 }
    ]);
    useEffect(() => {
        const interval = setInterval(() => {
            setObjects(prev => prev.map(obj => {
                let newLeft = obj.left + obj.dx;
                let newTop = obj.top + obj.dy;
                let dx = obj.dx;
                let dy = obj.dy;
                // Bounce horizontally
                if (newLeft > 95 || newLeft < 0) dx = -dx * (0.8 + Math.random() * 0.4);
                // Bounce vertically
                if (newTop > 90 || newTop < 0) dy = -dy * (0.8 + Math.random() * 0.4);
                // Add a little random walk
                dx += (Math.random() - 0.5) * 0.05;
                dy += (Math.random() - 0.5) * 0.05;
                // Clamp speed
                dx = Math.max(-1.2, Math.min(1.2, dx));
                dy = Math.max(-1.2, Math.min(1.2, dy));
                return {
                    ...obj,
                    left: Math.max(0, Math.min(95, newLeft)),
                    top: Math.max(0, Math.min(90, newTop)),
                    dx,
                    dy
                };
            }));
        }, 40);
        return () => clearInterval(interval);
    }, []);

    const features = [
        {
            icon: faShoppingCart,
            title: "Smart Shopping",
            description: "AI-powered recommendations tailored just for you."
        },
        {
            icon: faRocket,
            title: "Lightning Fast",
            description: "Ultra-fast delivery powered by best infrastructure."
        },
        {
            icon: faLeaf,
            title: "Eco-Friendly Delivery",
            description: "Sustainable packaging and green logistics for a better planet."
        },
        {
            icon: faGift,
            title: "Personalized Offers",
            description: "Exclusive deals and rewards for loyal customers."
        },
        {
            icon: faShield,
            title: "Secure & Safe",
            description: "Enterprise-grade security for all transactions."
        },
        {
            icon: faBolt,
            title: "Real-time Updates",
            description: "Live inventory and instant notifications."
        }
    ];

    const stats = [
        { number: "1M+", label: "Happy Customers", icon: faGlobe },
        { number: "50K+", label: "Products", icon: faShoppingCart },
        { number: "99.9%", label: "Uptime", icon: faBolt },
        { number: "24/7", label: "Support", icon: faShield },
        { number: "120+", label: "Countries Served", icon: faGlobe }
    ];

    // How It Works steps
    const howItWorks = [
        {
            icon: faShoppingCart,
            title: "Browse & Discover",
            desc: "Explore thousands of products, categories, and deals tailored for you."
        },
        {
            icon: faUserFriends,
            title: "Easy Checkout",
            desc: "Seamless, secure, and lightning-fast checkout experience."
        },
        {
            icon: faUndo,
            title: "Hassle-Free Returns",
            desc: "Not satisfied? Enjoy easy returns and instant refunds."
        }
    ];

    // Customer Stories
    const testimonials = [
        {
            name: "Amit S.",
            text: "GO Shop made my Diwali shopping so easy! Fast delivery and amazing offers.",
            icon: faSmile
        },
        {
            name: "Priya K.",
            text: "I love the eco-friendly packaging and the customer support is top-notch!",
            icon: faLeaf
        },
        {
            name: "Rahul D.",
            text: "Best online shopping experience. The personalized deals are a game changer!",
            icon: faGift
        }
    ];

    // Dynamic rotating text
    const dynamicTexts = [
        "India's Biggest E-Shop",
        "1M+ Users Trust Us",
        "Fastest Delivery in India",
        "Eco-Friendly Shopping",
        "Personalized Offers for You"
    ];
    const [dynamicIndex, setDynamicIndex] = useState(0);
    const [showText, setShowText] = useState(true);
    const intervalRef = useRef();
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setShowText(false);
            setTimeout(() => {
                setDynamicIndex(i => (i + 1) % dynamicTexts.length);
                setShowText(true);
            }, 400);
        }, 2600);
        return () => clearInterval(intervalRef.current);
    }, []);

    // Helper: is dark theme
    const isDark = theme === "dark";

    return (
        <div
            className="home-container animate__animated animate__fadeIn"
            style={{
                background: theme === "dark"
                    ? "linear-gradient(135deg, #232F3E 0%, #161E2D 100%)"
                    : "linear-gradient(135deg, #f8fafc 0%, #e3f0ff 100%)",
                color: theme === "dark" ? "#fff" : "#232F3E"
            }}
        >
            {/* Animated SVG Background (AWS-style) */}
            <svg className="aws-bg-svg" width="100%" height="100%" viewBox="0 0 1440 320" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
                <defs>
                    <linearGradient id="awsGradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#1a73e8" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#ff9800" stopOpacity="0.15" />
                    </linearGradient>
                </defs>
                <path fill="url(#awsGradient)" fillOpacity="1" d="M0,160L60,170C120,180,240,200,360,192C480,184,600,144,720,133.3C840,123,960,149,1080,154.7C1200,160,1320,138,1380,128L1440,120L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </svg>
            {/* Dynamic Background (mouse effect or animated gradient) */}
            {isDark ? (
                <div
                    className="dynamic-background"
                    style={{
                        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                            rgba(255, 153, 0, 0.1) 0%, 
                            rgba(75, 146, 219, 0.05) 25%, 
                            rgba(35, 47, 62, 0.8) 50%,
                            rgba(22, 30, 45, 0.95) 100%)`,
                        zIndex: 1
                    }}
                />
            ) : (
                <div className="dynamic-background light-bg-animate" style={{ zIndex: 1 }} />
            )}
            {/* Floating Particles */}
            <div className="particles">
                {[...Array(20)].map((_, i) => (
                    <div 
                        key={i} 
                        className="particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}
                    />
                ))}
            </div>
            {/* Animated Characters/Objects */}
            <div className="animated-objects-layer">
                {objects.map((obj, i) => (
                    <img
                        key={i}
                        src={obj.src}
                        alt={obj.alt}
                        className="animated-object"
                        style={{
                            position: 'fixed',
                            top: `${obj.top}vh`,
                            left: `${obj.left}vw`,
                            width: obj.size,
                            height: obj.size,
                            zIndex: 3,
                            pointerEvents: 'none',
                            filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.12))',
                            transition: 'filter 0.2s',
                            animation: 'object-bounce 2.5s infinite alternate',
                        }}
                    />
                ))}
            </div>
            <Container className="home-content position-relative" style={{ zIndex: 2 }}>
                {/* Hero Section */}
                <Row className="hero-section text-center animate__animated animate__fadeInDown">
                    <Col>
                        <div className={`hero-content ${isLoaded ? 'loaded' : ''}`}> 
                            <h1 className="hero-title gradient-text animate__animated animate__fadeInLeft">
                                Welcome to <span className="aws-gradient-text">GO Shop</span>
                            </h1>
                            <div style={{ minHeight: 36 }}>
                                <span className={`dynamic-type-text animate__animated ${showText ? 'animate__fadeInDown' : 'animate__fadeOutUp'}`}
                                    style={{ fontSize: '1.3rem', color: '#FF9900', fontWeight: 600, letterSpacing: 1 }}>
                                    {dynamicTexts[dynamicIndex]}
                                </span>
                            </div>
                            <p className="hero-subtitle animate__animated animate__fadeInUp animate__delay-1s">
                                Discover the next generation of online shopping—fast, secure, and eco-friendly.
                            </p>
                            <div className="hero-buttons animate__animated animate__fadeInUp animate__delay-2s">
                                <Button 
                                    size="lg" 
                                    className="cta-button primary-cta animate__animated animate__pulse animate__infinite"
                                    onClick={() => navigate("/store")}
                                >
                                    <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
                                    Start Shopping
                                </Button>
                                <Button 
                                    variant="outline-primary" 
                                    size="lg" 
                                    className="cta-button secondary-cta ms-3 animate__animated animate__fadeInRight animate__delay-2s"
                                    onClick={() => navigate("/learn-more")}
                                >
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* How It Works Section */}
                <Row className="how-it-works-section text-center animate__animated animate__fadeInUp animate__delay-1s mb-5">
                    <Col xs={12} className="mb-4">
                        <h2 className="section-title gradient-text">How It Works</h2>
                        <p className="section-subtitle">Shopping made simple, secure, and joyful.</p>
                    </Col>
                    {howItWorks.map((step, idx) => (
                        <Col key={idx} md={4} className="mb-4">
                            <div className={`how-step glass-card animate__animated animate__zoomIn`} style={{ animationDelay: `${idx * 0.2}s` }}>
                                <div className="how-icon-badge">
                                    <FontAwesomeIcon icon={step.icon} size="2x" />
                                </div>
                                <div className="fw-bold fs-5 mb-2">{step.title}</div>
                                <div className="text-muted small">{step.desc}</div>
                            </div>
                        </Col>
                    ))}
                </Row>

                {/* Features Section (Redesigned) */}
                <Row className="features-section animate__animated animate__fadeInUp animate__delay-2s">
                    <Col xs={12} className="text-center mb-5">
                        <h2 className="section-title gradient-text">Why Shop With Us?</h2>
                        <p className="section-subtitle">
                            Experience innovation, sustainability, and rewards—only at GO Shop.
                        </p>
                    </Col>
                    {features.slice(0, 4).map((feature, index) => (
                        <Col key={index} md={6} lg={3} className="mb-4">
                            <div className="feature-card glass-card tilt-effect animate__animated animate__fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
                                <div className="feature-badge gradient-text mb-2">{feature.title.split(' ')[0]}</div>
                                <div className="feature-icon mb-2">
                                    <FontAwesomeIcon icon={feature.icon} size="2x" />
                                </div>
                                <div className="feature-title gradient-text mb-1">{feature.title}</div>
                                <div className="feature-description">{feature.description}</div>
                            </div>
                        </Col>
                    ))}
                </Row>
                {/* Extra Features Row */}
                <Row className="features-section animate__animated animate__fadeInUp animate__delay-3s">
                    {features.slice(4).map((feature, index) => (
                        <Col key={index} md={6} lg={4} className="mb-4">
                            <div className="feature-card glass-card tilt-effect animate__animated animate__fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
                                <div className="feature-badge gradient-text mb-2">{feature.title.split(' ')[0]}</div>
                                <div className="feature-icon mb-2">
                                    <FontAwesomeIcon icon={feature.icon} size="2x" />
                                </div>
                                <div className="feature-title gradient-text mb-1">{feature.title}</div>
                                <div className="feature-description">{feature.description}</div>
                            </div>
                        </Col>
                    ))}
                </Row>

                {/* Stats Section */}
                <Row className="stats-section text-center animate__animated animate__fadeIn animate__delay-3s">
                    {stats.map((stat, idx) => (
                        <Col key={idx} md={2} sm={4} xs={6} className="mb-4 animate__animated animate__fadeInUp" style={{ animationDelay: `${idx * 0.15}s` }}>
                            <div className="stat-item p-3 rounded shadow-sm bg-white">
                                <FontAwesomeIcon icon={stat.icon} className="mb-2 text-primary" size="lg" />
                                <div className="stat-number gradient-text fs-3 fw-bold">{stat.number}</div>
                                <div className="stat-label text-muted small">{stat.label}</div>
                            </div>
                        </Col>
                    ))}
                </Row>

                {/* Customer Stories Section */}
                <Row className="customer-stories-section text-center animate__animated animate__fadeInUp animate__delay-4s mb-5">
                    <Col xs={12} className="mb-4">
                        <h2 className="section-title gradient-text">Customer Stories</h2>
                        <p className="section-subtitle">Real experiences from real shoppers.</p>
                    </Col>
                    {testimonials.map((t, idx) => (
                        <Col key={idx} md={4} className="mb-4">
                            <div className="testimonial-card glass-card animate__animated animate__zoomIn" style={{ animationDelay: `${idx * 0.2}s` }}>
                                <div className="testimonial-icon mb-2">
                                    <FontAwesomeIcon icon={t.icon} size="2x" />
                                </div>
                                <div className="testimonial-text mb-2">"{t.text}"</div>
                                <div className="testimonial-name gradient-text">- {t.name}</div>
                            </div>
                        </Col>
                    ))}
                </Row>

                {/* CTA Section */}
                <Row className="cta-section text-center animate__animated animate__fadeInUp animate__delay-4s">
                    <Col>
                        <div className="cta-content">
                            <h3 className="cta-title gradient-text animate__animated animate__fadeInLeft">Ready to Transform Your Shopping Experience?</h3>
                            <p className="cta-description animate__animated animate__fadeInUp animate__delay-1s">
                                Your next favorite product is just a click away. Join the future of shopping—today!
                            </p>
                            <Button 
                                size="lg" 
                                className="cta-button final-cta animate__animated animate__pulse animate__infinite"
                                onClick={() => navigate("/store")}
                            >
                                Get Started Now
                                <FontAwesomeIcon icon={faRocket} className="ms-2" />
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
} 