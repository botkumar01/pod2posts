import React from "react";
import { motion } from "framer-motion"; // import motion directly
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
    <motion.div
      initial={{ opacity: 0, y: 50 }}          // start below
      whileInView={{ opacity: 1, y: 0 }}      // animate to normal position
      transition={{ delay, duration: 0.8, ease: "easeOut" }} // use the delay prop
      viewport={{ once: true, amount: 0.5 }}  // animate when 50% visible, once
      className="info-card-container"         // optional wrapper class
    >
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
    </motion.div>
  );
};

export default InfoCard;
