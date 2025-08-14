import { Instagram, Twitter, Linkedin } from "lucide-react";
import "./Footer.scss";
import Logo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Main Footer Content */}
        <div className="footer__main-content">
          {/* Left Section - Brand */}
          <div className="footer__brand">
            <div className="footer__brand-header">
              
            
            <img
                src={Logo}
                alt="PodtoPosts Logo"
                className="footer__brand-icon-inner"
            />

              <h3 className="footer__brand-title">PodtoPosts</h3>
            </div>
            <p className="footer__brand-description">
              Turn your podcast episodes into engaging social content automatically. Join the content creation revolution and amplify your voice across all platforms.
            </p>
          </div>

          {/* Center Section - Newsletter */}
          <div className="footer__newsletter">
            <h2 className="footer__newsletter-title">Stay Connected</h2>
            <div className="footer__newsletter-form">
              <input
                type="email"
                placeholder="Enter mail address"
                className="footer__newsletter-input"
              />
              <button className="footer__newsletter-button">
                Subscribe
              </button>
            </div>
          </div>

          {/* Right Section - Links */}
          <div className="footer__links">
            <div className="footer__links-section">
              <h4 className="footer__links-section-title">Product</h4>
              <ul className="footer__links-section-list">
                <li className="footer__links-section-item"><a href="#">Features</a></li>
                <li className="footer__links-section-item"><a href="#">Pricing</a></li>
                <li className="footer__links-section-item"><a href="#">Integrations</a></li>
                <li className="footer__links-section-item"><a href="#">API</a></li>
                <li className="footer__links-section-item"><a href="#">Changelog</a></li>
              </ul>
            </div>
            <div className="footer__links-section">
              <h4 className="footer__links-section-title">Support</h4>
              <ul className="footer__links-section-list">
                <li className="footer__links-section-item"><a href="#">Help Center</a></li>
                <li className="footer__links-section-item"><a href="#">Contact us</a></li>
                <li className="footer__links-section-item"><a href="#">Status</a></li>
                <li className="footer__links-section-item"><a href="#">Roadmap</a></li>
                <li className="footer__links-section-item"><a href="#">Community</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer__bottom">
          <div className="footer__bottom-legal">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </div>

          <div className="footer__bottom-right">
            <p className="footer__bottom-copyright">
              © 2025. All Rights Reserved. Pipelined
            </p>
           
          </div>
           <div className="footer__bottom-social">
              <a href="#">
                <Instagram size={20} />
              </a>
              <a href="#">
                <Twitter size={20} />
              </a>
              <a href="#">
                <Linkedin size={20} />
              </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;