import React from "react";
import Header from "./Header";
import FirstContent from "./Body/FirstContent";
import Reveal from "../component/Reveal";

export default function Main() {
  return (
    <div className="w-5/6 flex flex-col justify-center items-center">
      <Header />
      <FirstContent />
    </div>
  );
}
