import React from "react";
import Header from "./Header";
import FirstContent from "./Body/FirstContent";

export default function Main() {
  return (
    <div className="w-5/6 flex flex-col justify-center items-center">
      <Header />
      <FirstContent />
    </div>
  );
}
