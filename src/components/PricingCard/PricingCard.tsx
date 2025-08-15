
import "./PricingCard.scss";

import greyGlobe from "../../assets/price_imgs/grey_globe.png";
import purpleRocket from "../../assets/price_imgs/purple_rocket.png";
import orangeAI from "../../assets/price_imgs/orange_ai.png";

import purpleMostPop from "../../assets/price_imgs/purple_most_pop.png";

type PricingCardProps = {
    title: "Starter" | "Professional" | "Agency",
    description: string,
    originalPrice: string,
    discountedPrice: string,
    color: "grey" | "purple" | "orange",
    points: string[]
}

const PricingCard: React.FC<PricingCardProps> = ({ title, description, originalPrice, discountedPrice, color, points }) => {
    return (
        <div className={`pricingCard ${color}`}>
            {
                (title === "Professional") && <img src={purpleMostPop} alt="" />
            }
            <h2>
                <img src={color === "grey" ? greyGlobe : color === "purple" ? purpleRocket : orangeAI} />
                {title}
            </h2>
            <p>{description}</p>
            <p>Original Price: {originalPrice}</p>
            <p>Discounted Price: {discountedPrice}</p>
            <ul>
                {points.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
        </div>
    )
}

export default PricingCard