import React from "react";

function ItemHeader(props) {
  const { item } = props;
  console.log("item==>", item);
  return (
    <div key={item.id} className="text-slate-100 text-xs px-4 text-[18px]">
      <a>{item.title}</a>
    </div>
  );
}

export default ItemHeader;
