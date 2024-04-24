import React from "react";
import Header from "./Header";
import FirstContent from "./Body/FirstContent";
import SecondContent from "./Body/SecondContent";
import Footer from "./Footer";

const WrapHeaderAndFirstContent = () => {
  return (
    <div className="w-6/6 flex flex-col justify-center items-center xl:w-5/6">
      <Header />
      <FirstContent />
    </div>
  );
};

const WrapSecondContent = () => {
  return (
    <div className="w-full flex justify-center bg-[#2d343f] items-center mt-52 p-10">
      <div className="container max-w-screen-xl  flex flex-col justify-center items-center xl:w-5/6">
        <SecondContent />
      </div>
    </div>
  );
};

const WrapFooter = () => {
  return (
    <div className="w-6/6 flex flex-col justify-center items-center xl:w-5/6">
      <Footer />
    </div>
  );
};

export default function Main() {
  return (
    <>
      <WrapHeaderAndFirstContent />
      <WrapSecondContent />
      <WrapFooter />
    </>
  );
}
