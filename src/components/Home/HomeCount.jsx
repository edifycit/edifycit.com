"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import CountBanner from "../Burrh/CountBanner";

const HomeCount = () => {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const isInView = useInView(ref, { once: false });
  const isInView2 = useInView(ref1, { once: false });

  return (
    <>
      <div className="flex max-md:gap-4">
        <div
          className="max-md:w-[8.3%] flex flex-col md:flex-row items-center md:pl-[50px]"
          ref={ref}
        >
          <div className="h-full">
            <div
              style={{
                height: isInView ? "100%" : "0",
                transition: "all  0.5s",
              }}
              className="bg-gradient-to-t from-transparent via-indigo-500 to-transparent w-[4px]"
            />
          </div>
          <div>
            <Image
              width={700}
              height={700}
              style={{
                opacity: isInView ? "1" : "0",
                transition: "all  0.5s",
                transitionDelay: "0.3s",
              }}
              alt="animatio"
              className="max-md:hidden w-full"
              src="https://github.githubassets.com/images/modules/site/home-campaign/git-branch-security.svg"
            />
          </div>
        </div>

        <div
          className="flex flex-col justify-center gap-4 py-10 max-md:w-44"
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(-100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
          }}
        >
          <span className="text-lg md:text-2xl ">Edify College Of IT</span>
          <h3 className="text-5xl">
            <span className="text-indigo-400">Legacy</span> <br /> to be{" "}
            <span className="text-2xl md:text-5xl">Remembered</span>
          </h3>
        </div>
      </div>
      <div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        }}
      >
        <CountBanner />
      </div>
      {/* side line animation */}
      {/* <div className="w-[8.3%] h-28 flex flex-col items-center" ref={ref1}>
        <div
          style={{
            height: isInView2 ? "100%" : "0",
            transition: "all  0.5s",
          }}
          className="bg-gradient-to-t from-indigo-500 h-full w-[4px]"
        />
      </div> */}
      {/* side line animation */}
    </>
  );
};

export default HomeCount;
