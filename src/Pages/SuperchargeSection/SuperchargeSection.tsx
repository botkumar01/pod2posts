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
  initial={{ opacity: 0, y: 100, scale: 1 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
>
  <img src={Social} alt="Social Media Icons" />

  {/* Overlay for fading top & bottom */}
  <div className="fade-overlay"></div>
</motion.div>



</div>
    // </div>
  );       
} 
export default SuperchargeSection;
