
import "./PricingPage.scss";

import GradientText from "../components/GradientText";
import PricingCard from "../components/PricingCard/PricingCard";
import Nav from "../components/Nav/Nav";

import gradientTick from "../assets/price_imgs/gradient_tick.png";
import type { JSX } from "react";
import Button from "../components/Button";

import purpleComingSoon from "../assets/price_imgs/purple_coming_soon.png";
import orangeComingSoon from "../assets/price_imgs/orange_coming_soon.png";

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
            originalPrice="$19"
            discountedPrice="$9.50"
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
            originalPrice="$39"
            discountedPrice="$19.50"
            color="purple"
            points={[
              "Unlimited Episodes",
              "All Premium Templates",
              "Custom Branding Colors (Logos, Fonts, Colors)",
              "Saved Work Dashboard",
              "No Watermarks",
              "Priority Support",
              <>Priority Access to new features <img src={purpleComingSoon} alt="" /></>,
              <>Analytics Dashboard <img src={purpleComingSoon} alt="" /></>
            ]}
          />
          <PricingCard
            title="Agency"
            description="Recommended for weekly podcasts."
            originalPrice="$79"
            discountedPrice="$39.50"
            color="orange"
            points={[
              "Everything in Professional",
              "Multiple Podcasts Account",
              "White label Option",
              "PNG/JPG Support",
              "Standard Quality Support",
              <>Team Access <img src={orangeComingSoon} alt="" /></>,
              <>Advanced Analytics and Reporting <img src={orangeComingSoon} alt="" /></>,
              <>API access for custom integrations <img src={orangeComingSoon} alt="" /></>
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