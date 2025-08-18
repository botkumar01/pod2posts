import { useRef, useLayoutEffect, useState, useEffect } from "react";
import FeatureCard from "../components/FeatureCard";
import logo from "../assets/BigLogo.png";

import growIcon from "../assets/small_icons/i1.png";
import peopleIcon from "../assets/small_icons/i2.png";
import circles from "../assets/circles.png";
import i6 from "../assets/small_icons/i6.png";
import commentIcon from "../assets/small_icons/i4.png";
import calendarIcon from "../assets/small_icons/i5.png";
import "./AnimatedFloatingCards.scss";

// ✅ Hook that triggers only once when in view
function useInViewOnce<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // stop observing after first trigger
        }
      },
      { threshold: 0.2 } // triggers when 20% visible
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, inView] as const;
}

const cards = [
  {
    title: "Smart Content Extraction",
    description: "AI finds the most shareable moments from your episodes",
    iconSrc: circles,
    row: 0,
    col: 0,
  },
  {
    title: "Engagement-Driving Captions",
    description: "AI writes posts that spark conversations, drive discovery.",
    iconSrc: commentIcon,
    row: 1,
    col: 1,
  },
  {
    title: "Professional Templates",
    description: "Designs that make you look like you hired a team",
    iconSrc: i6,
    row: 0,
    col: 1,
  },
  {
    title: "Promotion Calendar",
    description: "Plan your content weeks ahead for consistent growth",
    iconSrc: calendarIcon,
    row: 2,
    col: 0,
  },
  {
    title: "Growth-Optimized Formats",
    description: "LinkedIn carousels, Instagram multi-posts, X graphics",
    iconSrc: growIcon,
    row: 1,
    col: 0,
  },
  {
    title: "New Audience Discovery",
    description: "Reach people who would never search for podcasts",
    iconSrc: peopleIcon,
    row: 2,
    col: 1,
  },
];

export default function AnimatedFloatingCards() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 800);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const [containerRef, inView] = useInViewOnce<HTMLDivElement>();
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [transforms, setTransforms] = useState<{ x: number; y: number }[]>([]);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const parentRect = containerRef.current.getBoundingClientRect();
    const newTransforms = cardRefs.current.map((card) => {
      if (!card) return { x: 0, y: 0 };
      const cardRect = card.getBoundingClientRect();
      // center of parent
      const parentCenterX = parentRect.left + parentRect.width / 2;
      const parentCenterY = parentRect.top + parentRect.height / 2;
      // center of card
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;
      // offset needed to move card to center of parent
      return {
        x: parentCenterX - cardCenterX,
        y: parentCenterY - cardCenterY,
      };
    });
    setTransforms(newTransforms);
  }, [containerRef.current]);

  // Desktop animation (cards fly in from center)
  const getStyleDesktop = (i: number) => {
    const t = transforms[i] || { x: 0, y: 0 };
    return {
      opacity: inView ? 1 : 0,
      transform: inView
        ? "translate(0, 0) scale(1)"
        : `translate(${t.x}px, ${t.y}px) scale(0.5)`,
      transition:
        "transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1), opacity 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)",
      willChange: "transform, opacity",
    };
  };

  // Mobile animation (fade in from bottom, staggered)
  const getStyleMobile = (i: number) => {
    const baseDelay = 0.1;
    const delay = baseDelay * i;
    return {
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(40px)",
      transition: `transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1) ${delay}s, opacity 0.6s cubic-bezier(0.4, 0.0, 0.2, 1) ${delay}s`,
      willChange: "transform, opacity",
    };
  };

  return (
    <div
      className="cardsContainer"
      ref={containerRef}
      style={{ position: "relative" }}
    >
      <div className="floaters">
        <div className="row row1 small">
          {[0, 1].map((i) => (
            <div
              key={cards[i].title}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              style={isMobile ? getStyleMobile(i) : getStyleDesktop(i)}
            >
              <div className="Fe">
                <FeatureCard {...cards[i]} />
              </div>
            </div>
          ))}
        </div>
        <div className="row row2 long">
          {[2, 3].map((i) => (
            <div
              key={cards[i].title}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              style={isMobile ? getStyleMobile(i) : getStyleDesktop(i)}
            >
              <div className="Fe">
                <FeatureCard {...cards[i]} />
              </div>
            </div>
          ))}
        </div>
        <div className="row row3 small">
          {[4, 5].map((i) => (
            <div
              key={cards[i].title}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              style={isMobile ? getStyleMobile(i) : getStyleDesktop(i)}
            >
              <div className="Fe">
                <FeatureCard {...cards[i]} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="overlay">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}
