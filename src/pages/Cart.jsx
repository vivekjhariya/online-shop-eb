import { useShoppingCart } from "../context/ShoppingCartContext";
import { Container, Row, Col, Button, Card, Image, Form, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart, updateCartItemQuantity, getCartTotal, getItem } = useShoppingCart();
  const navigate = useNavigate();

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => {
    const product = getItem(item.id);
    return total + (product?.price || 0) * item.quantity;
  }, 0);
  // GST 18%
  const gst = Math.round(subtotal * 0.18);
  // Delivery charge 20%
  const delivery = Math.round(subtotal * 0.20);
  // Grand total
  const grandTotal = subtotal + gst + delivery;

  return (
    <Container className="cart-page py-4">
      <h2 className="mb-4 text-center gradient-text">
        <FontAwesomeIcon icon={faShoppingCart} className="me-2 text-primary" />
        Your Shopping Cart
      </h2>
      {cartItems.length === 0 ? (
        <div className="text-center py-5">
          <h4>Your cart is empty!</h4>
          <Button variant="primary" className="mt-3" onClick={() => navigate("/store")}>Go to Store</Button>
        </div>
      ) : (
        <Card className="shadow-lg border-0 animate__animated animate__fadeIn">
          <Card.Body>
            {cartItems.map(item => {
              const product = getItem(item.id);
              return (
                <Row key={item.id} className="align-items-center mb-4 cart-item-row p-2 rounded" style={{ background: '#f8f9fa' }}>
                  <Col xs={12} md={2} className="text-center mb-2 mb-md-0">
                    <Image src={product?.imgUrl} alt={product?.name} fluid rounded style={{ maxHeight: 70, boxShadow: '0 2px 8px #ddd' }} />
                  </Col>
                  <Col xs={12} md={4} className="cart-item-name">
                    <div className="fw-bold fs-5 mb-1">{product?.name}</div>
                    <div className="mb-1"><Badge bg="info" className="me-2">{product?.brand}</Badge> <Badge bg="secondary">{product?.category}</Badge></div>
                    <div className="text-muted small mb-1">{product?.description}</div>
                    <div className="text-warning mb-1">
                      <FontAwesomeIcon icon={faStar} /> {product?.rating}
                    </div>
                  </Col>
                  <Col xs={6} md={2} className="cart-item-price fw-bold fs-6">
                    ₹{product?.price}
                  </Col>
                  <Col xs={6} md={2} className="cart-item-qty">
                    <Form.Control
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={e => updateCartItemQuantity(item.id, Number(e.target.value))}
                      style={{ width: 70, display: 'inline-block' }}
                    />
                  </Col>
                  <Col xs={12} md={2} className="cart-item-actions text-end mt-2 mt-md-0">
                    <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>
                      <FontAwesomeIcon icon={faTrash} /> Remove
                    </Button>
                  </Col>
                </Row>
              );
            })}
            <hr />
            <Row className="mb-2">
              <Col xs={6} className="fw-bold">Subtotal</Col>
              <Col xs={6} className="text-end">₹{subtotal}</Col>
            </Row>
            <Row className="mb-2">
              <Col xs={6} className="fw-bold">GST (18%)</Col>
              <Col xs={6} className="text-end">₹{gst}</Col>
            </Row>
            <Row className="mb-2">
              <Col xs={6} className="fw-bold">Delivery Charges</Col>
              <Col xs={6} className="text-end">₹{delivery}</Col>
            </Row>
            <Row className="mb-3">
              <Col xs={6} className="fw-bold fs-5 text-primary">Grand Total</Col>
              <Col xs={6} className="text-end fs-5 text-primary">₹{grandTotal}</Col>
            </Row>
            <Row className="align-items-center">
              <Col md={6} className="fw-bold fs-5">
                <span className="text-success">Total Items: {cartItems.reduce((sum, i) => sum + i.quantity, 0)}</span>
              </Col>
              <Col md={6} className="text-end">
                <Button variant="success" size="lg" onClick={() => navigate("/shipping")}>Proceed to Checkout</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
} 