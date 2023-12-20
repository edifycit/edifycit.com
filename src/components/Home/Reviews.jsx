"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Testimonies from "../Burrh/Testimonies";

const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <>
      {/* <div className="relative">
        <div className="flex max-md:gap-4">
          <div className="w-[8.3%] flex flex-col items-center" ref={ref}>
            <div
              style={{
                opacity: isInView ? "1" : "0",
                transition: "all  0.5s",
              }}
              className="relative"
            >
              <span className="absolute bottom-[50%] left-[50%] glow2 h-0 w-0 z-[9999999]" />
              <svg
                width="30"
                version="1.1"
                height="44"
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
                data-view-component="true"
                className=" text-white"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M8.34315 14H14M14 14V8.34315M14 14L5.63604 5.63604M3.17216 10.2432C2.60828 13.0904 3.42957 16.1575 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C16.1575 3.42957 13.0904 2.60828 10.2432 3.17216"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="h-full">
              <div
                style={{
                  height: isInView ? "100%" : "0",
                  transition: "all  0.5s",
                  transitionDelay: "0.3s",
                }}
                className="bg-gradient-to-b from-indigo-500 w-[4px]"
              />
            </div>
          </div>

          <div
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(-100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
            }}
            className="pb-16"
          >
            <h3 className="text-5xl mb-20 ">
              <span className="text-indigo-500 mr-2"> Our </span>
              Reviews
            </h3>
          </div>

          <Image
            width={700}
            height={700}
            className="absolute top-0 -z-40 -right-[20%] animate-spin-slow max-lg:hidden"
            src="/images/box.svg"
            alt="background-box"
          />
        </div>
      </div> */}
      <div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        }}
      >
        <Testimonies />
      </div>
    </>
  );
};

export default Reviews;
