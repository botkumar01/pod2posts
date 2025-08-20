import type { JSX } from "react";
import { useState, useRef } from "react";

import "./Nav.scss";

import siteIcon from "../../assets/logo.png";

import { Menu } from "lucide-react";

type NavItem = {
  title: string | JSX.Element;
  link: string;
};

const Nav: React.FC<{ items: NavItem[] }> = ({ items }) => {

	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
	const mobileMenuRef = useRef<HTMLDivElement>(null);

  return (
    <>
    <div className="platformIcon">
          <img src={siteIcon} alt="Platform Icon" />
          <span>PodoPosts</span>
        </div>
      <nav className="siteNav">
        

        <ul className="desktopMenu">
          {items.map((item) => (
            <li key={item.link}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>

        <div>{/* for spacing */}</div>

        <div className={`hamburger ${isMobileMenuOpen ? "open" : ""}`} ref={mobileMenuRef} onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          <Menu />
        </div>
      </nav>
      {/* Mobile Menu, absolutely positioned */}
      <div className={`mobileMenu ${(isMobileMenuOpen) ? "open" : ""}`}>
        <ul>
          {items.map((item) => (
            <li key={item.link}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Nav;
