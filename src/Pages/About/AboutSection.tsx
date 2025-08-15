import React from "react";
import "./AboutSection.scss";
import Button from "../../components/Button.tsx"; // adjust the import path to your actual Button component

const AboutSection: React.FC = () => {
  return (
    <section className="about-section">
        
      <div className="about">
        <div className="about-top">
            <p>About PodToPosts</p>
         </div> 
       <div className="about-left">
        <h2 className="about-number">1K+</h2>
        <p className="about-subtext">Posts created by podtoposts</p>
       </div>
      </div>

      <div className="about-right">
        <h1 className="about-heading">
          Turn your best podcast moments into social media posts that actually get shared.
          No design skills needed. Just 2 minutes per episode.
        </h1>
        <Button text="More about PodtoPosts" variant="primary" /> 
        {/* Assuming your Button supports a gradient style via props */}
      </div>
    </section>
  );
};

export default AboutSection;
