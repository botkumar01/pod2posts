
import "./PricingPage.scss";

import GradientText from "../components/GradientText";
import PricingCard from "../components/PricingCard/PricingCard";

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
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="tiers">
        <PricingCard
          title="Starter"
          description="Recommended for weekly podcasts."
          originalPrice="$29/month"
          discountedPrice="$19/month"
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
          originalPrice="$29/month"
          discountedPrice="$19/month"
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
          originalPrice="$29/month"
          discountedPrice="$19/month"
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