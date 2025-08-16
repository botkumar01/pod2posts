
import "./PricingCard.scss";

import type { JSX } from "react";

import Button from "../Button";

import greyGlobe from "../../assets/price_imgs/grey_globe.png";
import purpleRocket from "../../assets/price_imgs/purple_rocket.png";
import orangeAI from "../../assets/price_imgs/orange_ai.png";

import purpleMostPop from "../../assets/price_imgs/purple_most_pop.png";

import greyTick from "../../assets/price_imgs/grey_tick.png";
import purpleTick from "../../assets/price_imgs/purple_tick.png";
import orangeTick from "../../assets/price_imgs/orange_tick.png";

type pointText = string | JSX.Element;

type PricingCardProps = {
    title: "Starter" | "Professional" | "Agency",
    description: string | JSX.Element,
    originalPrice: string,
    discountedPrice: string,
    color: "white" | "purple" | "orange",
    points: pointText[]
}

function getListImage(title: PricingCardProps["title"]) {
    if (title === "Starter") return greyTick
    if (title === "Professional") return purpleTick
    if (title === "Agency") return orangeTick
}

function getTierImage(title: PricingCardProps["title"]) {
    if (title === "Starter") return greyGlobe
    if (title === "Professional") return purpleRocket
    if (title === "Agency") return orangeAI
}

const PricingCard: React.FC<PricingCardProps> = ({ title, description, originalPrice, discountedPrice, color, points }) => {
    return (
        <div className={`pricingCard ${color}`}>
            {
                (title === "Professional") && <img className="label" src={purpleMostPop} alt="" />
            }
            <h2>
                <img src={getTierImage(title)} />
                {title}
            </h2>
            <p className="desc">{description}</p>
            <div className="price">
                <span className="original">
                    {originalPrice}
                </span>
                {" "}
                <span className="discount">
                    {discountedPrice}
                </span>
                {" "}
                for life
            </div>
            <div className="tierInfo">
                <ul>
                    {points.map((point, index) => (
                        <li key={index}>
                            <img className="tickImage" src={
                                getListImage(title)
                            } alt="" />
                            {point}
                        </li>
                    ))}
                </ul>
            </div>

            <Button
                variant={color}
                text="Get Started"
            />

        </div>
    )
}

export default PricingCard