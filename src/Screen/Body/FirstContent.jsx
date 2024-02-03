import React from "react";
import {
  AnimateSocialMedia,
  AnimateTextArrow,
  Description,
  PrimaryTitle,
  Title,
} from "../../component";
import { TITLE, TITLE_ROLE, TITLE_DESC, ABOUT_ME_DESC } from "../../constant";
import Reveal from "../../component/Reveal";

const LeftView = () => {
  return (
    <div className="px-5">
      <Reveal>
        <Title className="text-6xl ">{TITLE}</Title>
      </Reveal>
      <Reveal>
        <PrimaryTitle className="text-4xl mt-2">
          <span>A </span>
          {TITLE_ROLE}
        </PrimaryTitle>
      </Reveal>
      <Reveal>
        <Description className="mt-5 ">{TITLE_DESC}</Description>
      </Reveal>
    </div>
  );
};

const RightView = () => {
  return (
    <div className="flex px-5 md:justify-end">
      <div className="w-3/6">
        <Reveal>
          <Title className="text-sm">ABOUT ME</Title>
        </Reveal>
        <Reveal>
          <Description className="mt-3">{ABOUT_ME_DESC}</Description>
        </Reveal>
        <Reveal>
          <AnimateTextArrow
            onClick={() => {
              console.log("Click");
            }}
          />
        </Reveal>
        <Reveal>
          <AnimateSocialMedia className="mt-5" showInstagram showGithub />
        </Reveal>
      </div>
    </div>
  );
};

function FirstContent() {
  return (
    <div className="container mx-auto max-w-screen-xl h-auto z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-start mt-20">
        <LeftView />
        <RightView />
      </div>
    </div>
  );
}

export default FirstContent;
