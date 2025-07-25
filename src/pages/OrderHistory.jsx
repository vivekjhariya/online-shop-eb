import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Badge, Image, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const { theme } = useTheme();

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("orderHistory") || "[]");
    setOrders(history.reverse());
  }, []);

  // Theme-based styles
  const containerStyle = {
    background: theme === "dark"
      ? "linear-gradient(135deg, #232F3E 0%, #161E2D 100%)"
      : "linear-gradient(135deg, #f8fafc 0%, #e3f0ff 100%)",
    color: theme === "dark" ? "#fff" : "#232F3E",
    borderRadius: 18,
    boxShadow: theme === "dark"
      ? "0 4px 24px rgba(44,62,80,0.18)"
      : "0 4px 24px rgba(200,220,255,0.18)",
    maxWidth: 1000,
    margin: "2rem auto"
  };
  const cardStyle = {
    background: theme === "dark" ? "#232F3E" : "#fff",
    color: theme === "dark" ? "#fff" : "#232F3E",
    borderRadius: 12,
    boxShadow: theme === "dark"
      ? "0 2px 12px rgba(44,62,80,0.12)"
      : "0 2px 12px rgba(200,220,255,0.12)"
  };
  const productRowStyle = {
    background: theme === "dark" ? "#1a2233" : "#f8f9fa"
  };

  return (
    <Container className="order-history-page py-4" style={containerStyle}>
      <h2 className="mb-4 text-center gradient-text">
        <FontAwesomeIcon icon={faBoxOpen} className="me-2 text-primary" />Order History
      </h2>
      {orders.length === 0 ? (
        <div className="text-center py-5 animate__animated animate__fadeIn">
          <FontAwesomeIcon icon={faBoxOpen} size="5x" className="mb-3 text-secondary" style={{ opacity: 0.5 }} />
          <h4 className="mb-4 text-muted">No past orders found.</h4>
          <Button variant="primary" size="lg" onClick={() => navigate("/store")}>Shop Now</Button>
        </div>
      ) : (
        orders.map(order => (
          <Card key={order.id} className="mb-4 shadow-sm border-0 animate__animated animate__fadeIn" style={cardStyle}>
            <Card.Body>
              <Row>
                <Col md={8}>
                  <div className="fw-bold fs-5 mb-2">Order ID: {order.id}</div>
                  <div className="mb-1 text-muted">Date: {new Date(order.date).toLocaleString()}</div>
                  <div className="mb-1">Status: <Badge bg="success">{order.status}</Badge></div>
                  <div className="mb-1">Name: {order.shipping?.name}</div>
                  <div className="mb-1">Address: {order.shipping?.address}, {order.shipping?.state} - {order.shipping?.zipcode}</div>
                  <div className="mb-1">Email: {order.shipping?.email}</div>
                  <div className="mb-1">Phone: {order.shipping?.phone}</div>
                  <div className="mt-3">
                    <b>Products:</b>
                    {order.products && order.products.length > 0 ? (
                      <div className="mt-2">
                        {order.products.map((p, idx) => (
                          <Row key={idx} className="align-items-center mb-2 p-2 rounded" style={productRowStyle}>
                            <Col xs={2} className="text-center">
                              <Image src={p.imgUrl} alt={p.name} fluid rounded style={{ maxHeight: 40 }} />
                            </Col>
                            <Col xs={4}>
                              <div className="fw-bold">{p.name}</div>
                              <Badge bg="info" className="me-2">{p.brand}</Badge>
                              <Badge bg="secondary">{p.category}</Badge>
                            </Col>
                            <Col xs={2} className="text-center">₹{p.price}</Col>
                            <Col xs={2} className="text-center">Qty: {p.quantity}</Col>
                            <Col xs={2} className="text-end">₹{p.price * p.quantity}</Col>
                          </Row>
                        ))}
                      </div>
                    ) : (
                      <div className="text-muted">No product details found.</div>
                    )}
                  </div>
                </Col>
                <Col md={4} className="text-end">
                  <div className="fw-bold fs-4 text-primary">Total: ₹{order.total}</div>
                  <div className="mb-1">Subtotal: ₹{order.subtotal}</div>
                  <div className="mb-1">GST: ₹{order.gst}</div>
                  <div className="mb-1">Delivery: ₹{order.delivery}</div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))
      )}
    </Container>
  );
} 