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
    <div
      className={`text-slate-50 font-bold text-5xl ${className} text-primary-text`}
    >
      {children}
    </div>
  );
};

export { Title, PrimaryTitle };
