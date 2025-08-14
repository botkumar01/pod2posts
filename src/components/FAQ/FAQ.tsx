import React, { useState } from "react";
import "./FAQ.scss";

// ✅ export the interface so other files can import it
export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {items.map((item, index) => (
        <div key={index} className="faq-item">
          <button className="faq-question" onClick={() => toggleFAQ(index)}>
            <span>{item.question}</span>
            <span className={`faq-arrow ${openIndex === index ? "open" : ""}`}>
              ▶
            </span>
          </button>

          <div
            className={`faq-answer-wrapper ${
              openIndex === index ? "open" : ""
            }`}
          >
            <div className="faq-answer">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default FAQ; // for FAQ
// export type FAQItem = { ... }; // or export interface FAQItem { ... }

