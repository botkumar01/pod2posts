import { Link } from "react-router-dom";
import React from "react";
import But1 from "./components/But1";
import But2 from "./components/But2";
import GradientText from "./components/GradientText";
import InfoCard from "./components/InfoCard";
import audioIcon from "./assets/audio.png";
import Whitebutton from "./components/whitebutton";
import PodcastCard from "./components/podcastCard";
import FeatureCard from "./components/FeatureCard";
import Footer from "./Pages/Footer";
const App: React.FC = () => {
  return (
    <div style={{ background: "black", display: "flex", flexDirection: "column", }}>
      <But1 />
      <But2 />
      <Whitebutton />
      <GradientText text="Get Started" />
      <div style={{ padding: "20px" }}>
        <InfoCard
          icon={audioIcon}
          title="Audio-Only Posts Get Ignored"
          description="Social media algorithms favor visual content over audio links"
          linkText="Low reach"
          linkUrl="#"
        />
        <PodcastCard
          title="Connect Your Podcast"
          description="Just paste your RSS feed - works with any host"
          list={[
            "Works with any podcast platform",
            "Automatic episode detection",
            "No manual uploading"
          ]}
        />
        
        <FeatureCard
          title="Smart Content Extraction"
          description="Post to Facebook, Twitter, LinkedIn and more with one click"
          iconSrc={audioIcon} // replace with actual icon URL
        />
      </div>

      {/* Link to FAQ Page */}
      <div style={{ padding: "20px" }}>
        <Link to="/faq" style={{ color: "white", textDecoration: "underline" }}>
          View All FAQs
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default App;
