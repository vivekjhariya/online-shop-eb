import { Container, Nav } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import ThemeToggle from "./ThemeToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHome, faStore, faHistory } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart();
    const navigate = useNavigate();
    const { theme } = useTheme ? useTheme() : { theme: "dark" };

    return (
        <nav
            className="navbar sticky-top"
            style={theme === "light"
                ? {
                    background: "rgba(255,255,255,0.93)",
                    boxShadow: "0 2px 16px 0 rgba(44,62,80,0.08)",
                    borderBottom: "1.5px solid #e3eafc",
                    color: "#1a237e"
                }
                : {}}
        >
            <Container className="d-flex justify-content-between align-items-center">
                <NavLink to="/" className="navbar-brand">
                    <img src="/imgs/logo.svg" alt="Logo" width="30" height="30" style={{ filter: theme === "light" ? "none" : "brightness(1.2)" }} />VJ
                    <span className={theme === "light" ? "text-primary" : "text-primary text-color"} style={theme === "light" ? { color: "#1a237e" } : {}}>GO Shop</span>
                </NavLink>

                <div className="d-flex align-items-center gap-3">
                    <Nav>
                        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} style={theme === "light" ? { color: "#1a237e" } : {}}>
                            <FontAwesomeIcon icon={faHome} className="me-1" style={theme === "light" ? { color: "#1a237e" } : {}} />
                            Home
                        </NavLink>
                        <NavLink to="/store" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} style={theme === "light" ? { color: "#1a237e" } : {}}>
                            <FontAwesomeIcon icon={faStore} className="me-1" style={theme === "light" ? { color: "#1a237e" } : {}} />
                            Store
                        </NavLink>
                        <NavLink to="/admin-login" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} style={theme === "light" ? { color: "#1a237e" } : {}}>
                            Admin Panel
                        </NavLink>
                        <NavLink to="/order-history" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} style={theme === "light" ? { color: "#1a237e" } : {}}>
                            <FontAwesomeIcon icon={faHistory} className="me-1 text-primary" style={theme === "light" ? { color: "#1a237e" } : {}} />
                            Order History
                        </NavLink>
                    </Nav>

                    <div className="d-flex align-items-center gap-2">
                        <a 
                            href="https://github.com/vivekjhariya" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-button"
                            aria-label="GitHub"
                        >
                            <FontAwesomeIcon icon={faGithub} style={theme === "light" ? { color: "#1a237e" } : {}} />
                        </a>
                        <a 
                            href="https://github.com/vivekjhariya" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-button"
                            aria-label="Portfolio"
                        >
                            <FontAwesomeIcon icon={faUser} style={theme === "light" ? { color: "#1a237e" } : {}} />
                        </a>
                        <ThemeToggle />
                        <button className="cart-button" onClick={() => navigate("/cart") }>
                            <FontAwesomeIcon icon={faShoppingCart} style={theme === "light" ? { color: "#1a237e" } : {}} />
                            {cartQuantity > 0 && (
                                <span className="cart-count" style={theme === "light" ? { background: "#1a237e", color: "#fff" } : {}}>{cartQuantity}</span>
                            )}
                        </button>
                    </div>
                </div>
            </Container>
        </nav>
    );
}

export default Navbar;
