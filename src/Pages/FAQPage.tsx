import React from "react";
import FAQ from "../components/FAQ";
import type { FAQItem } from "../components/FAQ"; // ✅ type-only
import "../components/FAQ.scss";
import GradientText from "../components/GradientText";

const faqData: FAQItem[] = [
  {
    question: "How do I sign up?",
    answer: "Click the 'Get Started' button and fill in your details."
  },
  {
    question: "Is this service free?",
    answer: "We have both free and paid plans depending on your needs."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription at any time."
  },
  {
    question: "Do you offer support?",
    answer: "Yes, you can contact us via email or live chat."
  },
  {
    question: "Can I use this on mobile?",
    answer: "Absolutely! Our platform works perfectly on mobile devices."
  }
];

const FAQPage: React.FC = () => {
  return (
    <div style={{ background: "white", padding: "20px", borderRadius: "12px" }}>
<h1 style={{ marginBottom: "1rem", fontSize: "48px", color: "black" }}>
  Frequently Asked{" "}
  <span
    style={{
      background: "linear-gradient(90deg, #4168ddff, #8e2de2)",
      WebkitBackgroundClip: "text",   // must be camelCase
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
