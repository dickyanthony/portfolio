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
  const { text = "LEARN MORE", onClick } = props;
  const [onAnimate, setOnAnimate] = useState(true);
  const [style, setStyle] = useState(show);
  const slate100Width = onAnimate ? "100%" : "100%";
  const whiteWidth = onAnimate ? "100%" : "0%";

  return (
    <div className="w-fit flex flex-1 hover:cursor-pointer" onClick={onClick}>
      <motion.div
        onMouseEnter={() => {
          setOnAnimate(true);
          setStyle(show);
        }}
        onMouseLeave={() => {
          setOnAnimate(false);
        }}
        className="w-auto flex flex-row mt-4 mb-3 pr-1"
      >
        <Description className="text-white text-sm">{text}</Description>
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
            <FaArrowRight />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <motion.div
        className="w-full bg-slate-100 mt-3 h-1 opacity-50 absolute bottom-0 "
        initial={{ width: slate100Width }}
        animate={{ width: slate100Width, duration: 0.7, delay: 0.7 }}
      />
      <motion.div
        className="w-full bg-white mt-3 h-1 opacity-100 absolute bottom-0"
        initial={{ width: whiteWidth }}
        animate={{ width: whiteWidth, duration: 0.7, delay: 0.7, zIndex: 2 }}
      />
    </div>
  );
};

export default AnimateTextArrow;
