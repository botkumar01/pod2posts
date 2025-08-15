import "./HomePage.scss";

import Nav from "../components/Nav/Nav";
import Button from "../components/Button";
import InfoCard from "../components/InfoCard";
import GradientText from "../components/GradientText";


import audioIcon from "../assets/audio.png";


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

      <section className="hero">
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
      </section>

      <section className="placeholderImage">
      </section>

      <section className="about">
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
      </section>
      
      
      <section className="infoCardPanel">

        <InfoCard
          icon={audioIcon}
          title="Audio-Only Posts Get Ignored"
          description="Social media algorithms favor visual content over audio links"
          linkText="Low reach"
          linkUrl="#"
        />

        <InfoCard
          icon={audioIcon}
          title="Audio-Only Posts Get Ignored"
          description="Social media algorithms favor visual content over audio links"
          linkText="Low reach"
          linkUrl="#"
        />

        <InfoCard
          icon={audioIcon}
          title="Audio-Only Posts Get Ignored"
          description="Social media algorithms favor visual content over audio links"
          linkText="Low reach"
          linkUrl="#"
        />

      </section>

      <section className="vcmSection">

        <div className="vcmImage left">
          <h1>
            The Secret Top Podcasters Use:
            <GradientText text="Visual Content Marketing" />
          </h1>

          <img src="" alt="" />

        </div>


      </section>

    </div>
  );
};

export default HomePage;