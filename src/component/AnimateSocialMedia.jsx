import React, { useState } from "react";
import { Title } from "./Title";
import { motion } from "framer-motion";
import {
  PiInstagramLogoFill,
  PiLinkedinLogoFill,
  PiFacebookLogoFill,
  PiTwitterLogoFill,
  PiGithubLogoFill,
  PiYoutubeLogoFill,
} from "react-icons/pi";

const AnimateSocialMedia = (props) => {
  const {
    className,
    size = 25,
    showInstagram = false,
    showLinkedin = false,
    showFacebook = false,
    showTwitter = false,
    showGithub = false,
    showYoutube = false,
    onClickInstagram = () => {},
    onClickLinkedin = () => {},
    onClickFacebook = () => {},
    onClickTwitter = () => {},
    onClickGithub = () => {},
    onClickYoutube = () => {},
  } = props;

  const [hoveredIcon, setHoveredIcon] = useState(null);

  const iconVariants = {
    hover: { translateY: -3 },
    unhover: { scale: 1 },
  };

  const handleIconHover = (icon) => {
    setHoveredIcon(icon?.type.name);
  };

  const handleIconUnhover = () => {
    setHoveredIcon(null);
  };

  const getIconColor = (icon) => {
    return hoveredIcon === icon.type.name
      ? "text-white duration-500 transition transition-colors ease-in-out hover:text-white"
      : "text-slate-400 duration-500 transition transition-colors ease-in-out hover:text-white";
  };
  return (
    <div className={`${className} w-full`}>
      <Title className="text-sm">FOLLOW ME</Title>
      <div className="flex flex-1 flex-row mt-2 gap-3">
        {showInstagram && (
          <motion.div
            variants={iconVariants}
            whileHover="hover"
            initial="unhover"
            className="hover:cursor-pointer"
            onClick={onClickInstagram}
            onMouseEnter={() => handleIconHover(<PiInstagramLogoFill />)}
            onMouseLeave={handleIconUnhover}
          >
            <PiInstagramLogoFill
              className={getIconColor(<PiInstagramLogoFill />)}
              size={size}
            />
          </motion.div>
        )}
        {showLinkedin && (
          <motion.div
            variants={iconVariants}
            whileHover="hover"
            initial="unhover"
            className="hover:cursor-pointer"
            onClick={onClickLinkedin}
            onMouseEnter={() => handleIconHover(<PiLinkedinLogoFill />)}
            onMouseLeave={handleIconUnhover}
          >
            <PiLinkedinLogoFill
              className={getIconColor(<PiLinkedinLogoFill />)}
              size={size}
            />
          </motion.div>
        )}
        {showFacebook && (
          <motion.div
            variants={iconVariants}
            whileHover="hover"
            initial="unhover"
            className="hover:cursor-pointer"
            onClick={onClickFacebook}
            onMouseEnter={() => handleIconHover(<PiFacebookLogoFill />)}
            onMouseLeave={handleIconUnhover}
          >
            <PiFacebookLogoFill
              className={getIconColor(<PiFacebookLogoFill />)}
              size={size}
            />
          </motion.div>
        )}
        {showTwitter && (
          <motion.div
            variants={iconVariants}
            whileHover="hover"
            initial="unhover"
            className="hover:cursor-pointer"
            onClick={onClickTwitter}
            onMouseEnter={() => handleIconHover(<PiTwitterLogoFill />)}
            onMouseLeave={handleIconUnhover}
          >
            <PiTwitterLogoFill
              className={getIconColor(<PiTwitterLogoFill />)}
              size={size}
            />
          </motion.div>
        )}
        {showGithub && (
          <motion.div
            variants={iconVariants}
            whileHover="hover"
            initial="unhover"
            className="hover:cursor-pointer "
            onClick={onClickGithub}
            onMouseEnter={() => handleIconHover(<PiGithubLogoFill />)}
            onMouseLeave={handleIconUnhover}
          >
            <PiGithubLogoFill
              className={getIconColor(<PiGithubLogoFill />)}
              size={size}
            />
          </motion.div>
        )}
        {showYoutube && (
          <motion.div
            variants={iconVariants}
            whileHover="hover"
            initial="unhover"
            className="hover:cursor-pointer "
            onClick={onClickYoutube}
            onMouseEnter={() => handleIconHover(<PiYoutubeLogoFill />)}
            onMouseLeave={handleIconUnhover}
          >
            <PiYoutubeLogoFill
              className={getIconColor(<PiYoutubeLogoFill />)}
              size={size}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AnimateSocialMedia;
