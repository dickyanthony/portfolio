import React from "react";

function WrapCenter(WrappedComponent) {
  return function (props) {
    return (
      <div className="w-screen flex flex-col justify-center  xl:w-5/6 sm:w-5/6 ">
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default WrapCenter;
