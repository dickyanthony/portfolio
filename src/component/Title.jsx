import React from "react";

const Title = (props) => {
  const { children, className } = props;
  return (
    <div className={`text-slate-50 font-bold text-5xl ${className}`}>
      {children}
    </div>
  );
};

const PrimaryTitle = (props) => {
  const { children, className } = props;
  return (
    <div className={` font-bold text-5xl  text-primary-text ${className}`}>
      {children}
    </div>
  );
};

export { Title, PrimaryTitle };
