import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useShoppingCart } from "../context/ShoppingCartContext";
import TrackOrder from "../components/TrackOrder";

export default function OrderSummary() {
  const [shipping, setShipping] = useState(null);
  const navigate = useNavigate();
  const { clearCart, cartItems, getItem } = useShoppingCart();

  useEffect(() => {
    const info = localStorage.getItem("shippingInfo");
    if (info) setShipping(JSON.parse(info));
    // Prepare order products with details
    const products = cartItems.map(item => {
      const product = getItem(item.id);
      return {
        ...product,
        quantity: item.quantity
      };
    });
    // Calculate total
    const subtotal = products.reduce((sum, p) => sum + (p.price || 0) * p.quantity, 0);
    const gst = Math.round(subtotal * 0.18);
    const delivery = Math.round(subtotal * 0.20);
    const grandTotal = subtotal + gst + delivery;
    clearCart();
    // Save order to history
    const orderHistory = JSON.parse(localStorage.getItem("orderHistory") || "[]");
    const newOrder = {
      id: Date.now(),
      date: new Date().toISOString(),
      shipping: info ? JSON.parse(info) : {},
      products,
      subtotal,
      gst,
      delivery,
      total: grandTotal,
      status: "Delivered"
    };
    orderHistory.push(newOrder);
    localStorage.setItem("orderHistory", JSON.stringify(orderHistory));
  }, []);

  return (
    <Container className="order-summary-page py-4">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-lg border-0">
            <Card.Body className="text-center">
              <FontAwesomeIcon icon={faCheckCircle} size="3x" className="text-success mb-3" />
              <h2 className="mb-3">Order Placed Successfully!</h2>
              <p className="mb-4">Thank you for shopping with us. Your order has been placed and will be shipped soon.</p>
              {shipping && (
                <div className="mb-4 text-start">
                  <h5>Shipping Details:</h5>
                  <div><b>Name:</b> {shipping.name}</div>
                  <div><b>Email:</b> {shipping.email}</div>
                  <div><b>Phone:</b> {shipping.phone}</div>
                  <div><b>Address:</b> {shipping.address}, {shipping.state} - {shipping.zipcode}</div>
                </div>
              )}
              <Button variant="primary" size="lg" onClick={() => navigate("/store")}>Continue Shopping</Button>
              <div className="mt-4">
                <TrackOrder />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
} 