import { Container } from "react-bootstrap";
import { useTheme } from "../context/ThemeContext";

export default function Returns() {
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
      <h1 className="mb-4 gradient-text">Return Policy</h1>
      <p style={{ fontSize: 18, opacity: 0.95 }}>At GO Shop Pvt. Ltd., we want you to be completely satisfied with your purchase. If you are not happy, you may return most items within 7 days of delivery.</p>
      <h4 className="mt-4">Return Conditions</h4>
      <ul>
        <li>Items must be unused, in original packaging, and with all tags attached.</li>
        <li>Some items (e.g., perishable goods, personal care) are non-returnable.</li>
        <li>Return shipping costs are the responsibility of the customer unless the item is defective or incorrect.</li>
      </ul>
      <h4 className="mt-4">How to Return</h4>
      <p>Contact our support team at <a href="mailto:vivekjhariya241@gmail.com" style={{ color: theme === "dark" ? "#FF9900" : "#1a237e", textDecoration: "underline" }}>vivekjhariya241@gmail.com</a> with your order details to initiate a return.</p>
      <div className="mt-4 text-muted small" style={{ color: theme === "dark" ? "#BDC3C7" : "#374151" }}>
        By vivek jhariya | GO Shop Pvt. Ltd.
      </div>
    </Container>
  );
} 