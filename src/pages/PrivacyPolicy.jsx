import { Container } from "react-bootstrap";
import { useTheme } from "../context/ThemeContext";

export default function PrivacyPolicy() {
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
      <h1 className="mb-4 gradient-text">Privacy Policy</h1>
      <p style={{ fontSize: 18, opacity: 0.95 }}>At GO Shop Pvt. Ltd., we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform.</p>
      <h4 className="mt-4">Information We Collect</h4>
      <ul>
        <li>Personal details (name, email, address, phone) for order processing and support.</li>
        <li>Order and payment information for secure transactions.</li>
        <li>Usage data to improve our services and personalize your experience.</li>
      </ul>
      <h4 className="mt-4">How We Use Your Information</h4>
      <ul>
        <li>To process orders and provide customer support.</li>
        <li>To send order updates, offers, and important notifications.</li>
        <li>To improve our website, products, and services.</li>
      </ul>
      <h4 className="mt-4">Data Security</h4>
      <p>We use industry-standard security measures to protect your data. Your information is never sold or shared with third parties except as required for order fulfillment or by law.</p>
      <h4 className="mt-4">Contact Us</h4>
      <p>If you have any questions about our privacy practices, contact us at <a href="mailto:vivekjhariya241@gmail.com" style={{ color: theme === "dark" ? "#FF9900" : "#1a237e", textDecoration: "underline" }}>vivekjhariya241@gmail.com</a>.</p>
      <div className="mt-4 text-muted small" style={{ color: theme === "dark" ? "#BDC3C7" : "#374151" }}>
        This policy is effective as of {new Date().getFullYear()}.
        <br />By vivek jhariya | GO Shop Pvt. Ltd.
      </div>
    </Container>
  );
} 