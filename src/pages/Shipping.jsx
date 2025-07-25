import { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faUser, faEnvelope, faPhone, faMap, faLocationArrow } from "@fortawesome/free-solid-svg-icons";

const statesOfIndia = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

export default function Shipping() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    state: "",
    zipcode: ""
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("shippingInfo", JSON.stringify(form));
    navigate("/payment");
  }

  return (
    <Container className="shipping-page py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-lg border-0 animate__animated animate__fadeIn">
            <Card.Body>
              <h2 className="mb-4 text-center gradient-text">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 text-primary" />
                Shipping Address
              </h2>
              <Form onSubmit={handleSubmit} autoComplete="off">
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label><FontAwesomeIcon icon={faUser} className="me-2 text-secondary" />Name</Form.Label>
                  <Form.Control type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label><FontAwesomeIcon icon={faEnvelope} className="me-2 text-secondary" />Email</Form.Label>
                  <Form.Control type="email" name="email" value={form.email} onChange={handleChange} required placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label><FontAwesomeIcon icon={faPhone} className="me-2 text-secondary" />Phone Number</Form.Label>
                  <Form.Control type="tel" name="phone" value={form.phone} onChange={handleChange} required pattern="[0-9]{10}" maxLength={10} placeholder="10-digit mobile number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="address">
                  <Form.Label><FontAwesomeIcon icon={faMap} className="me-2 text-secondary" />Address</Form.Label>
                  <Form.Control as="textarea" name="address" value={form.address} onChange={handleChange} required rows={2} placeholder="Full address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="state">
                  <Form.Label><FontAwesomeIcon icon={faLocationArrow} className="me-2 text-secondary" />State</Form.Label>
                  <Form.Select name="state" value={form.state} onChange={handleChange} required>
                    <option value="">Select State</option>
                    {statesOfIndia.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-4" controlId="zipcode">
                  <Form.Label><FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 text-secondary" />Zipcode</Form.Label>
                  <Form.Control type="text" name="zipcode" value={form.zipcode} onChange={handleChange} required pattern="[0-9]{6}" maxLength={6} placeholder="6-digit pincode" />
                </Form.Group>
                <div className="d-grid">
                  <Button variant="primary" size="lg" type="submit">Continue to Payment</Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
} 