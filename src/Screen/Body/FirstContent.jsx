import React from "react";
import { useMediaQuery } from "react-responsive";
import { Description, PrimaryTitle, Title } from "../../component";
import { TITLE, TITLE_ROLE, TITLE_DESC } from "../../constant";
import Reveal from "../../component/Reveal";

const LeftView = () => {
  return (
    <div className="px-5 order-2 xl:order-1">
      <Reveal>
        <Title className="text-7xl tracking-widest max-[639px]:text-3xl">
          {TITLE}
        </Title>
      </Reveal>

      <PrimaryTitle className="text-6xl mt-4 tracking-widest max-[639px]:text-2xl">
        <Reveal>
          <span>A </span>
          {TITLE_ROLE}
        </Reveal>
      </PrimaryTitle>

      <Reveal>
        <Description className="mt-10">{TITLE_DESC}</Description>
      </Reveal>
    </div>
  );
};

const RightView = () => {
  const small = useMediaQuery({ maxWidth: "639px" });
  console.log(small);
  return (
    <div className="flex px-5 order-1 xl:order-2 justify-center">
      {/* <div className="w-3/6"> */}
      <Reveal>
        <img
          alt="profile"
          style={{ borderRadius: "50%" }}
          className="transform translate-x-0 translate-y-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 opacity-100 transform-style-flat"
          width={small ? 200 : 400}
          height={small ? 200 : 400}
          src={require("../../assets/images/profile.png")}
        />
      </Reveal>
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

function FirstContent() {
  return (
    <div
      id="home"
      className="container mx-auto max-w-screen-xl pb-12 pt-12 mt-4 lg:pr-10 lg:pl-10 flex flex-row justify-center content-center "
    >
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 text-start mt-20 xl:flex-col-reverse max-[639px]:mt-0">
        <LeftView />
        <RightView />
      </div>
    </div>
  );
}

export default FirstContent;
