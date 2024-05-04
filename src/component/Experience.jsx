import React from "react";
import { Title } from "./Title";
import Description from "./Description";
import Divider from "./Divider";
import Reveal from "./Reveal";

export default function Experience(props) {
  const { company, role, roleDesc, from, to } = props;
  return (
    <>
      <div className="flex flex-row justify-between gap-10  mt-4 pb-10 pt-8 mb-2 max-[700px]:flex-col">
        <Reveal>
          <Title className="text-2xl">{company}</Title>
        </Reveal>
        <div className="w-4/6">
          <Reveal>
            <Title className="text-start text-3xl mb-2">{role}</Title>
          </Reveal>
          <Reveal>
            <Description className="text-start">{roleDesc}</Description>
          </Reveal>
        </div>
        <Reveal>
          <div className="flex flex-row gap-2">
            <Description>{from + "  "} </Description>
            <div className="text-primary-text"> / </div>
            <Description>{to}</Description>
          </div>
        </Reveal>
      </div>
      <Divider />
    </>
  );
}
