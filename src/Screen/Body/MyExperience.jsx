import React from "react";
import { Divider, Experience, Reveal, Title } from "../../component";
import { WORKING_LOCATION } from "../../constant";

export default function MyExperience() {
  return (
    <div
      id="experience"
      className="container mx-auto max-w-screen-xl pb-12 pt-12 mt-4 lg:pr-10 lg:pl-10"
    >
      <Reveal>
        <div className="flex flex-row">
          <Title className="text-start text-lg !text-primary-text"> ~ </Title>

          <Title className="text-start text-xl mb-6 min-[700px]:text-2xl">
            My Experience
          </Title>
        </div>
      </Reveal>
      <div>
        <Reveal>
          <Title className="text-start text-xl min-[700px]:text-5xl ">
            I've worked with some
          </Title>
        </Reveal>
        <Reveal>
          <Title className="text-start text-xl min-[700px]::text-5xl mt-2 mb-10">
            amazing companies
          </Title>
        </Reveal>
      </div>
      <Divider />
      <Experience
        company={WORKING_LOCATION}
        role="Web & Mobile Developer"
        roleDesc="I've been working with this company for over two years as a web and mobile developer, using the React and React Native frameworks."
        from="October 2021"
        to="Present"
      />
    </div>
  );
}
