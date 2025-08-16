import React from "react";
import FAQ from "../components/FAQ/FAQ";
import type { FAQItem } from "../components/FAQ/FAQ";
import "../components/FAQ/FAQ.scss";

const faqData: FAQItem[] = [
  {
    question: "How do I sign up?",
    answer: "Click the 'Get Started' button and fill in your details.",
  },
  {
    question: "Is this service free?",
    answer: "We have both free and paid plans depending on your needs.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription at any time.",
  },
  {
    question: "Do you offer support?",
    answer: "Yes, you can contact us via email or live chat.",
  },
  {
    question: "Can I use this on mobile?",
    answer: "Absolutely! Our platform works perfectly on mobile devices.",
  },
];

const FAQPage: React.FC = () => {
  return (
    <div>
      <h1 style={{ margin: "0 0 2rem 0", fontSize: "48px", textAlign: "center" }}>
        Frequently Asked{" "}
        <span
          style={{
            background: "linear-gradient(90deg, #8A38F5, #dd7f41cf)",
            WebkitBackgroundClip: "text", // must be camelCase
            WebkitTextFillColor: "transparent", // must be camelCase
            fontWeight: 700,
            display: "inline",
          }}
        >
          Questions
        </span>
      </h1>

      <FAQ items={faqData} />
    </div>
  );
};

export default FAQPage;
