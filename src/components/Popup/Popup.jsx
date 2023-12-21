"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Popup = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowBanner(true);
    }, 5000);
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
          <Link className=" absolute bottom-4  right-[20px] " href="https://docs.google.com/forms/d/1jy3CheLQmM6qZ9BdjytVydRfoB-CHjluryO_EnpTr7E/edit" target="_blank">
            <button class=" px-[40px] border  border-white py-[10px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#5D9EF1] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
             Register Yourself
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Popup;
