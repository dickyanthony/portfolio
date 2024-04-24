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
    <div className="px-5 order-2 xl:order-1">
      <Reveal>
        <Title className="text-7xl tracking-widest">{TITLE}</Title>
      </Reveal>
      <Reveal>
        <PrimaryTitle className="text-6xl mt-2 tracking-widest">
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
    <div className="flex px-5 order-1 xl:order-2 justify-center">
      {/* <div className="w-3/6"> */}
      <img
        alt="profile"
        style={{ borderRadius: "50%" }}
        className="transform translate-x-0 translate-y-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 opacity-100 transform-style-flat"
        width={400}
        height={400}
        src={require("../../assets/images/profile.png")}
      />
      {/* <Reveal>
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
        </Reveal> */}
    </div>
    // </div>
  );
};

function SecondContent() {
  return (
    <div className="container mx-auto  h-auto z-10 ">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 text-start mt-20 xl:flex-col-reverse">
        <LeftView />
        <RightView />
      </div>
    </div>
  );
}

export default SecondContent;
