import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

export default function Logo({ size = 32 }) {
  return (
    <span style={{ display: "flex", alignItems: "center", fontWeight: 700, fontSize: size, color: "#1a73e8", letterSpacing: 1 }}>
      <FontAwesomeIcon icon={faShoppingBag} className="me-2" />
      VJ <span style={{ color: "#ff9800", marginLeft: 4 }}>GO Shop</span>
    </span>
  );
} 