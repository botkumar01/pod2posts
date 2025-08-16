
import "./PricingPage.scss";

import GradientText from "../components/GradientText";
import PricingCard from "../components/PricingCard/PricingCard";
import Nav from "../components/Nav/Nav";

import gradientTick from "../assets/price_imgs/gradient_tick.png";
import type { JSX } from "react";
import Button from "../components/Button";

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
    <>
      <Nav
          items={[
            { title: "Platform", link: "/" },
            { title: "Solution", link: "/solution" },
            { title: "Pricing", link: "/pricing" },
            { title: "FAQ", link: "/faq" },
            { title: <Button variant="primary" />, link: "/cta" },
          ]}
        />
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
            color="white"
            points={[
              "5 episodes / month",
              "All Carousel Templates",
              "Basic Branding (Colors & Logo) ",
              "PNG/JPG Support",
              "Standard Quality Support"
            ]}
          />
          <PricingCard
            title="Professional"
            description="Recommended for weekly podcasts."
            originalPrice="$29"
            discountedPrice="$19"
            color="purple"
            points={[
              "Unlimited Episodes",
              "All Premium Templates",
              "Custom Branding Colors (Logos, Fonts, Colors)",
              "Saved Work Dashboard",
              "No Watermarks",
              "Priority Support",
              "Priority Access to new features",
              "Analytics Dashboard"
            ]}
          />
          <PricingCard
            title="Agency"
            description="Recommended for weekly podcasts."
            originalPrice="$29"
            discountedPrice="$19"
            color="orange"
            points={[
              "Everything in Professional",
              "Multiple Podcasts Account",
              "White label Option",
              "PNG/JPG Support",
              "Standard Quality Support",
              "Team Access",
              "Advanced Analytics and Reporting",
              "API access for custom integrations"
            ]}
          />
          {/* <PricingCard />
          <PricingCard /> */}
        </div>

      </div>
    </>
  );
};

export default PricingPage;