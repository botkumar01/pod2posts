
import "./PricingPage.scss";

import GradientText from "../components/GradientText";
import PricingCard from "../components/PricingCard/PricingCard";

import gradientTick from "../assets/price_imgs/gradient_tick.png";
import type { JSX } from "react";

const InfoPoint: React.FC<{ text: string | JSX.Element }> = ({ text }) => {
  return (
    <span className="infoPoint">
      <img src={gradientTick} alt="" />
      {text}
    </span>
  )
}

const PricingPage: React.FC = () => {
  return (
    <div className="pricing">
      <h1>
        <GradientText text="Pricing" />
      </h1>
      <h3>
        PodToPost Founding Members Launch Offer
      </h3>
      <div className="info">
        <InfoPoint 
          text={
            <span><b>50% OFF for LIFE</b> for the first 50 podcasters who sign up</span>
          }
        />
        <InfoPoint 
          text={
            <span>Available on all pricing tiers (Starter, Professional, Agency)</span>
          }
        />
        <InfoPoint 
          text={
            <span>Limited - this opportunity never returns</span>
          }
        />
      </div>

      <div className="tiers">
        <PricingCard
          title="Starter"
          description="Recommended for weekly podcasts."
          originalPrice="$29"
          discountedPrice="$19"
          color="grey"
          points={[
            "1 Podcast",
            "10 Episodes",
            "Basic Analytics",
            "Email Support"
          ]}
        />
        <PricingCard
          title="Professional"
          description="Recommended for weekly podcasts."
          originalPrice="$29"
          discountedPrice="$19"
          color="orange"
          points={[
            "1 Podcast",
            "10 Episodes",
            "Basic Analytics",
            "Email Support"
          ]}
        />
        <PricingCard
          title="Agency"
          description="Recommended for weekly podcasts."
          originalPrice="$29"
          discountedPrice="$19"
          color="purple"
          points={[
            "1 Podcast",
            "10 Episodes",
            "Basic Analytics",
            "Email Support"
          ]}
        />
        {/* <PricingCard />
        <PricingCard /> */}
      </div>

    </div>
  );
};

export default PricingPage;