import React from "react";
import "./podcastCard.scss";
import GradientText from "./GradientText";
interface PodcastCardProps {
  title: string;
  description: string;
  list: string[];
  number: number;
  position?: "bottom-left" | "top-left";
};

const PodcastCard: React.FC<PodcastCardProps> = ({ title, description, list, number, position }) => {
  return (
    <div
      className={`podcast-card position ${position} n${number}`}
      data-number={`${number}`}
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

    </div>
  );
};

export default PodcastCard;
