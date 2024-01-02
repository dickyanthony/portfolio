import React from "react";
import {
  AnimateTextArrow,
  Description,
  PrimaryTitle,
  Title,
} from "../../component";
import { TITLE, TITLE_ROLE, TITLE_DESC, ABOUT_ME_DESC } from "../../constant";
import Reveal from "../../component/Reveal";

function FirstContent() {
  return (
    <div className="w-full max-w-screen-xl h-auto">
      <div className="grid grid-cols-2 gap-10 text-start mt-20">
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

        <div className="flex justify-end">
          <div className="w-3/6">
            <Reveal>
              <Title className="text-sm">ABOUT ME</Title>
            </Reveal>
            <Reveal>
              <Description className="mt-3">{ABOUT_ME_DESC}</Description>
            </Reveal>
            <Reveal>
              <AnimateTextArrow />
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstContent;
