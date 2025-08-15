import "./HomePage.scss";

import Nav from "../components/Nav/Nav";
import Button from "../components/Button";

const HomePage: React.FC = () => {
  return (
    <div className="homePage">
      <Nav
        items={[
          { title: "Platform", link: "/" },
          { title: "Solution", link: "/solution" },
          { title: "Features", link: "/features" },
          { title: "FAQ", link: "/faq" },
          { title: <Button variant="primary" />, link: "/cta" }
        ]}
      />


      <h1>Welcome to the Home Page</h1>
      
    </div>
  );
};

export default HomePage;