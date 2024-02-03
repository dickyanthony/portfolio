import React from "react";

function ItemHeader(props) {
  const { item } = props;

  return (
    <li
      key={item.id}
      onClick={item.onClick}
      className="text-slate-100 text-xs text-[18px] px-4 flex justify-center w-full"
    >
      {item.title}
    </li>
  );
}

export default ItemHeader;
