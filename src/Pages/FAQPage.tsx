import React from "react";
import FAQ from "../components/FAQ/FAQ";
import type { FAQItem } from "../components/FAQ/FAQ";
import "./FAQPage.scss"; // Use SCSS for styling and media queries

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
    <div className="faq-page">
      <h1 className="faq-title">
        Frequently Asked{" "}
        <span className="faq-gradient">Questions</span>
      </h1>

      <FAQ items={faqData} />
    </div>
  );
};

export default FAQPage;
