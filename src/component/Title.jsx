import React from "react";

const Title = (props) => {
  const { children, className } = props;
  return (
    <div className={`text-slate-50 font-bold text-5xl ${className}`}>
      {children}
    </div>
  );
};

export default Title;
