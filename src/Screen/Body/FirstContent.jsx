import React from "react";
import { AnimateTextArrow, Description, Title } from "../../component";
import { TITLE, TITLE_DESC, ABOUT_ME_DESC } from "../../constant";

function FirstContent() {
  return (
    <div className="w-full max-w-screen-xl h-auto">
      <div className="grid grid-cols-2 gap-10 text-start mt-20">
        <div className="px-5">
          <Title className="text-6xl">{TITLE}</Title>
          <Description className="mt-5">{TITLE_DESC}</Description>
        </div>

        <div className="flex justify-end">
          <div className="w-3/6">
            <Title className="text-sm">ABOUT ME</Title>
            <Description className="mt-3">{ABOUT_ME_DESC}</Description>
            <AnimateTextArrow />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstContent;
