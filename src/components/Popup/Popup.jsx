"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Popup = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowBanner(true);
    }, 2000);
  }, []);

  useEffect(() => {
    if (showBanner) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "visible";
    }
  }, [showBanner]);

  return (
    <>
      <div className={showBanner ? "popupModal show" : "popupModal"}>
        <i
          className="bx bx-x poppubbox"
          onClick={() => setShowBanner(false)}
        ></i>

        <div
          className={`${
            showBanner ? "popUpBanner show" : "popUpBanner"
          } relative`}
          onClick={() => setShowBanner(false)}
        >
          <img src="./images/forweb.jpg" alt="" />
          <Link className="w-full  " href="https://docs.google.com/forms/d/1jy3CheLQmM6qZ9BdjytVydRfoB-CHjluryO_EnpTr7E/edit" target="_blank">
            <button className=" px-[40px]  w-full   py-[10px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden   scale-105 shadow-lg before:absolute before:top-0  before:w-full before:h-full before:bg-gradient-to-r before:from-[#5D9EF1] before:to-[#4338CA]   before:z-[-1] before:rounded-xl before:left-0 text-[#fff] animate-pulse ">
             Register Yourself
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Popup;
