import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import Description from "./Description";
import { useState } from "react";

const show = {
  opacity: 1,
  translateX: 10,
  transition: {
    duration: 0.8,
    ease: "easeInOut",
  },
};

const AnimateTextArrow = (props) => {
  const {
    text = "LEARN MORE",
    onClick,
    showLine = true,
    arrowColor = "white",
    fontSize = "0.875rem",
    lineHeight = "0.875rem",
    arrowSize,
    ...descriptionStyle
  } = props;
  const [onAnimate, setOnAnimate] = useState(false);

  const slate100Width = onAnimate ? "100%" : "100%";
  const whiteWidth = onAnimate ? "100%" : "0%";

  return (
    <div className="w-fit flex flex-1 hover:cursor-pointer " onClick={onClick}>
      <motion.div
        onMouseEnter={() => {
          setOnAnimate(true);
        }}
        onMouseLeave={() => {
          setOnAnimate(false);
        }}
        className="w-auto flex flex-row mt-4 mb-3 pr-1 items-center"
      >
        <Description
          style={{
            fontSize: fontSize,
            lineHeight: lineHeight,
            ...descriptionStyle,
          }}
          className="text-white"
        >
          {text}
        </Description>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={onAnimate}
            animate={
              onAnimate
                ? {
                    translateX: 5,
                    opacity: 1,
                  }
                : undefined
            }
            exit={{ translateX: 0, opacity: 1 }}
            className="flex flex-1 text-white items-center ml-2"
          >
            <FaArrowRight color={arrowColor} size={arrowSize} />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {showLine && (
        <>
          <motion.div
            className="w-full bg-slate-100 h-1 opacity-50 absolute -bottom-2 "
            initial={{ width: slate100Width }}
            animate={{ width: slate100Width, duration: 0.7, delay: 0.7 }}
          />
          <motion.div
            className="w-full bg-white mt-3 h-1 opacity-100 absolute -bottom-2"
            initial={{ width: whiteWidth }}
            animate={{
              width: whiteWidth,
              duration: 0.7,
              delay: 0.7,
              zIndex: 2,
            }}
          />
        </>
      )}
    </div>
  );
};

export default AnimateTextArrow;
