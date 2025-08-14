import React from "react";
import "../styles/GradientButton.css";

interface GradientTextProps {
  text: string;
}

const GradientText: React.FC<GradientTextProps> = ({ text }) => {
  return <span className="gradient-text" >{text}</span>;
};

export default GradientText;
