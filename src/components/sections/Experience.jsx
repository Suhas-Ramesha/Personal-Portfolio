import React, { useEffect, useRef } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import { experiences } from "../../data/constants";
import ExperienceCard from "../cards/ExperienceCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  margin-top: 50px;
  position: rlative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (min-width: 1400px) {
    max-width: 1400px;
  }
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Experience = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    if (!timelineRef.current) return;

    // Wait for DOM to render VerticalTimeline elements
    const timer = setTimeout(() => {
      // Target the entire vertical-timeline-element (includes both icon and content card)
      const timelineElements = timelineRef.current?.querySelectorAll('.vertical-timeline-element') || [];
      
      timelineElements.forEach((element, index) => {
        if (!element) return;

        // Animate the entire element (card + icon) as a whole
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 80,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, 150);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars?.trigger?.classList?.contains('vertical-timeline-element')) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <Container id="Experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          My work experience as a software engineer and working on different
          companies and projects.
        </Desc>

        <VerticalTimeline ref={timelineRef}>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id ?? index}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  );
};

export default Experience;
