import { Container, Accordion } from "react-bootstrap";
import { useTheme } from "../context/ThemeContext";

export default function FAQ() {
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
      <h1 className="mb-4 gradient-text">Frequently Asked Questions (FAQ)</h1>
      <Accordion defaultActiveKey="0" style={{ background: "transparent" }}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>How do I place an order?</Accordion.Header>
          <Accordion.Body>
            Browse products, add to cart, and proceed to checkout. Follow the on-screen instructions to complete your purchase.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>What payment methods are accepted?</Accordion.Header>
          <Accordion.Body>
            We accept UPI, Net Banking, Credit/Debit Cards, Pay Later, and Cash on Delivery (COD).
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How can I track my order?</Accordion.Header>
          <Accordion.Body>
            After shipping, you will receive a tracking link via email/SMS. You can also view order status in your account.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>How do I return an item?</Accordion.Header>
          <Accordion.Body>
            Contact our support at <a href="mailto:vivekjhariya@gmail.com" style={{ color: theme === "dark" ? "#FF9900" : "#1a237e", textDecoration: "underline" }}>vivekjhariya@gmail.com</a> with your order details to initiate a return.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>How do I contact support?</Accordion.Header>
          <Accordion.Body>
            Email us at <a href="mailto:vivekjhariya@gmail.com" style={{ color: theme === "dark" ? "#FF9900" : "#1a237e", textDecoration: "underline" }}>vivekjhariya@gmail.com</a> or visit the Support page for more options.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="mt-4 text-muted small" style={{ color: theme === "dark" ? "#BDC3C7" : "#374151" }}>
        By vivek jhariya | GO Shop Pvt. Ltd.
      </div>
    </Container>
  );
} 