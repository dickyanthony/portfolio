import React from "react";
import { NavDesktop, NavMobile } from "../../component";
import { ITEM_HEADER } from "../../constant/Content";

export default function Header() {
  return (
    <div className="container mx-auto max-w-screen-xl pb-12 pt-12 lg:pr-10 lg:pl-10 flex flex-row justify-center content-center max-[1249px]:pb-4">
      <nav className="flex container items-center justify-between py-1 lg:py-5">
        <span className="text-3xl text-white font-bold tracking-wider">
          Dicky.
        </span>
        <NavMobile item={ITEM_HEADER} />
        <NavDesktop item={ITEM_HEADER} />
      </nav>
    </div>
  );
}
