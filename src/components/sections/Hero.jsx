import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/HeroImage.jpg";
import HeroBgAnimation from "../HeroBgAnimation";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";
import StarCanvas from "../canvas/Stars";
import ScrollFloat from "../ScrollFloat";

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (max-width: 960px) {
    padding: 66px 16px;
    width: 100%;
    max-width: 100%;
  }

  @media (max-width: 640px) {
    padding: 32px 12px;
    width: 100%;
    max-width: 100%;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;
const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  box-sizing: border-box;
  padding: 0;

  @media (min-width: 1400px) {
    max-width: 1400px;
  }

  @media (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    padding: 0;
  }
  @media (max-width: 640px) {
    padding: 0;
  }
`;
const HeroLeftContainer = styled.div`
  width: 100%;
  max-width: 100%;
  order: 1;
  box-sizing: border-box;
  padding: 0;
  overflow-x: hidden;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 100%;
    padding: 0 8px;
  }
  @media (max-width: 640px) {
    padding: 0 4px;
    margin-bottom: 20px;
  }
`;
const HeroRightContainer = styled.div`
  width: 100%;
  max-width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  box-sizing: border-box;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    width: 100%;
    max-width: 100%;
    padding: 0;
  }

  @media (max-width: 640px) {
    margin-bottom: 24px;
    width: 100%;
    max-width: 100%;
  }
`;

// Title removed; ScrollFloat is used for the heading now

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  flex-wrap: wrap;
  word-break: break-word;
  overflow-wrap: break-word;

  @media (max-width: 960px) {
    text-align: center;
    justify-content: center;
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
    width: 100%;
    max-width: 100%;
    padding: 0 8px;
  }

  @media (max-width: 640px) {
    font-size: 18px;
    line-height: 36px;
    gap: 8px;
    padding: 0 4px;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  word-break: break-word;
  overflow-wrap: break-word;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 16px;
    line-height: 32px;
    width: 100%;
    max-width: 100%;
    padding: 0 8px;
    margin-bottom: 32px;
  }

  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 24px;
    padding: 0 4px;
    margin-bottom: 24px;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  box-sizing: border-box;
  margin: 0 auto;
  display: block;

  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;

     &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 
    color: white;
`;

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

const Hero = () => {
  return (
    <div id="About">
      <HeroContainer>
        <HeroBg>
          <StarCanvas />
          <HeroBgAnimation />
        </HeroBg>

        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <motion.div {...headTextAnimation} style={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}>
                <div style={{ width: '100%', maxWidth: '100%', overflow: 'hidden', boxSizing: 'border-box' }}>
                  <ScrollFloat textClassName="text-white" containerClassName="w-full max-w-full">
                    {`Hi, I am ${Bio.name}`}
                  </ScrollFloat>
                </div>
                <TextLoop>
                  I am a
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>

              <motion.div {...headContentAnimation} style={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}>
                <SubTitle>{Bio.description}</SubTitle>
              </motion.div>

              <ResumeButton href={Bio.resume} target="_blank">
                Check Resume
              </ResumeButton>
            </HeroLeftContainer>
            <HeroRightContainer>
              <motion.div {...headContentAnimation}>
                <Tilt>
                  <Img src={HeroImg} alt="Rishav Chanda" />
                </Tilt>
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default Hero;
