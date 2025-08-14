import React from "react";
import "./InfoCard.css";

interface InfoCardProps {
  icon: string; // path to image
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  title,
  description,
  linkText,
  linkUrl
}) => {
  return (
    <div className="info-card">
      {/* Icon container */}
      <div className="icon-container">
        <img src={icon} alt="icon" className="icon-image" />
      </div>

      {/* Text container */}
      <div className="text-container">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <a href={linkUrl} className="card-link">
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default InfoCard;
