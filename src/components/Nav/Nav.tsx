import type { JSX } from "react";

import "./Nav.scss";

import siteIcon from "../../assets/logo.png";

type NavItem = {
  title: string | JSX.Element;
  link: string;
};

const Nav: React.FC<{ items: NavItem[] }> = ({ items }) => {
  return (
    <nav className="siteNav">

        <div className="platformIcon">
            <img src={siteIcon} alt="Platform Icon" />
            <span>PodToPosts</span>
        </div>

      <ul>
        {items.map((item) => (
          <li key={item.link}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>

      <div className="hamburger">
        
      </div>
      
    </nav>
  );
};

export default Nav;
