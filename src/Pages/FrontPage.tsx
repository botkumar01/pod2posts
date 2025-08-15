import React from "react";
import Button from "../components/Button";

const IntroSection: React.FC = () => {
  return (
    <div>
      <h1
        style={{
          margin: "0 0 2rem 0",
          fontSize: "62px",
            fontWeight: 500,
          color: "Black",
          textAlign: "center",
        }}
      >
        Grow Your Podcast Audience <br/>{" "}
        <span
          style={{
  fontFamily: "Geist, sans-serif",
  background: "linear-gradient(90deg, #7541ddb5, #8e2de2)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: 500,
  display: "inline",
}}

        >
          3x Faster
        </span>{" "}
          With Visual Content
      </h1>

     <p className="responsive-text">
  Turn your best podcast moments into social media posts that actually get shared.
  No design skills needed. Just 2 minutes per episode.
</p>

<style>
  {`
    .responsive-text {
      text-align: center;
      font-size: 21px;
      color: #0000007e;
      width: 55%;
      margin: 0 auto;
    }

    @media (max-width: 480px) {
      .responsive-text {
        font-size: 16px;
        width: 90%;
      }
    }

    @media (max-width: 768px) and (min-width: 481px) {
      .responsive-text {
        font-size: 18px;
        width: 70%;
      }
    }
  `}
</style>


      {/* Bnt1 component at the bottom */}
      <div style={{ textAlign: "center", marginTop: "2rem"}}>
        <Button text="Get Started" variant="white"/>
        {/* <div></div> */}
        {" "}{" "}{" "}{" "}{" "}&nbsp;&nbsp;&nbsp;
        <Button text="Get Started" variant="primary" />
        
      </div>
    </div>
  );
};

export default IntroSection;
