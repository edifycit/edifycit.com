"use client";
import Coursefeature from "@/components/Burrh/Coursefeature";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const Fcourse = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <>
      <div className="flex max-md:gap-4 relative">
        {/* side line */}
        <div className="ml-2 mr-10 flex flex-col items-center" ref={ref}>
          <div>
            <div
              style={{
                opacity: isInView ? "1" : "0",
                transition: "all  0.3s",
                transitionDelay: "0.3s",
              }}
              className=" relative"
            >
              <span className="absolute bottom-[50%] left-[50%] glow3 h-0 w-0 z-[9999999]" />
              <svg
                aria-hidden="true"
                height="44"
                viewBox="0 0 24 24"
                fill="currentColor"
                version="1.1"
                width="24"
                data-view-component="true"
                className="text-white courseSvgShadow my-[3px]"
              >
                <path d="M7.5 1.75C7.5.784 8.284 0 9.25 0h5.5c.966 0 1.75.784 1.75 1.75V4h4.75c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 21.25 22H2.75A1.75 1.75 0 0 1 1 20.25V5.75C1 4.784 1.784 4 2.75 4H7.5Zm-5 10.24v8.26c0 .138.112.25.25.25h18.5a.25.25 0 0 0 .25-.25v-8.26A4.235 4.235 0 0 1 18.75 13H5.25a4.235 4.235 0 0 1-2.75-1.01Zm19-3.24v-3a.25.25 0 0 0-.25-.25H2.75a.25.25 0 0 0-.25.25v3a2.75 2.75 0 0 0 2.75 2.75h13.5a2.75 2.75 0 0 0 2.75-2.75Zm-6.5-7a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25V4h6Z"></path>
              </svg>
            </div>
          </div>
          <div className="h-full">
            <div
              style={{
                height: isInView ? "100%" : "0",
                transition: "all  0.3s",
              }}
              className="bg-gradient-to-b from-[#ff9500] via-orange-400 to-transparent  w-[4px]"
            ></div>
          </div>
        </div>
        {/* side line */}

        <div
          className="pt-3"
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(-100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <h2 className="md:text-2xl text-lg mb-3 tpa">Browse Your Future</h2>
          <h3 className="text-5xl mb-20 tpa">
            <span className="text-[#ff9500]">Popular</span> <br />
            Courses to Learn
          </h3>
        </div>

        <Image
          width={700}
          height={700}
          className="absolute top-0 -right-[20%] animate-spin-slow max-lg:hidden"
          src="/images/circle.svg"
          alt="background-circle"
        />
      </div>

      <div
        className="md:max-w-6xl ml-4"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        }}
      >
        <Coursefeature />
      </div>
    </>
  );
};

export default Fcourse;
