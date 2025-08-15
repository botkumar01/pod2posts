import React from "react";
import "./podcastCard.scss";
import GradientText from "./GradientText";
import { motion } from "framer-motion";

interface PodcastCardProps {
  title: string;
  description: string;
  list: string[];
  number: number;
  position?: "bottom-left" | "top-left";
  delay?: number; // optional animation delay
}

const PodcastCard: React.FC<PodcastCardProps> = ({
  title,
  description,
  list,
  number,
  position,
  delay = 0
}) => {
  return (
    <motion.div
      className={`podcast-card position ${position} n${number}`}
      data-number={`${number}`}
      initial={{ opacity: 0, x: -50 }}       // start 50px left
      whileInView={{ opacity: 1, x: 0 }}     // slide to normal position
      transition={{ delay, duration: 0.8, ease: "easeOut" }} // use delay prop
      viewport={{ once: true, amount: 0.5 }}  // animate once when 50% visible
    >
      <GradientText text={title} />
      <p className="podcast-description">{description}</p>

      {/* Multi-line list */}
      <div className="podcast-list">
        {list.map((item, index) => (
          <span key={index} className="podcast-list-item">
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default PodcastCard;
