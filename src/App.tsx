import { Link } from "react-router-dom";
import React from "react";

import Button from "./components/Button";
import GradientText from "./components/GradientText";
import InfoCard from "./components/InfoCard";
import audioIcon from "./assets/audio.png";
import PodcastCard from "./components/podcastCard";
import FeatureCard from "./components/FeatureCard";
import FAQPage from "./Pages/FAQPage";
// import CardsSection from "../CardSec/CardSection"; // ./ means same folder level
import CardsSection from "./Pages/CardSec/CardSection";
// ...existing code...
import Footer from "./Pages/Footer";
import FrontPage from "./Pages/FrontPage"; // Adjust the import path as necessary
import FrontImg from "./assets/FrontImg.png"; // Adjust the import path as necessary
import AboutSection from "./Pages/About/AboutSection";
const App: React.FC = () => {
  return (
    <div style={{ background: "white", display: "flex", flexDirection: "column", }}>
      {/* <Button text="Get Started" variant="primary" />
      <br />
      <br />
      <Button text="Get Started" variant="secondary" />
      <br />
      <br />
      <Button text="Get Started" variant="white" />
      <br />
      <br />
      <GradientText text="Get Started" />
      <br />
      <br /> */}
      <div style={{ padding: "20px" }}>
         <br />
      <br />
       <br />
      <br />
        <FrontPage />
         <br />
      <br />
       <br />
      <br />
      <img src={FrontImg} alt="Front" style={{ width: "100%" }} />
      <br />
      <br />
      <br />
      <br />
        <CardsSection />
        <br />
        <br />
        <AboutSection />
        <PodcastCard
          title="Connect Your Podcast"
          description="Just paste your RSS feed - works with any host"
          list={[
            "Works with any podcast platform",
            "Automatic episode detection",
            "No manual uploading"
          ]}
        />
        <br />
        <br />
        
        <FeatureCard
          title="Smart Content Extraction"
          description="Post to Facebook, Twitter, LinkedIn and more with one click"
          iconSrc={audioIcon} // replace with actual icon URL
        />
        <br />
        <br />
      </div>

      {/* Link to FAQ Page */}
      {/* <div style={{ padding: "20px" }}>
        <Link to="/faq" style={{ color: "white", textDecoration: "underline" }}>
          View All FAQs
        </Link>
      </div> */}

        <FAQPage />

      <Footer />
    </div>
  );
};

export default App;
