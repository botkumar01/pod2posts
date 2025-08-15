import React from "react";
import MotionDiv from "./MotionDiv"; // import the reusable MotionDiv
import "./InfoCard.css";

interface InfoCardProps {
  icon: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  delay?: number; // optional delay for animation
}

const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  title,
  description,
  linkText,
  linkUrl,
  delay = 0
}) => {
  return (
    <MotionDiv delay={delay}>
      <div className="info-card">
        <div className="icon-container">
          <img src={icon} alt="icon" className="icon-image" />
        </div>

        <div className="text-container">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
          <a href={linkUrl} className="card-link">
            {linkText}
          </a>
        </div>
      </div>
    </MotionDiv>
  );
};

export default InfoCard;
