import React from "react";
import icon from "../assets/audio.png"; // replace with your actual file name
import "./FeatureCard.scss";

interface CardProps {
  title: string;
  description: string;
  iconSrc?: string;
}

const FeatureCard: React.FC<CardProps> = ({
  title,
  description,
  iconSrc = icon,
}) => {
  return (
    <div className="Fcard">
      <div className="Fcard-icon">
        <img src={iconSrc} alt={title} />
      </div>
      <div className="Fcard-content">
        <h3 className="Fcard-title">{title}</h3>
        <p className="Fcard-description">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
