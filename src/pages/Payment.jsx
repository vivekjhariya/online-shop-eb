import { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUniversity, faCreditCard, faMoneyBillWave, faQrcode, faWallet } from "@fortawesome/free-solid-svg-icons";
import visaLogo from "../assets/visa.svg";
import mcLogo from "../assets/mastercard.svg";
import rupayLogo from "../assets/rupay.svg";
import paytmLogo from "../assets/paytm.svg";
import phonepeLogo from "../assets/phonepe.svg";
import gpayLogo from "../assets/gpay.svg";
import amazonpayLogo from "../assets/amazonpay.svg";
import hdfcLogo from "../assets/hdfc.svg";
import iciciLogo from "../assets/icici.svg";
import sbiLogo from "../assets/sbi.svg";
import axisLogo from "../assets/axis.svg";
import kotakLogo from "../assets/kotak.svg";
import simplLogo from "../assets/simpl.svg";
import lazypayLogo from "../assets/lazypay.svg";

const paymentOptions = [
  { key: "upi", label: "UPI", icon: faQrcode },
  { key: "netbanking", label: "Net Banking", icon: faUniversity },
  { key: "paylater", label: "Pay Later", icon: faWallet },
  { key: "card", label: "Credit/Debit Card", icon: faCreditCard },
  { key: "cod", label: "Cash on Delivery", icon: faMoneyBillWave },
];

const banks = [
  { name: "HDFC Bank", logo: hdfcLogo },
  { name: "ICICI Bank", logo: iciciLogo },
  { name: "State Bank of India", logo: sbiLogo },
  { name: "Axis Bank", logo: axisLogo },
  { name: "Kotak Mahindra Bank", logo: kotakLogo },
];

const upiApps = [
  { name: "Paytm", logo: paytmLogo },
  { name: "PhonePe", logo: phonepeLogo },
  { name: "Google Pay", logo: gpayLogo },
  { name: "Amazon Pay", logo: amazonpayLogo },
];

const payLaterApps = [
  { name: "Simpl", logo: simplLogo },
  { name: "LazyPay", logo: lazypayLogo },
];

const cardLogos = [visaLogo, mcLogo, rupayLogo];

