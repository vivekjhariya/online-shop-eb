import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck, faTruck, faShippingFast, faBoxOpen } from "@fortawesome/free-solid-svg-icons";

const steps = [
  { label: "Order Placed", icon: faClipboardCheck, color: "#1a73e8" },
  { label: "Shipped", icon: faTruck, color: "#fbbc05" },
  { label: "Out for Delivery", icon: faShippingFast, color: "#34a853" },
  { label: "Delivered", icon: faBoxOpen, color: "#ea4335" },
];

export default function TrackOrder() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (activeStep < steps.length - 1) {
      const timer = setTimeout(() => setActiveStep(activeStep + 1), 10000);
      return () => clearTimeout(timer);
    }
  }, [activeStep]);

  return (
    <div className="track-order-container py-4">
      <Row className="justify-content-center align-items-center">
        {steps.map((step, idx) => (
          <Col key={step.label} xs={3} className="text-center">
            <div className={`track-step ${activeStep === idx ? 'active-step' : ''}`}
                 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <FontAwesomeIcon
                icon={step.icon}
                size="2x"
                spin={activeStep === idx}
                style={{ color: activeStep >= idx ? step.color : '#ccc', transition: 'color 0.3s' }}
              />
              <div className={`fw-bold mt-2 ${activeStep === idx ? 'text-primary' : 'text-muted'}`}>{step.label}</div>
            </div>
            {idx < steps.length - 1 && (
              <div className="track-progress-bar" style={{ height: 4, background: activeStep > idx ? '#1a73e8' : '#ccc', margin: '0 0.5rem', borderRadius: 2 }} />
            )}
          </Col>
        ))}
      </Row>
    </div>
  );
} 