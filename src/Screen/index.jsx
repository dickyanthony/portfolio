import React from "react";
import Header from "./Header";
import FirstContent from "./Body/FirstContent";
import SecondContent from "./Body/SecondContent";
import Footer from "./Footer";
import MyExperience from "./Body/MyExperience";
import { WrapCenter } from "../component";
import MySkills from "./Body/MySkills";

const WrappedHeader = WrapCenter(Header);
const WrappedFirstContent = WrapCenter(FirstContent);
const WrappedMySkills = WrapCenter(MySkills);
const WrappedFooter = WrapCenter(Footer);

const WrappedMyExperience = () => {
  return (
    <div className="w-full flex justify-center bg-[#2d343f] items-center mt-52 p-10 pb-20">
      <div className="w-6/6 flex flex-col justify-center items-center xl:w-5/6 sm:w-5/6">
        <MyExperience />
      </div>
    </div>
  );
};

export default function Main() {
  return (
    <>
      <WrappedHeader />
      <WrappedFirstContent />
      <WrappedMyExperience />
      <WrappedMySkills />

      <WrappedFooter />
    </>
  );
}
