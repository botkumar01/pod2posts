import React from "react";
import "./ButtonStyles.css";

interface GradientTextProps {
  text: string;
}

const GradientText: React.FC<GradientTextProps> = ({ text }) => {
  return <span className="gradient-text" >{text}</span>;
};

export default GradientText;
