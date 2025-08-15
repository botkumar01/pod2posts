// import React from "react";
import "./SuperchargeSection.scss";
import Button from "../../components/Button.tsx";
import Social from "../../assets/Social_Media.png"; // replace with actual path
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

     <div className="supercharge-image">
  <img src={Social} alt="Social Media Icons" />
  <div className="fade-overlay"></div>
</div>
    </div>
  );       
} 
export default SuperchargeSection;