export default function Payment() {
  const [activeKey, setActiveKey] = useState("upi");
  const [form, setForm] = useState({ upi: "", upiApp: "", bank: "", card: "", expiry: "", cvv: "", paylater: "", paylaterApp: "", name: "", cod: true });
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/order-summary");
  }

  return (
    <Container className="payment-page py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-lg border-0 animate__animated animate__fadeIn">
            <Card.Body>
              <h2 className="mb-4 text-center gradient-text">Choose Payment Method</h2>
              <div className="d-flex justify-content-center mb-4 flex-wrap gap-3">
                {paymentOptions.map(opt => (
                  <Button
                    key={opt.key}
                    variant={activeKey === opt.key ? "primary" : "outline-primary"}
                    className="d-flex align-items-center gap-2 px-4 py-2 payment-method-btn"
                    onClick={() => setActiveKey(opt.key)}
                    style={{ minWidth: 160, fontWeight: 600, fontSize: 18, boxShadow: activeKey === opt.key ? '0 0 10px #1a73e8' : 'none' }}
                  >
                    <FontAwesomeIcon icon={opt.icon} size="lg" />
                    {opt.label}
                  </Button>
                ))}
              </div>
              <div className="mt-4">
                {activeKey === "upi" && (
                  <Form onSubmit={handleSubmit} autoComplete="off" className="animate__animated animate__fadeIn">
                    <div className="mb-3 d-flex gap-3 align-items-center flex-wrap">
                      {upiApps.map(app => (
                        <Button
                          key={app.name}
                          variant={form.upiApp === app.name ? "primary" : "outline-secondary"}
                          className="d-flex align-items-center gap-2 px-3 py-2"
                          style={{ borderRadius: 12, background: form.upiApp === app.name ? '#f5f5f5' : '', border: form.upiApp === app.name ? '2px solid #1a73e8' : '' }}
                          onClick={e => { e.preventDefault(); setForm(f => ({ ...f, upiApp: app.name, upi: app.name.toLowerCase() + "@upi" })); }}
                        >
                          <img src={app.logo} alt={app.name} style={{ width: 32, height: 32, objectFit: 'contain' }} />
                          {app.name}
                        </Button>
                      ))}
                    </div>
                    <Form.Group className="mb-3" controlId="upi">
                      <Form.Label className="fw-bold">Or Enter UPI ID</Form.Label>
                      <Form.Control type="text" name="upi" value={form.upi} onChange={handleChange} placeholder="example@upi" />
                    </Form.Group>
                    <div className="d-grid">
                      <Button variant="success" size="lg" type="submit">Pay Now</Button>
                    </div>
                  </Form>
                )}
                {activeKey === "netbanking" && (
                  <Form onSubmit={handleSubmit} autoComplete="off" className="animate__animated animate__fadeIn">
                    <Form.Group className="mb-3" controlId="bank">
                      <Form.Label className="fw-bold">Select Your Bank</Form.Label>
                      <div className="d-flex gap-3 flex-wrap mb-2">
                        {banks.map(bank => (
                          <Button
                            key={bank.name}
                            variant={form.bank === bank.name ? "primary" : "outline-secondary"}
                            className="d-flex align-items-center gap-2 px-3 py-2"
                            style={{ borderRadius: 12, background: form.bank === bank.name ? '#f5f5f5' : '', border: form.bank === bank.name ? '2px solid #1a73e8' : '' }}
                            onClick={e => { e.preventDefault(); setForm(f => ({ ...f, bank: bank.name })); }}
                          >
                            <img src={bank.logo} alt={bank.name} style={{ width: 32, height: 32, objectFit: 'contain' }} />
                            {bank.name}
                          </Button>
                        ))}
                      </div>
                      <Form.Control type="text" name="bank" value={form.bank} onChange={handleChange} placeholder="Or type your bank name" />
                    </Form.Group>
                    <div className="d-grid">
                      <Button variant="success" size="lg" type="submit">Pay Now</Button>
                    </div>
                  </Form>
                )}
                {activeKey === "paylater" && (
                  <Form onSubmit={handleSubmit} autoComplete="off" className="animate__animated animate__fadeIn">
                    <div className="mb-3 d-flex gap-3 align-items-center flex-wrap">
                      {payLaterApps.map(app => (
                        <Button
                          key={app.name}
                          variant={form.paylaterApp === app.name ? "primary" : "outline-secondary"}
                          className="d-flex align-items-center gap-2 px-3 py-2"
                          style={{ borderRadius: 12, background: form.paylaterApp === app.name ? '#f5f5f5' : '', border: form.paylaterApp === app.name ? '2px solid #1a73e8' : '' }}
                          onClick={e => { e.preventDefault(); setForm(f => ({ ...f, paylaterApp: app.name, paylater: app.name })); }}
                        >
                          <img src={app.logo} alt={app.name} style={{ width: 32, height: 32, objectFit: 'contain' }} />
                          {app.name}
                        </Button>
                      ))}
                    </div>
                    <Form.Group className="mb-3" controlId="paylater">
                      <Form.Label className="fw-bold">Or Enter Pay Later ID</Form.Label>
                      <Form.Control type="text" name="paylater" value={form.paylater} onChange={handleChange} placeholder="Enter Pay Later ID" />
                    </Form.Group>
                    <div className="d-grid">
                      <Button variant="success" size="lg" type="submit">Pay Now</Button>
                    </div>
                  </Form>
                )}
                {activeKey === "card" && (
                  <Form onSubmit={handleSubmit} autoComplete="off" className="animate__animated animate__fadeIn">
                    <Form.Group className="mb-3" controlId="card">
                      <Form.Label className="fw-bold">Card Number</Form.Label>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <Form.Control type="text" name="card" value={form.card} onChange={handleChange} required maxLength={16} placeholder="1234 5678 9012 3456" style={{ flex: 1 }} />
                        {cardLogos.map((logo, i) => (
                          <img key={i} src={logo} alt="card-logo" style={{ width: 36, height: 24, objectFit: 'contain' }} />
                        ))}
                      </div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="expiry">
                      <Form.Label className="fw-bold">Expiry Date</Form.Label>
                      <Form.Control type="text" name="expiry" value={form.expiry} onChange={handleChange} required placeholder="MM/YY" maxLength={5} />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="cvv">
                      <Form.Label className="fw-bold">CVV</Form.Label>
                      <Form.Control type="password" name="cvv" value={form.cvv} onChange={handleChange} required maxLength={3} placeholder="***" />
                    </Form.Group>
                    <div className="d-grid">
                      <Button variant="success" size="lg" type="submit">Pay Now</Button>
                    </div>
                  </Form>
                )}
                {activeKey === "cod" && (
                  <Form onSubmit={handleSubmit} autoComplete="off" className="animate__animated animate__fadeIn">
                    <div className="mb-3 fw-bold">Pay with Cash on Delivery at your doorstep.</div>
                    <div className="d-grid">
                      <Button variant="success" size="lg" type="submit">Place Order</Button>
                    </div>
                  </Form>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
} 