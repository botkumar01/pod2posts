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

      <div className="hero">
        <h1>
            Grow Your Podcast Audience 1x Faster With Visual Content
        </h1>
        <h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem illum eaque dignissimos. Excepturi doloribus consectetur tempore officia provident ab optio.
        </h3>
        <div className="cta">
            <Button variant="white" text="Watch Demo" />
            <Button variant="primary" text="Get Started" />
        </div>
      </div>

      <div className="placeholderImage">
      </div>

      <div className="about">
        <div className="aboutImage left">
            <span className="title">About PodToPosts</span>
            <div>
                <h2 className="boldText">
                    1K+
                </h2>
                <span className="subtext">
                    Pods converted to Posts
                </span>
            </div>
        </div>
        <div className="aboutText right">
            <h2>
                Turn your best podcast moments into social media posts
                that actually get shared. No design skills needed.
                Just 2 minutes per episode.
            </h2>
            <Button variant="primary" text="Read about PodToPosts" />

        </div>
      </div>
      
    </div>
  );
};

export default HomePage;