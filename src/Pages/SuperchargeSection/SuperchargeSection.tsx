// import React from "react";
import "./SuperchargeSection.scss";
import Button from "../../components/Button.tsx";
import Social from "../../assets/Social_Media.png"; // replace with actual path
import { motion } from "framer-motion";

const SuperchargeSection = () => {
  return (
    <div className="supercharge-section">
      <div className="supercharge-content">
        <h2>
          Ready to Supercharge Your Social Media Content?
        </h2>
        <div className="but">
                    <Button text="Learn More!" variant="primary" /> 

        </div>
      </div>

   <motion.div
      className="supercharge-image"
      initial={{ 
        opacity: 0.1,                          // slightly visible at start
        clipPath: "polygon(0% 55%, 100% 100%, 100% 100%, 0% 100%)" // diagonal mask
      }}
      whileInView={{ 
        opacity: .6, 
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" // fully visible
      }}
      transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <img src={Social} alt="Social Media Icons" />
      <div className="fade-overlay"></div>
    </motion.div>
</div>
    // </div>
  );       
} 
export default SuperchargeSection;
