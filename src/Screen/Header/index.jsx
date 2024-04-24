import React from "react";
import { ItemHeader, NavDesktop, NavMobile } from "../../component";

const itemHeader = [
  { id: 1, title: "Home", onClick: () => {} },
  { id: 2, title: "About", onClick: () => {} },
  { id: 3, title: "Contact", onClick: () => {} },
];

export default function Header() {
  return (
    <div className="w-full max-w-screen-xl h-20 flex flex-row mt-2 z-20">
      <nav className="container flex items-center justify-between py-1 lg:py-5">
        <span className="text-3xl text-white font-bold tracking-wider">
          Dicky.
        </span>
        <NavMobile item={itemHeader} />
        <NavDesktop item={itemHeader} />
      </nav>
    </div>
  );
}
