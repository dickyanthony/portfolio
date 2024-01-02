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
  const { text = "LEARN MORE" } = props;
  const [onAnimate, setOnAnimate] = useState(true);
  const [style, setStyle] = useState(show);

  return (
    <div className="w-fit">
      <motion.div
        onMouseEnter={() => {
          setOnAnimate(true);
          setStyle(show);
        }}
        onMouseLeave={() => {
          setOnAnimate(false);
        }}
        className="w-auto flex flex-row mt-4"
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
                    duration: 0.7,
                    delay: 0.7,
                  }
                : undefined
            }
            exit={{ translateX: 0, opacity: 1, duration: 0.7, delay: 0.7 }}
            className="flex flex-1 text-white items-center ml-2"
          >
            <FaArrowRight />
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <motion.div
        className={"w-full bg-white mt-2 h-1 opacity-50"}
        key={onAnimate}
        animate={
          onAnimate
            ? {
                opacity: 1,
                duration: 0.7,
                delay: 0.7,
              }
            : undefined
        }
      ></motion.div>
    </div>
  );
};

export default AnimateTextArrow;
{
  /* <motion.div
style={{
  width: 150,
  height: 150,
  borderRadius: 30,
  backgroundColor: "rgba(255,255,255,0.5)",
  cursor: "pointer",
}}
onHover={() => setVisible(!isVisible)}
>
<AnimatePresence>
  {isVisible && (
    <motion.div
      style={{
        width: 80,
        height: 80,
        borderRadius: 15,
        backgroundColor: "#fff",
        margin: 35,
      }}
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
    />
  )}
</AnimatePresence>
</motion.div> */
}
