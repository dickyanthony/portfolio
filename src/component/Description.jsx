import React from "react";

const Description = (props) => {
  const { children, className, style } = props;
  return (
    <div style={style} className={`text-[#c3cad5] tracking-wide ${className}`}>
      {children}
    </div>
  );
};

export default Description;
