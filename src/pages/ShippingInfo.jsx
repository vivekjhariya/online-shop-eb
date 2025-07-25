import { Container } from "react-bootstrap";
import { useTheme } from "../context/ThemeContext";

export default function ShippingInfo() {
  const { theme } = useTheme ? useTheme() : { theme: "dark" };
  return (
    <Container
      className={`py-5 animate__animated animate__fadeIn`}
      style={{
        background: theme === "dark"
          ? "linear-gradient(135deg, #232F3E 0%, #161E2D 100%)"
          : "linear-gradient(135deg, #f8fafc 0%, #e3f0ff 100%)",
        color: theme === "dark" ? "#fff" : "#232F3E",
        borderRadius: 18,
        boxShadow: theme === "dark"
          ? "0 4px 24px rgba(44,62,80,0.18)"
          : "0 4px 24px rgba(200,220,255,0.18)",
        maxWidth: 900,
        margin: "2rem auto"
      }}
    >
      <h1 className="mb-4 gradient-text">Shipping Information</h1>
      <p style={{ fontSize: 18, opacity: 0.95 }}>GO Shop Pvt. Ltd. offers fast, reliable, and eco-friendly shipping across India.</p>
      <h4 className="mt-4">Shipping Policy</h4>
      <ul>
        <li>Orders are processed within 1-2 business days.</li>
        <li>Standard delivery time is 2-7 business days depending on your location.</li>
        <li>Free shipping on orders above ₹499. A nominal fee applies for lower amounts.</li>
      </ul>
      <h4 className="mt-4">Tracking</h4>
      <p>Once your order is shipped, you will receive a tracking link via email/SMS.</p>
      <h4 className="mt-4">Contact</h4>
      <p>For shipping questions, contact <a href="mailto:vivekjhariya241@gmail.com" style={{ color: theme === "dark" ? "#FF9900" : "#1a237e", textDecoration: "underline" }}>vivekjhariya241@gmail.com</a>.</p>
      <div className="mt-4 text-muted small" style={{ color: theme === "dark" ? "#BDC3C7" : "#374151" }}>
        By vivek jhariya | GO Shop Pvt. Ltd.
      </div>
    </Container>
  );
} 