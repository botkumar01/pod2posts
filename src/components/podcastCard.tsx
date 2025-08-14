import React from "react";
import "./podcastCard.scss";
import GradientText from "./GradientText";
interface PodcastCardProps {
  title: string;
  description: string;
  list: string[]; // array for multiple lines
}

const PodcastCard: React.FC<PodcastCardProps> = ({ title, description, list }) => {
  return (
    <div className="podcast-card">
      <GradientText text="Connect Your Podcast" />
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
