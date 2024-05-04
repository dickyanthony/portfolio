import React from "react";
import { Title } from "./Title";
import Description from "./Description";
import Reveal from "./Reveal";
import { useMediaQuery } from "react-responsive";

export default function Skills(props) {
  const { img, title, description, className } = props;
  const small = useMediaQuery({ maxWidth: "639px" });
  return (
    <>
      <div
        style={{ padding: small ? "24px 22px 50px" : "124px 52px 100px" }}
        className={`w-40 h-25 bg-[#2d343f] object-contain rounded-3xl sm:w-80 sm:h-50 ${className}`}
      >
        <Reveal>
          <div className="w-20 h-20 rounded-full bg-primary-text flex justify-center items-center object-contain max-[639px]:w-10 max-[639px]:h-10">
            <img
              alt="skill logo"
              style={{
                borderRadius: "50%",
                fill: "white",
              }}
              // className="bg-primary-text"
              // className="transform translate-x-0 translate-y-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 opacity-100 transform-style-flat"
              width={small ? 25 : 50}
              height={small ? 25 : 50}
              // src={require("../../assets/images/profile.png")}
              src={img}
            />
          </div>
        </Reveal>
        <Reveal>
          <Title className="text-base mt-4 sm:text-2xl">{title}</Title>
        </Reveal>
        <Reveal>
          <Description className="text-start">{description}</Description>
        </Reveal>
      </div>
    </>
  );
}
