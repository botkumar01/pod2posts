import "./HomePage.scss";
import { motion } from "framer-motion";

import Nav from "../components/Nav/Nav";
import Button from "../components/Button";
import InfoCard from "../components/InfoCard";
import GradientText from "../components/GradientText";
import FAQPage from "./FAQPage";
import PodcastCard from "../components/podcastCard";
import SuperchargeSection from "./SuperchargeSection/SuperchargeSection";
import Footer from "./Footer";
import MultiText from "../components/MultiText";
import audioIcon from "../assets/audio.png";
import girlPod from "../assets/Girl.png";
import convo from "../assets/convo.png";

import AnimatedFloatingCards from "./AnimatedFloatingCards";
import PricingPage from "./PricingPage";


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // delay between each child
    },
  },
};

// const itemVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
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

<motion.section
  className="hero"
  variants={containerVariants}   // parent controls stagger
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <motion.h1 className="hero-title" variants={fadeUpVariant}>
    Grow Your Podcast Audience <br />{" "}
    <span className="hero-gradient">
      <MultiText /> Faster
    </span>{" "}
    With Visual Content
  </motion.h1>

  <motion.h3 className="hero-subtitle" variants={fadeUpVariant}>
    Turn your best podcast moments into social media posts that actually get shared.
    No design skills needed. Just 2 minutes per episode.
  </motion.h3>

  <motion.div className="cta" variants={fadeUpVariant}>
    <Button variant="white" text="Watch Demo" />
    <Button variant="primary" text="Get Started" />
  </motion.div>
</motion.section>

<motion.section 
  className="placeholderImage"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <motion.div variants={fadeUpVariant}> {/* content inside */}</motion.div>
</motion.section>

{/* <motion.section 
  className="about"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
> */}
  {/* <motion.div variants={fadeUpVariant}> about content</motion.div> */}
{/* </motion.section> */}

{/* <motion.section 
  className="about"
  variants={fadeUpVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
> */}
  {/* About content */}
{/* </motion.section> */}
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
            <Button variant="primary" text="More about PodToPosts" />
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
