import "./HomePage.scss";

import Nav from "../components/Nav/Nav";
import Button from "../components/Button";
import InfoCard from "../components/InfoCard";
import GradientText from "../components/GradientText";
// import Footer from "./Footer";
import FAQPage from "./FAQPage";
import PodcastCard from "../components/podcastCard";
import FeatureCard from "../components/FeatureCard";

import audioIcon from "../assets/audio.png";
import girlPod from "../assets/Girl.png";
import convo from "../assets/convo.png";
import logo from "../assets/BigLogo.png";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="homePage">
        <Nav
          items={[
            { title: "Platform", link: "/" },
            { title: "Solution", link: "/solution" },
            { title: "Features", link: "/features" },
            { title: "FAQ", link: "/faq" },
            { title: <Button variant="primary" />, link: "/cta" },
          ]}
        />

        <section className="hero">
          <h1>Grow Your Podcast Audience 1x Faster With Visual Content</h1>
          <h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            illum eaque dignissimos. Excepturi doloribus consectetur tempore
            officia provident ab optio.
          </h3>
          <div className="cta">
            <Button variant="white" text="Watch Demo" />
            <Button variant="primary" text="Get Started" />
          </div>
        </section>

        <section className="placeholderImage"></section>

        <section className="about">
          <div className="aboutImage left">
            <span className="title">About PodToPosts</span>
            <div>
              <h2 className="boldText">1K+</h2>
              <span className="subtext">Pods converted to Posts</span>
            </div>
          </div>
          <div className="aboutText right">
            <h2>
              Turn your best podcast moments into social media posts that
              actually get shared. No design skills needed. Just 2 minutes per
              episode.
            </h2>
            <Button variant="primary" text="Read about PodToPosts" />
          </div>
        </section>

        <section className="infoCardPanel">
          <InfoCard
            icon={audioIcon}
            title="Audio-Only Posts Get Ignored"
            description="Social media algorithms favor visual content over audio links"
            linkText="Low Reach"
            linkUrl="#"
          />

          <InfoCard
            icon={audioIcon}
            title="Competing with Millions"
            description="Your amazing content gets lost in the podcast noise."
            linkText="No Discovery"
            linkUrl="#"
          />

          <InfoCard
            icon={audioIcon}
            title="Too Busy Creating to Promote"
            description="You focus on episodes but have no time for marketing"
            linkText="Show Growth"
            linkUrl="#"
          />
        </section>

        <section className="vcmSection">
          <div className="vcmImage left">
            <h1>
              The Secret Top Podcasters Use:
              <br />
              <GradientText text="Visual Content Marketing" />
            </h1>
            <img src={girlPod} alt="" />
          </div>

          <div className="vcmText right">
            <span className="subtext">From Podcast to Viral Posts</span>

            <h1>
              The Secret Top Podcasters Use:
              <br />
              <GradientText text="Visual Content Marketing" />
            </h1>

            <div className="cardsContainer">
              <div className="row row1">
                <PodcastCard
                  title="Connect Your Podcast"
                  description="Just paste your RSS feed - works with any host"
                  list={[
                    "Works with any podcast platform",
                    "Automatic episode detection",
                    "No manual uploading",
                  ]}
                  number={1}
                  position="bottom-left"
                />
                <PodcastCard
                  title="Share & Watch Your Audience Grow"
                  description="Download polished visuals ready for any platform"
                  list={[
                    "Algorithm optimized formats",
                    "Multiple export options",
                    "Consistent branding",
                  ]}
                  number={3}
                  position="bottom-left"
                />
              </div>
              <div className="line"></div>
              <div className="row row2">
                <PodcastCard
                  title="AI Creates Visual Content"
                  description="Automatically extracts your best quotes and insights"
                  list={[
                    "Eye-catching carousels",
                    "Shareable quote cards",
                    "Engaging social posts",
                  ]}
                  number={2}
                  position="top-left"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="floatingCards">
          <h2>Features That Drive Growth</h2>
          <div className="imageAndText">
            <img src={convo} alt="" />
            <GradientText text="Explore the Posts by Podtoposts" />
          </div>

          <div className="cardsContainer">
            <div className="floaters">
              <div className="row row1 small">
                <FeatureCard
                  title="Smart Content Extraction"
                  description="AI finds the most shareable moments from your episodes"
                  iconSrc={audioIcon}
                />
                <FeatureCard
                  title="Professional Templates"
                  description="Designs that make you look like you hired a team"
                  iconSrc={audioIcon}
                />
              </div>

              <div className="row row2 long">
                <FeatureCard
                  title="Growth-Optimized Formats"
                  description="LinkedIn carousels, Instagram multi-posts, X graphics"
                  iconSrc={audioIcon}
                />
                <FeatureCard
                  title="Engagement-Driving Captions"
                  description="AI writes posts that spark conversations, drive discovery."
                  iconSrc={audioIcon}
                />
              </div>

              <div className="row row3 small">
                <FeatureCard
                  title="Promotion Calendar"
                  description="Plan your content weeks ahead for consistent growth"
                  iconSrc={audioIcon}
                />
                <FeatureCard
                  title="New Audience Discovery"
                  description="Reach people who would never search for podcasts"
                  iconSrc={audioIcon}
                />
              </div>
            </div>
            <div className="overlay">
              <img src={logo} alt="" />
            </div>
          </div>
        </section>

        <br />
        <br />
        <br />

        <FAQPage />
      </div>
{/*       <Footer /> */}
    </>
  );
};

export default HomePage;
