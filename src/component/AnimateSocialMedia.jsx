import React from "react";
import { Title } from "./Title";
import {
  PiInstagramLogoFill,
  PiLinkedinLogoFill,
  PiFacebookLogoFill,
  PiTwitterLogoFill,
  PiGithubLogoFill,
  PiYoutubeLogoFill,
} from "react-icons/pi";
import "./../style/animateSocialMedia.css";

const AnimateSocialMedia = (props) => {
  const {
    title = "FOLLOW ME",
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

  return (
    <div className={`${className} w-full`}>
      <Title className="text-sm">{title}</Title>
      <div className="flex flex-1 flex-row mt-2 gap-5 containerSocialMedia">
        {showInstagram && (
          <PiInstagramLogoFill
            className="item text-sky-100 hover:cursor-pointer hover:scale-125"
            size={size}
            onClick={onClickInstagram}
          />
        )}
        {showLinkedin && (
          <PiLinkedinLogoFill
            className="item text-sky-100 hover:cursor-pointer hover:scale-125"
            size={size}
            onClick={onClickLinkedin}
          />
        )}
        {showFacebook && (
          <PiFacebookLogoFill
            className="item text-sky-100 hover:cursor-pointer hover:scale-125"
            size={size}
            onClick={onClickFacebook}
          />
        )}
        {showTwitter && (
          <PiTwitterLogoFill
            className="item text-sky-100 hover:cursor-pointer hover:scale-125"
            size={size}
            onClick={onClickTwitter}
          />
        )}
        {showGithub && (
          <PiGithubLogoFill
            className="item text-sky-100 hover:cursor-pointer hover:scale-125"
            size={size}
            onClick={onClickGithub}
          />
        )}
        {showYoutube && (
          <PiYoutubeLogoFill
            className="item text-sky-100 hover:cursor-pointer hover:scale-125"
            size={size}
            onClick={onClickYoutube}
          />
        )}
      </div>
    </div>
  );
};

export default AnimateSocialMedia;
