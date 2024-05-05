import React, { useState } from "react";
import { motion } from "framer-motion";
import { Reveal, Skills, Title } from "../../component";
import html from "../../assets/images/html.svg";
import js from "../../assets/images/js.svg";
import react from "../../assets/images/react.svg";
import express from "../../assets/images/express.svg";
import typescript from "../../assets/images/typescript.svg";
import NextArrow from "../../assets/images/arrow-next.svg";
import PrevArrow from "../../assets/images/arrow-prev.svg";
const SKILL_MAP = [
  {
    img: html,
    title: "HTML & CSS",
    description: "",
  },
  {
    img: js,
    title: "Javascript",
    description: "",
  },
  {
    img: react,
    title: "React JS",
    description: "",
  },
  {
    img: react,
    title: "React Native",
    description: "",
  },
  {
    img: express,
    title: "Express JS",
    description: "",
  },
  {
    img: typescript,
    title: "Typescript",
    description: "",
  },
];

export default function MySkills() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSkill = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === SKILL_MAP.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 200);
    }
  };

  const prevSkill = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? SKILL_MAP.length - 1 : prevIndex - 1
        );
        setIsAnimating(false);
      }, 200);
    }
  };

  return (
    <div
      id="skill"
      className="container mx-auto max-w-screen-xl pb-12 pt-12 mt-12 lg:pr-10 lg:pl-10 overflow-hidden max-[639px]:pl-10 max-[639px]:pr-10"
    >
      <Reveal>
        <div className="flex flex-row">
          <Title className="text-start text-2xl !text-primary-text"> ~ </Title>
          <Title className="text-start text-2xl mb-6"> My Skills</Title>
        </div>
      </Reveal>
      <div>
        <Reveal width="full">
          <div className="flex flex-row justify-between">
            <Title className="text-start text-2xl sm:text-5xl">
              My extensive list of skills
            </Title>
            <div className="flex flex-row">
              <motion.div
                whileHover={{
                  backgroundColor: "#075fe4",
                  scale: 0.8,
                }}
                initial={{ backgroundColor: "#2d343f" }}
                className="w-10 h-10 rounded-full flex justify-center content-center text-white text-2xl mr-4 hover:cursor-pointer sm:w-20 sm:h-20"
                onClick={prevSkill}
              >
                <img src={PrevArrow} alt="prev" width={50} height={50} />
              </motion.div>
              <motion.div
                whileHover={{
                  backgroundColor: "#075fe4",
                  scale: 0.8,
                }}
                initial={{ backgroundColor: "#2d343f" }}
                className="w-10 h-10 rounded-full flex justify-center content-center text-white text-2xl mr-4 hover:cursor-pointer sm:w-20 sm:h-20"
                onClick={nextSkill}
              >
                <img src={NextArrow} alt="next" width={50} height={50} />
              </motion.div>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <Title className="text-start text-2xl mt-2 mb-10 sm:text-5xl">
            amazing companies
          </Title>
        </Reveal>
      </div>

      <div className="flex flex-row mt-8 relative min-w-fit lg:pr-10 overflow-hidden">
        {SKILL_MAP.map((item, index) => (
          <div
            key={item.title}
            className={`-mr-24 transition-transform duration-500 transform ${
              isAnimating ? "scale-0" : "scale-100"
            } sm:-mr-32 md:-mr-44 lg:-mr-44 xl:-mr-64 min-[1500px]:-mr-80 max-[639px]:-mr-20`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
              minWidth: "0",
              flex: "1 0 auto",
              maxWidth: "calc(33.33% - 16px)",
            }}
          >
            <Skills
              img={item.img}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
