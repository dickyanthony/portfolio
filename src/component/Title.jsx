import React from "react";

const Title = (props) => {
  const { children, className } = props;
  return (
    <div className={`${className} text-slate-50 font-bold`}>{children}</div>
  );
};

const PrimaryTitle = (props) => {
  const { children, className } = props;
  return (
    <div className={`${className} font-bold text-5xl  text-primary-text `}>
      {children}
    </div>
  );
};

export { Title, PrimaryTitle };
