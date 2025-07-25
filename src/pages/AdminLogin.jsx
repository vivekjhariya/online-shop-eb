import { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield, faLock, faSignInAlt, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (form.username === "admin" && form.password === "admin") {
      setError("");
      localStorage.setItem("isAdminAuthenticated", "true");
      navigate("/admin");
    } else {
      setError("Incorrect username or password. Hint: Both are 'admin'.");
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
  }

  return (
    <Container className="admin-login-page py-5 d-flex align-items-center justify-content-center" style={{ minHeight: "80vh" }}>
      <Row className="w-100 justify-content-center">
        <Col md={6} lg={5}>
          <Card className={`shadow-lg border-0 animate__animated animate__fadeIn ${shake ? 'animate__shakeX' : ''}`}
                style={{ background: "linear-gradient(135deg, #f8fafc 60%, #e3f0ff 100%)" }}>
            <Card.Body>
              <div className="text-center mb-4">
                <FontAwesomeIcon icon={faUserShield} size="2x" className="text-primary mb-2" />
                <h2 className="gradient-text">Admin Login</h2>
                <p className="text-muted">Enter your credentials to access the admin dashboard.</p>
              </div>
              <Form onSubmit={handleSubmit} autoComplete="off">
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label><FontAwesomeIcon icon={faUserShield} className="me-2 text-secondary" />Username</Form.Label>
                  <Form.Control type="text" name="username" value={form.username} onChange={handleChange} required placeholder="Enter username" autoFocus />
                </Form.Group>
                <Form.Group className="mb-4" controlId="password">
                  <Form.Label><FontAwesomeIcon icon={faLock} className="me-2 text-secondary" />Password</Form.Label>
                  <Form.Control type="password" name="password" value={form.password} onChange={handleChange} required placeholder="Enter password" />
                </Form.Group>
                {error && (
                  <Alert variant="danger" className="animate__animated animate__shakeX d-flex align-items-center gap-2">
                    <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
                    {error}
                  </Alert>
                )}
                <div className="d-grid mt-3">
                  <Button variant="primary" size="lg" type="submit" className="d-flex align-items-center justify-content-center gap-2">
                    <FontAwesomeIcon icon={faSignInAlt} />
                    Login
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
} 