import { Container, Form, Button } from "react-bootstrap";
import { useTheme } from "../context/ThemeContext";

export default function Support() {
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
      <h1 className="mb-4 gradient-text">Support</h1>
      <p style={{ fontSize: 18, opacity: 0.95 }}>Need help? Our support team is here for you 24/7. Reach out for any queries, issues, or feedback.</p>
      <h4 className="mt-4">Contact Us</h4>
      <Form style={{ maxWidth: 500, margin: "0 auto", background: theme === "dark" ? "rgba(44,62,80,0.7)" : "#fff", borderRadius: 12, padding: 24, boxShadow: theme === "dark" ? "0 2px 12px rgba(44,62,80,0.12)" : "0 2px 12px rgba(200,220,255,0.10)" }}>
        <Form.Group className="mb-3" controlId="supportName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your Name" defaultValue="vivek jhariya" style={{ background: theme === "dark" ? "#232F3E" : "#f8fafc", color: theme === "dark" ? "#fff" : "#232F3E" }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="supportEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Your Email" defaultValue="vivekjhariya241@gmail.com" style={{ background: theme === "dark" ? "#232F3E" : "#f8fafc", color: theme === "dark" ? "#fff" : "#232F3E" }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="supportMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="How can we help you?" style={{ background: theme === "dark" ? "#232F3E" : "#f8fafc", color: theme === "dark" ? "#fff" : "#232F3E" }} />
        </Form.Group>
        <Button variant="primary" disabled>Send (Demo Only)</Button>
      </Form>
      <div className="mt-4 text-muted small" style={{ color: theme === "dark" ? "#BDC3C7" : "#374151" }}>
        Or email us at <a href="mailto:vivekjhariya241@gmail.com" style={{ color: theme === "dark" ? "#FF9900" : "#1a237e", textDecoration: "underline" }}>vivekjhariya241@gmail.com</a><br/>By vivek jhariya | GO Shop Pvt. Ltd.
      </div>
    </Container>
  );
} 