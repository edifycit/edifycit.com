import React from "react";

const loading = () => {
  return (
    <>
      <div className="h-screen w-full grid place-content-center absolute top-0 left-0 z-50 bg-[#151515]">
        <div className="honeycomb">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default loading;
