import React from "react";
import { ItemHeader } from "../../component";

const itemHeader = [
  { id: 1, title: "Home" },
  { id: 2, title: "About" },
  { id: 3, title: "Contact" },
];

function Header() {
  return (
    <div className="w-full max-w-screen-xl h-20 flex flex-row mt-2">
      <div className="justify-start flex flex-1 align-middle text-center">
        <div className="text-white self-center font-bold text-[28px]">
          Developer
        </div>
      </div>
      <div className="flex flex-row self-center">
        {itemHeader.map((item) => (
          <ItemHeader key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Header;
