import React from "react";
import FAQ from "../components/FAQ/FAQ";
import type { FAQItem } from "../components/FAQ/FAQ";
import "./FAQPage.scss"; // Use SCSS for styling and media queries

const faqData: FAQItem[] = [
  {
    question: "I’ve never made a carousel before. Is this really for me?",
    answer: "Click the 'Get Started' button and fill in your details.",
  },
  {
    question: "What if I already use Canva?",
    answer: "We have both free and paid plans depending on your needs.",
  },
  {
    question: "Do the Carousels actually look professional?",
    answer: "Yes, you can cancel your subscription at any time.",
  },
  {
    question: "What about other content types?",
    answer: "Yes, you can contact us via email or live chat.",
  },
  {
    question: "How many carousels can I create?",
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
