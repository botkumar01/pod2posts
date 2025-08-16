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
  delay?: number;
};

const PodcastCard: React.FC<PodcastCardProps> = ({ title, description, list, number, position, delay }) => {
  return (
    <motion.div
      className={`podcast-card position ${position} n${number}`}
      data-number={`${number}`}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: 0.3,
        delay: delay || 0,
      }}
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
