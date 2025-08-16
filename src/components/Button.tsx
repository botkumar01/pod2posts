import React from "react";
import "../styles/GradientButton.css";

type ButtonVariant = "primary" | "secondary" | "white" | "purple" | "orange";

const Button: React.FC<{ text?: string, variant: ButtonVariant }> = ({ text, variant }) => {
  return <button className={`btn ${variant}`}>{text || "Get Started"}</button>;
};

export default Button;
