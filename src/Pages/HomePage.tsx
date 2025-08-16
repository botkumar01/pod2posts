import "./HomePage.scss";
import { motion, type Transition } from "framer-motion";

import Nav from "../components/Nav/Nav";
import Button from "../components/Button";
import InfoCard from "../components/InfoCard";
import GradientText from "../components/GradientText";
import FAQPage from "./FAQPage";
import PodcastCard from "../components/podcastCard";
import SuperchargeSection from "./SuperchargeSection/SuperchargeSection";
import Footer from "./Footer";

import audioIcon from "../assets/audio.png";
import girlPod from "../assets/Girl.png";
import convo from "../assets/convo.png";

import AnimatedFloatingCards from "./AnimatedFloatingCards";
import PricingPage from "./PricingPage";

const heroSpanAnimation = {
  hidden: { opacity: 0, y: 10, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const heroSpanTransition = {
  type: "tween",
  ease: "easeOut",
  duration: 0.4
}

const HomePage: React.FC = () => {
  return (
    <>
      <div className="homePage">
        <Nav
          items={[
            { title: "Platform", link: "/" },
            { title: "Solution", link: "/solution" },
            { title: "Pricing", link: "/pricing" },
            { title: "FAQ", link: "/faq" },
            { title: <Button variant="primary" />, link: "/cta" },
          ]}
        />

        <section className="hero">
          <span className="sr-only">
            Grow Your Podcast Audience 3x Faster With Visual Content
          </span>
          <motion.h1
            aria-hidden
            style={{
              margin: "0 0 2rem 0",
              fontSize: "59px",
              fontWeight: 500,
              color: "Black",
              textAlign: "center",
            }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: .08,
                },
              },
            }}
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {"Grow Your Podcast Audience".split(" ").map((word, index) => (
              <motion.span
                key={index}
                variants={heroSpanAnimation}
                transition={heroSpanTransition as Transition}
              >
                {word}{" "}
              </motion.span>
            ))}
            <motion.span
              style={{
                fontFamily: "Geist, sans-serif",
                background: "linear-gradient(90deg, #8e2de2, #a1391689)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 500,
                display: "inline",
              }}
              variants={heroSpanAnimation}
              transition={heroSpanTransition as Transition}
            >
              1x Faster
            </motion.span>{" "}
            {"With Visual Content".split(" ").map((word, index) => (
              <motion.span
                key={index}
                variants={heroSpanAnimation}
                transition={heroSpanTransition as Transition}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.h1>{" "}
          <motion.h3
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, staggerChildren: 0.5, delay: 1.5 }}
          >
            Turn your best podcast moments into social media posts that actually
            get shared. No design skills needed. Just 2 minutes per episode.
          </motion.h3>
          <motion.div 
            className="cta"
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, staggerChildren: 0.5, delay: 1.5 }}
          >
            <Button variant="white" text="Watch Demo" />
            <Button variant="primary" text="Get Started" />
          </motion.div>
        </section>

        <section className="placeholderImage"></section>

        <section className="about">
          <motion.div 
            className="aboutImage left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .75 }}
            viewport={{ once: true, amount: 0.7 }}
          >
            <span className="title">About PodToPosts</span>
            <div>
              <h2 className="boldText">1K+</h2>
              <span className="subtext">Pods converted to Posts</span>
            </div>
          </motion.div>
          <motion.div 
            className="aboutText right"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .75, delay: .25 }}
            viewport={{ once: true, amount: 0.7 }}
          >
            <h2>
              Turn your best podcast moments into social media posts that
              actually get shared. No design skills needed. Just 2 minutes per
              episode.
            </h2>
            <Button variant="primary" text="Read about PodToPosts" />
          </motion.div>
        </section>

        <section className="infoCardPanel">
          <InfoCard
            icon={audioIcon}
            title="Audio-Only Posts Get Ignored"
            description="Social media algorithms favor visual content over audio links"
            linkText="Low Reach"
            linkUrl="#"
            delay={0.2}
          />

          <InfoCard
            icon={audioIcon}
            title="Competing with Millions"
            description="Your amazing content gets lost in the podcast noise."
            linkText="No Discovery"
            linkUrl="#"
            delay={0.6}
          />

          <InfoCard
            icon={audioIcon}
            title="Too Busy Creating to Promote"
            description="You focus on episodes but have no time for marketing"
            linkText="Show Growth"
            linkUrl="#"
            delay={1}
          />
        </section>

        <motion.section 
          className="vcmSection"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .25 }}
          viewport={{ once: true, amount: 0.5 }}
        >
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
                  delay={.2}
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
                  delay={1}
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
                  delay={.6}
                />
              </div>
            </div>
          </div>
        </motion.section>

        <section className="floatingCards">
          <h2>Features That Drive Growth</h2>
          <div className="imageAndText">
            <img src={convo} alt="" />
            <GradientText text="Explore the Posts by Podtoposts" />
          </div>

          <AnimatedFloatingCards />
        </section>
        <PricingPage />
        <br />
        <br />
        <br />
          
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <FAQPage />
        </motion.div>
        
        <SuperchargeSection />
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
