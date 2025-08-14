import React from "react";
import InfoCard from "../../components/InfoCard"; // your InfoCard component
import audioIcon from "../../assets/audio.png"; // replace with actual paths
import videoIcon from "../../assets/clock.png";
import imageIcon from "../../assets/circles.png";

import "./CardSection.scss";

const CardSection: React.FC = () => {
  return (
    <div className="cards-container">
      <InfoCard
        icon={audioIcon}
        title="Audio-Only Posts Get Ignored"
        description="Social media algorithms favor visual content over audio links"
        linkText="Low reach"
        linkUrl="#"
      />

      <InfoCard
        icon={videoIcon}
        title="Videos Boost Engagement"
        description="Videos capture attention better than audio-only posts"
        linkText="High engagement"
        linkUrl="#"
      />

      <InfoCard
        icon={imageIcon}
        title="Images Drive Clicks"
        description="Image posts are shared more often than text or audio"
        linkText="More shares"
        linkUrl="#"
      />
    </div>
  );
};

export default CardSection;
